import React, { useEffect, useState } from 'react'
import PhoneInputComponent from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import axios from 'axios';

// Extract the valid component if it is wrapped in an object
const PhoneInput = PhoneInputComponent.default || PhoneInputComponent;

import { isValidPhoneNumber } from "libphonenumber-js";

import { auth } from '../config/firebaseConfig'

import { initializeApp } from "firebase/app";
import { signInWithCustomToken, onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const RegisterForm = () => {

    const navigate = useNavigate();
    const { user, loading } = useAuth();


    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmPhoneNumber, setConfirmPhoneNumber] = useState('');
    const [response, setResponse] = useState({
        status: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isOTPLoading, setIsOTPLoading] = useState(false);
    const [isOTPSet , setIsOTPSet] = useState(false);
    const [password, setPassword] = useState('');
    const [ShowPassword, SetShowPassword] = useState(false);
    const [OTP, setOTP] = useState('');
    const [countdown, setCountdown] = useState(0);

    const apiUrl = import.meta.env.VITE_API_URL;


    function getOrCreateDeviceId() {
        let deviceId = localStorage.getItem("device_id");

        if (!deviceId) {
            deviceId = crypto.randomUUID();
            localStorage.setItem("device_id", deviceId);
        }

        return deviceId;
    }

    const register = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const cleanNumber = "+" + phoneNumber.replace(/\D/g, "");

            if (!isValidPhoneNumber(cleanNumber)) {
                setResponse({ status: 'error', message: 'Invalid Phone Number' })
                return
            }

            if (password.length < 8) {
                setResponse({ status: 'error', message: 'make your password at least 8 character' })
                return
            }
            const deviceId = getOrCreateDeviceId();
            const response = await axios.post(`${apiUrl}/signupUser`, {
                "phone": cleanNumber,
                "newPassword": password,
                "otpCode": OTP
            },
                {
                    headers: {
                        "x-device-id": deviceId,

                    }
                });

            const { data } = await response;
            console.log(data)

            if (data.success && data.customToken) {
                await signInWithCustomToken(auth, data.customToken);

                setResponse({
                    status: "success",
                    message: "User logged in successfully",
                });
            }



            setResponse({ status: 'success', message: 'Registered successfully' })
            setIsLoading(false)

        } catch (error) {
            console.log(error.response)
            setResponse({
                status: 'error', status: 'error',
                message: error.response?.data?.message ||
                    error.data?.message ||
                    "Something went wrong"
            })
        } finally {
            setIsLoading(false)
        }



    }

    const handleSendOTP = async (e) => {


        setIsOTPLoading(true)
        if (isLoading || countdown > 0) return;
        setIsOTPLoading(true)
        const cleanNumber = "+" + phoneNumber.replace(/\D/g, "");
        console.log("clear number" + cleanNumber)

        try {
            if (!isValidPhoneNumber(cleanNumber)) {
                setResponse({ status: 'error', message: 'Invalid phone number' })
                return
            }

            const deviceId = getOrCreateDeviceId()

            const response = await axios.post(`${apiUrl}/sendOTP`, {
                "phoneNumber": cleanNumber,

            },);

            const { data } = await response;
            console.log(data)

            if (!data.success) {
                setResponse({ status: 'error', message: data.message })
                return
            }

            setResponse({ status: 'success', message: data.message })
            setCountdown(3 * 60);



        } catch (error) {

            console.log(error);

            if (error.response) {

                setResponse({
                    status: 'error',
                    message: error.response?.data?.message ||
                        error.data?.message ||
                        "Something went wrong"
                });

                // 🔥 Start countdown from backend remaining time
                if (error.response.data.remainingSeconds) {

                    setCountdown(error.response.data.remainingSeconds);

                }

            } else {

                setResponse({
                    status: 'error',
                    message: 'Network error'
                });
            }
        } finally {
            setIsOTPLoading(false)
        }



    }

    const formatTime = (seconds) => {

        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };


    useEffect(() => {
        if (user) {
            console.log("user", user)
            navigate("/home");
        }
    }, [user]);



    useEffect(() => {

        if (countdown <= 0) return;

        const timer = setInterval(() => {

            setCountdown((prev) => prev - 1);

        }, 1000);

        return () => clearInterval(timer);

    }, [countdown]);

    useEffect(()=>{
        if(OTP.length >= 6){
            setIsOTPSet(true)
        }else{
            setIsOTPSet(false)
        }

    },[OTP])



    return (

        <div className="fixed inset-0 overflow-y-auto bg-[#140909] px-4 py-8 font-sans">
  
  {/* Background Glow */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-red-700/10 blur-[120px]" />
    <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto w-full max-w-md rounded-[2rem] border border-red-900/20 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]">

    {/* Header */}
    <div className="border-b border-red-100 px-6 py-8 sm:px-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-red-700">
          Create Account
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Register to continue securely
        </p>
      </div>
    </div>

    {/* Form */}
    <form
      onSubmit={register}
      className="flex flex-col gap-5 px-6 py-8 sm:px-10"
    >

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="phoneNumber"
          className="text-xs font-semibold uppercase tracking-wider text-slate-600"
        >
          Phone Number
        </label>

        <PhoneInput
          required
          id="phoneNumber"
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
          inputProps={{
            id: "phoneNumber",
            name: "phoneNumber",
            required: true,
            placeholder: "Enter phone number",
          }}
        />
      </div>

      {/* OTP */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
          OTP Verification
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            required
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter OTP"
            className="h-[52px] w-full rounded-2xl border border-red-200 bg-white px-4 font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-500"
          />

          <button
            type="button"
            disabled={isOTPLoading || countdown > 0}
            onClick={handleSendOTP}
            className={`
              h-[52px] rounded-2xl px-5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap
              
              ${
                countdown > 0
                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                  : "bg-red-600 text-white hover:bg-red-700"
              }
            `}
          >
            {isLoading || isOTPLoading
              ? "..."
              : countdown > 0
              ? formatTime(countdown)
              : "Send OTP"}
          </button>
        </div>
      </div>

      {/* Password */}
      {isOTPSet && (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-xs font-semibold uppercase tracking-wider text-slate-600"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={ShowPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="h-[52px] w-full rounded-2xl border border-red-200 bg-white px-4 pr-14 font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-500"
            />

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              type="button"
              onClick={() => SetShowPassword((prev) => !prev)}
            >
              {ShowPassword ? (
                <FaEyeSlash className="text-xl" />
              ) : (
                <FaEye className="text-xl" />
              )}
            </button>
          </div>
        </div>
      )}

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
        type="submit"
        disabled={isLoading}
        className={`
          flex h-14 w-full items-center justify-center rounded-2xl text-sm font-semibold uppercase tracking-[0.15em] transition-all
          
          ${
            isLoading || OTP.length === 0
              ? "cursor-not-allowed bg-slate-200 text-slate-500"
              : "bg-red-600 text-white hover:bg-red-700 active:scale-[0.99]"
          }
        `}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Processing
          </span>
        ) : (
          "Register"
        )}
      </button>

      {/* Login */}
      <div className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="cursor-pointer font-semibold text-red-600 hover:underline"
        >
          Login
        </span>
      </div>
    </form>
  </div>
</div>
    );
}

export default RegisterForm;