"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Image/logo.png";

type NavbarProps = {
  onLoginClick: () => void;
};

export default function Navbar({ onLoginClick }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between w-full py-6">
      <Image src={logo} alt="Summarist logo" className="w-40 h-auto" />

      <div className="flex items-center gap-10">
        <button type="button" onClick={onLoginClick}>
          Login
        </button>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/help">Help</Link>
      </div>
    </nav>
  );
}
