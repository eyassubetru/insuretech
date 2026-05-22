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
    <section className="fixed left-0 right-0 top-0 z-50 border-b border-red-900/10 bg-white">

  <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

    {/* LEFT */}
    <div className="flex items-center min-w-0">
      
      <div className="flex flex-col leading-none">
        <span className="text-base sm:text-lg font-semibold tracking-wide text-red-700">
          InsureTech
        </span>

      </div>

    </div>


    {/* RIGHT */}
    <div className="flex items-center shrink-0">

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex h-10 items-center justify-center rounded-lg border border-red-200 bg-red-50 px-4 text-sm font-medium text-red-700 transition hover:bg-red-100"
      >
        <FaSignOutAlt className="mr-2 text-sm" />
        Logout
      </button>

    </div>

  </div>
</section>
  )
}

export default Header