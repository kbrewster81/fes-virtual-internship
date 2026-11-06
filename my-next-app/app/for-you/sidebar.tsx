"use client";

import Image from "next/image";
import logo from "../assets/Image/logo.png";
import { PiHouseLine } from "react-icons/pi";
import Link from "next/link";
import { BsBookmark } from "react-icons/bs";
import { RiBallPenLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";

export default function SideBar() {
  return (
    <div className="flex flex-col bg-[#f7faf9] fixed w-[200px] min-w-[200px] top-[0] left-[0] mb-[20px] h-screen backdrop-opacity-[0] transition-all">
      <Image src={logo} alt="Summarist logo" className="w-40 h-auto"></Image>
      <div className="flex flex-col justify-between py-4 mb-[20px]">
        <div className="flex mt-[32px]">
          <Link
            href="/for-you"
            className="flex gap-2 items-center  h-[32px] text-black mb-[6px] cursor-pointer"
          >
            <PiHouseLine className=" w-6 h-6" />
            For you
          </Link>
        </div>
        <div className="flex mt-[32px]">
          <Link
            href="/for-you"
            className="flex  gap-2 items-center  h-[32px] text-black mb-[6px] cursor-pointer"
          >
            <BsBookmark className=" w-6 h-6" />
            My Library
          </Link>
        </div>
        <div className="flex mt-[32px]">
          <Link
            href="/for-you"
            className="flex gap-2 items-center  h-[32px] text-black mb-[6px] cursor-pointer"
          >
            <RiBallPenLine className=" w-6 h-6" />
            Highlights
          </Link>
        </div>
        <div className="flex mt-[32px]">
          <Link
            href="/for-you"
            className="flex gap-2 items-center  h-[32px] text-black mb-[18px] cursor-pointer"
          >
            <IoIosSearch className=" w-6 h-6" />
            Search
          </Link>
        </div>
        <div className="flex mt-[40px]">
          <Link
            href="/for-you"
            className="flex  gap-2 items-center  h-[32px] text-black mb-[6px] cursor-pointer"
          >
            <SlSettings className=" w-6 h-6" />
            Settings
          </Link>
        </div>
        <div className="flex mt-[32px]">
          <Link
            href="/for-you"
            className="flex gap-2 items-center h-[32px] text-black mb-[6px] cursor-pointer"
          >
            <IoMdHelpCircleOutline className=" w-6 h-6" />
            Help & Support
          </Link>
        </div>
        <div className="flex mt-[32px]">
          <Link
            href="/for-you"
            className="flex gap-2 items-center  h-[32px] text-black mb-[6px] cursor-pointer"
          >
            <MdLogout className=" w-6 h-6" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
