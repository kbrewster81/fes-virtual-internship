import Image from "next/image";
import google from "../assets/Image/google.png";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

type LoginProps = {
  onClose: () => void;
};

export default function Login({ onClose }: LoginProps) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-md rounded bg-white p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-4 text-3xl text-black cursor-pointer"
        >
          <AiOutlineClose />
        </button>

        <h2 className="mb-6 text-center text-xl font-bold text-[#032b41]">
          Log in to Summarist
        </h2>
        <button
          type="button"
          className="relative flex w-full items-center justify-center rounded bg-[#3b5998] py-3 text-white cursor-pointer"
        >
          <FaUser className="absolute left-3 text-xl" />
          Login as a Guest
        </button>
        <div className="flex items-center gap-4 my-4">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-gray-600">or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>
        <button
          type="button"
          className="relative flex w-full items-center justify-center rounded bg-blue-500 py-3 text-white cursor-pointer"
        >
          <Image
            src={google}
            alt="Google logo"
            className="absolute left-2 h-8 w-8 rounded bg-white object-contain"
          />
          Login with Google
        </button>
        <div className="flex items-center gap-4 my-4">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-gray-600">or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded border-2 border-[#bac8ce] bg-white p-2 text-sm text-black outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border-2 border-[#bac8ce] bg-white p-2 text-sm text-black outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-[#20d481] w-full text-base items-center h-12 mt-4 py-3 px-12 rounded cursor-pointer"
        >
          Login
        </button>

        <div className="text-center text-[#116be9] font-light text-sm mt-6 cursor-pointer">
          Forgot your password?
        </div>
        <button className="h-14  text-center bg-[#f1f6f4] text-[#116be9] w-full font-light text-base w-full cursor-pointer">
          Don't have an account?
        </button>
      </div>
    </div>
  );
}
