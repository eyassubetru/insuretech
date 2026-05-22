import React, { useEffect, useState } from "react";
import PhoneInputComponent from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import axios from "axios";
import { isValidPhoneNumber } from "libphonenumber-js";

import { auth } from "../config/firebaseConfig";
import { signInWithCustomToken } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { getOrCreateDeviceId } from "../utility/getOrCreateDeviceId";

const PhoneInput = PhoneInputComponent.default || PhoneInputComponent;



const LoginForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({ status: "", message: "" });


  const apiUrl = import.meta.env.VITE_API_URL;

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    

    try {
      const cleanNumber = "+" + phoneNumber.replace(/\D/g, "");

      if (!isValidPhoneNumber(cleanNumber)) {
        setResponse({ status: "error", message: "Invalid phone number" });
        return;
      }

      if (password.length < 8) {
        setResponse({
          status: "error",
          message: "Password must be at least 8 characters",
        });
        return;
      }

      const deviceId = getOrCreateDeviceId();

      const { data } = await axios.post(`${apiUrl}/loginUser`, 
        {
        
        phone: cleanNumber,
        password,
      },
      {
        headers: {
            "x-device-id": deviceId,

        }
                });

      if (data?.success && data?.customToken) {
        await signInWithCustomToken(auth, data.customToken);
        localStorage.setItem("customerPhone", cleanNumber);

        setResponse({
          status: "success",
          message: "Logged in successfully",
        });
      } else {
        setResponse({
          status: "error",
          message: data?.message || "Login failed",
        });
      }
    } catch (error) {
      console.log("STATUS:", error.response?.status);
  console.log("DATA:", error.response?.data);
      setResponse({
        status: "error",
        message:
          error.response?.data?.message || "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);


  return (
    <div className="fixed inset-0 overflow-y-auto bg-[#140909] px-4 py-8 font-sans">

  {/* Background Glow */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-red-700/10 blur-[120px]" />
    <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto w-full max-w-md rounded-[2rem] border border-red-900/20 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]">

    <div className="px-6 py-8 sm:px-10">

      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-red-700">
          Welcome Back
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Login to your account
        </p>
      </div>

      <div className="flex flex-col gap-5">

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Phone Number
          </label>

          <PhoneInput
            country={"et"}
            value={phoneNumber}
            onChange={(value, country, e, formattedValue) => {
              setPhoneNumber(formattedValue);
            }}
            containerClass="!w-full"
            inputStyle={{
              width: "100%",
              height: "52px",
              backgroundColor: "#fff",
              border: "1px solid #fecaca",
              borderRadius: "16px",
              fontWeight: "600",
              color: "#111827",
              fontSize: "14px",
            }}
            buttonStyle={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "16px 0 0 16px",
            }}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[52px] w-full rounded-2xl border border-red-200 bg-white px-4 font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-500"
          />
        </div>

        {/* Response */}
        {response.message && (
          <div
            className={`rounded-2xl border p-3 text-center text-sm font-medium
              ${
                response.status === "error"
                  ? "border-red-200 bg-red-50 text-red-600"
                  : "border-green-200 bg-green-50 text-green-700"
              }
            `}
          >
            {response.message}
          </div>
        )}

        {/* Submit */}
        <button
          onClick={login}
          disabled={isLoading}
          className={`
            flex h-14 w-full items-center justify-center rounded-2xl text-sm font-semibold uppercase tracking-[0.15em] transition-all
            
            ${
              isLoading
                ? "cursor-not-allowed bg-slate-200 text-slate-500"
                : "bg-red-600 text-white hover:bg-red-700 active:scale-[0.99]"
            }
          `}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Logging In
            </span>
          ) : (
            "Login"
          )}
        </button>

        {/* Signup */}
        <div className="text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer font-semibold text-red-600 hover:underline"
          >
            Sign Up
          </span>
        </div>

      </div>
    </div>
  </div>
</div>
  );
};

export default LoginForm;