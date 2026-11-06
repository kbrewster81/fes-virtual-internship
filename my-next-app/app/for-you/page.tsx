"use client";

import Image from "next/image";
import Sidebar from "@/app/for-you/sidebar";

export default function ForYouPage() {
  return (
    <div className="flex max-w-[1070px]">
      <div className="flex-1 items-center">
        <div className="h-[40px] w-full items-end flex bg-[#f1f6f4] text-[#042330] border-[#e1e7ea] border-2 rounded-lg">
          Search for books
        </div>
      </div>
      <Sidebar />

      <div className="flex justify-end w-full py-6 px-8 border-b border-[#e1e7ea]"></div>
      <div className="px-8 py-6 items-center justify-center">
        <div className="text-2xl font-bold items-center text-[#032b41] mt-4 mb-4">
          Selected just for you
        </div>
      </div>
    </div>
  );
}
