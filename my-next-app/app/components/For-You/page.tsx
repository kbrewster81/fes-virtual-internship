"use client";

import Image from "next/image";
import logo from "../assets/Image/logo.png";

export default function Home() {
  return (
    <nav className="flex items-center justify-between w-full py-6">
      <Image src={logo} alt="Summarist logo" className="w-40 h-auto" />
    </nav>
  );
}
