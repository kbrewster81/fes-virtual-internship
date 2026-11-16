"use client";

import pricingtop from "../assets/Image/pricingtop.png";
import file from "../assets/Image/file.svg";
import { RiPlantFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { LiaDotCircleSolid } from "react-icons/lia";
import { LiaCircle } from "react-icons/lia";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

export default function Chooseplan() {
  const [isOpen, setIsOpen] = useState(false);
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
            <div className="text-sm text-[#6b757b] flex items-center gap-[8px] max-w-[240px] mx-auto my-[24px]">
              <div className="flex-1 border-t border-[#bac8ce]" />
              <span>or</span>
              <div className="flex-1 border-t border-[#bac8ce]" />
            </div>
            <div className="rounded-sm border-4 border-solid border-[#2be080] bg-[#f1f6f4] p-6">
              <div className="flex items-start gap-6">
                <LiaCircle className="w-[24px] h-[24px] shrink-0 text-black" />
                <div className="box-border m-0 p-0">
                  <div className="text-lg font-semibold text-[#032b41] mb-[8px]">
                    Premium Monthly
                  </div>
                  <div className="text-2xl font-bold text-[#032b41] mb-[8px]">
                    $9.99/year
                  </div>
                  <div className="text-[#6b757b] text-sm">
                    No trial included
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fff] sticky z-1 p-[32px] flex flex-col items-center gap-[16px]">
              <span className="box-border m-0 p-0">
                <button className="bg-[#2bd97c] text-[#032b41] h-[40px] rounded-sm text-base flex items-center justify-center w-[300px] min-w-[180px]">
                  <span>Start your free 7-day trial</span>
                </button>
              </span>
            </div>
            <div className="text-xs text-[#6b757b] text-center mb-[8px]">
              Cancel your trial at any time before it ends, and you won't be
              charged.
            </div>
            <div className="rounded-b-[1px] border-solid border-box border-[#ddd] mb-[8px] overflow-hidden">
              <div
                className="flex justify-between items-center cursor-pointer p-[24px] gap-[8px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="font-medium text-2xl relative mt-[8px] text-[#032b41]">
                  How does the free 7-day trial work?
                </div>
                <BsChevronDown className="w-[24px] min-w-[24px] h-[24px] transition-transform-[.3s] items-end rotate-y-[180deg]" />
                <div className="relative overflow-hidden">
                  {isOpen && (
                    <div className="min-h-px pb-[24px] text-[#394547] leading-[1.5] text-base">
                      Begin your complimentary 7-day trial with a Summarist
                      annual membership. You are under no obligation to continue
                      your subscription, and you will only be billed when the
                      trial period expires. With Premium access, you can learn
                      at your own pace and as frequently as you desire, and you
                      may terminate your subscription prior to the conclusion of
                      the 7-day free trial.
                    </div>
                  )}
                  ;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
