"use client";

import pricingtop from "../assets/Image/pricingtop.png";
import file from "../assets/Image/file.svg";
import { RiPlantFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { LiaDotCircleSolid } from "react-icons/lia";

export default function Chooseplan() {
  return (
    <div className="w-full">
      <div className="relative w-full h-full transition-opacity z-[10]">
        <div className="relative text-center w-full pt-[48px] mb-[24px] bg-[#032b41] rounded-b-[256px]">
          <div className="max-w-[1000px] m-auto text-[#fff] p-[24px]">
            <div className="text-5xl font-bold mb-[40px]">
              Get unlimited access to many amazing books to read
            </div>
            <div className="text-xl mb-[32px]">
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className="flex justify-center max-w-[340px] m-auto rounded-t-[180px] rounded-b-none overflow-hidden">
              <img
                src={pricingtop.src}
                alt="Pricing Top"
                className="w-full h-full object-contain"
              />
            </figure>
          </div>
        </div>
        <div className="max-w-[1070px] w-full m-auto p-[24px]">
          <div className="p-[40px] w-full">
            <div className="grid grid-cols-3 justify-items-center text-center gap-[24px] max-w-[800px] mx-auto mb-[56px]">
              <div>
                <IoDocumentText className="w-[60px] h-[60px] mx-auto mb-[8px]"></IoDocumentText>
                <div className="text-[#394547] leading-[1.5]">
                  <a className="font-bold mt-[6px]">Key ideas in a few min </a>
                  with many books to read
                </div>
              </div>
              <div>
                <RiPlantFill className="w-[60px] h-[60px] mx-auto mb-[8px]"></RiPlantFill>
                <div className="text-[#394547] leading-[1.5]">
                  <a className="font-bold mt-[6px]">3 million </a>
                  people growing with Summarist everyday
                </div>
              </div>
              <div>
                <FaHandshake className="w-[60px] h-[60px] mx-auto mb-[8px]"></FaHandshake>
                <div className="text-[#394547] leading-[1.5]">
                  <a className="font-bold mt-[6px]">Precise recommendations </a>
                  collections curated by experts
                </div>
              </div>
            </div>
            <div className="text-[32px] text-[#032b41] text-center mb-[32px] font-bold">
              Choose the plan that fits you
            </div>
            <div className="rounded-sm border-4 border-solid border-[#2be080] bg-[#f1f6f4] p-6">
              <div className="flex items-start gap-6">
                <LiaDotCircleSolid className="w-[24px] h-[24px] shrink-0 text-black" />
                <div className="box-border m-0 p-0">
                  <div className="text-lg font-semibold text-[#032b41] mb-[8px]">
                    Premium Plus Yearly
                  </div>
                  <div className="text-2xl font-bold text-[#032b41] mb-[8px]">
                    $99.99/year
                  </div>
                  <div className="text-[#6b757b] text-sm">
                    7-day free trial included
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm text-[#6b757b] flex items-center gap-[8px] max-w-[240px] m-[24px]">
              <div className="m-0 p-0 text-center">or</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
