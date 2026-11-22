"use client";

import Sidebar from "@/app/for-you/sidebar";
import { IoIosSearch } from "react-icons/io";
import login from "@/app/assets/Image/login.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useState } from "react";
import Login from "@/app/components/Login";

export default function Settings() {
  const [user] = useAuthState(auth);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="relative flex flex-col ml-[200px] transition-all w-[calc(100%-200px)]">
      <header className="h-[76px] flex items-center justify-end px-12 border-b border-solid border-[#e1e7ea]">
        <div className="flex items-center w-[340px] max-w-full h-[40px] bg-[#f1f6f4] border-2 border-[#e1e7ea] rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search for books"
            className="flex-1 min-w-0 px-4 bg-transparent outline-none text-[#042330] cursor-pointer"
          />
          <button
            type="button"
            aria-label="Search books"
            className="h-full px-3 border-b border-solid border-[#e1e7ea]"
          >
            <IoIosSearch size={22} />
          </button>
        </div>
      </header>
      <div className="text-left p-[24px] max-w-[1070px] w-full m-auto">
        <div className="text-left border-b border-solid border-[#e1e7ea] text-[32px] text-[#032b41] mb-[32px] font-bold">
          Settings
        </div>
        <div className="flex items-center w-full"></div>
        <div className="items-center cursor-pointer">
          <Sidebar />
        </div>
        {user ? (
          <>
            <div className="text-left border-b border-solid border-[#e1e7ea] text-lg text-[#032b41] font-bold">
              Your Subscription plan
              <div className="text-[#032b41] font-thin mb-[32px]">
                premium-plus
              </div>
            </div>
            <div className="text-left border-b border-solid border-[#e1e7ea] text-lg text-[#032b41] mt-[32px] font-bold">
              Email
              <div className="text-[#032b41] font-thin mb-[32px]">
                {user.email}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-[460px] flex flex-col items-center m-auto">
              <img
                src={login.src}
                alt="Login"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
            <div className="text-2xl font-bold text-[#032b41] text-center mb-[16px]">
              Log in to your account to see your details.
            </div>
            <button
              onClick={() => setShowLogin(true)}
              className="text-[#032b41] bg-[#2bd97c] h-[40px] rounded-sm text-base flex items-center justify-center max-w-[360px] w-full mx-auto"
            >
              Login
            </button>
          </>
        )}
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
}
