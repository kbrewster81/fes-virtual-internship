"use client";

import pricingtop from "./assets/Image/pricingtop.png";
import file from "./assets/Image/file.svg";
import { RiPlantFill } from "react-icons/ri";

export default function Chooseplan() {
  return (
    <div className="w-full">
      <div className="opacity-[0]">
        <div className="relative text-center w-full pt-[48px] mb-[24px]">
          <div className="max-w-[1000px] m-auto text-[#fff] p-[24px]">
            <div className="text-5xl text-bold mb-[40px]">
              Get unlimited access to many amazing books to read
            </div>
            <div className="text-xl mb-[32px]">
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className="flex justify-center max-w-[340px] m-auto rounded-t-[180px] rounded-b-none overflow-hidden">
              <img
                src={pricingtop.png}
                alt={pricing}
                className="w-full h-full object-contain"
              />
            </figure>
          </div>
        </div>
        <div className="max-w-[1070px] w-full m-auto p-[24px]">
          <div className="p-[40px] w-full">
            <div className="grid grid-cols-3,1fr justify-items-center text-center gap-[24px] max-w-[800px] mt-autp mb-[56px]">
              <div className="m-0 p-0 box-border">
                <div className="flex justify-center text-[#032b41] mb-[12px]">
                  <img
                    src={file.svg}
                    alt={file}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[#394547] leading-[1.5]">
                  <a className="font-bold">Key ideas in a fe min</a>
                  "with many books to read"
                </div>
                <div className="flex justify-center text-[#032b41] mb-[12px]">
                  <RiPlantFill className="w-[60px] h-[60px]"></RiPlantFill>
                </div>
                <div className="text-[#394547] leading-[1.5]">
                  <a className="font-bold">3 million</a>
                  "people growing with Summarist everyday"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
