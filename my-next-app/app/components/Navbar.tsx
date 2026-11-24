"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Image/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

type NavbarProps = {
  onLoginClick: () => void;
};

export default function Navbar({ onLoginClick }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between w-full py-6">
      <Image src={logo} alt="Summarist logo" className="w-40 h-auto" />

      <div className="flex items-center gap-10">
        <RxHamburgerMenu className="md:hidden w-[24px] h-[24px] flex items-center justify-center cursor-pointer" />
        <button type="button" onClick={onLoginClick}>
          Login
        </button>
        <Link href="/about" className="hidden md:block">
          About
        </Link>
        <Link href="/contact" className="hidden md:block">
          Contact
        </Link>
        <Link href="/help" className="hidden md:block">
          Help
        </Link>
      </div>
    </nav>
  );
}
