import React from 'react'
import { FaUser, FaSignOutAlt,FaHome } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import { auth, db } from '../config/firebaseConfig'
import { signOut } from "firebase/auth";

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleLogout = async (e) => {
    try {
      axios.post(`${apiUrl}/signout `, {
        withCredentials: true,
      })
      await signOut(auth);
      navigate('/')
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <section className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#081229]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-8">

        {/* Left Side */}
        <div className="flex items-center gap-3">

          {/* Live Indicator */}
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]"></span>
          </div>

          {/* Branding */}
          <div className="flex flex-col leading-none">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-sm font-black uppercase tracking-[0.3em] text-transparent sm:text-base">
              Ethiopia
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400 sm:text-xs">
              Tournament
            </span>
          </div>
        </div>

        {/* Center Sponsor */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 shadow-inner backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2">

          <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-[10px]">
            Powered By
          </span>

          <div className="h-5 w-px bg-white/10 sm:h-7"></div>

          <div className="flex items-center gap-1 sm:gap-2">

            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white p-1 shadow-md sm:h-8 sm:w-8">
              <img
                src="/eReceipt.png"
                className="h-full w-full object-contain"
                alt="eReceipt"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-bold text-white sm:text-sm">
                eReceipt
              </span>

              <span className="text-[8px] text-green-400 sm:text-[10px]">
                Official Sponsor
              </span>
            </div>

          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          {/* Profile */}
          <button
            onClick={() => {
              if (location.pathname === "/profile") {
                navigate("/tournament");
              } else {
                navigate("/profile");
              }
            }}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            {
              location.pathname === "/profile" ? 
              <FaHome  className="text-sm transition-transform duration-300 group-hover:scale-110" /> :

              <FaUser className="text-sm transition-transform duration-300 group-hover:scale-110" /> 

            }
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 hover:scale-105 hover:bg-red-500/20 hover:text-red-300"
          >
            <FaSignOutAlt className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Header