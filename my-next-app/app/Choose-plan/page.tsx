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
import Login from "../components/Login";

export default function Chooseplan() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  return (
    <div className="w-full">
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      <div className="relative w-full h-full transition-opacity z-[10]">
        <div className="relative text-center w-full pt-[48px] mb-[24px] bg-[#032b41] rounded-b-[256px]">
          <div className="max-w-[1000px] m-auto text-[#fff] px-[24px]">
            <div className="text-5xl font-bold mb-[40px]">
              Get unlimited access to many amazing books to read
            </div>
            <div className="text-xl mb-[32px]">
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className="flex justify-center max-w-[340px] m-auto rounded-t-[180px] rounded-b-none overflow-hidden ">
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
            <h2 className="text-[32px] text-[#032b41] text-center mb-[32px] font-bold">
              Choose the plan that fits you
            </h2>
            <div
              onClick={() => setSelectedPlan("yearly")}
              className={`w-full rounded-sm border-4 bg-[#f1f6f4] p-6 cursor-pointer ${
                selectedPlan === "yearly"
                  ? "border-[#2be080]"
                  : "border-[#bac8ce]"
              }`}
            >
              {selectedPlan === "yearly" ? (
                <LiaDotCircleSolid className="w-[24px] h-[24px] shrink-0" />
              ) : (
                <LiaCircle className="w-[24px] h-[24px] shrink-0" />
              )}
              <div className="text-lg font-semibold">Premium Plus Yearly</div>
              <div className="text-2xl font-bold">$99.99/year</div>
              <div className="text-sm">7-day free trial included</div>
            </div>

            <div className="text-sm text-[#6b757b] flex items-center gap-[8px] max-w-[240px] mx-auto my-[24px]">
              <div className="flex-1 border-t border-[#bac8ce]" />
              <span>or</span>
              <div className="flex-1 border-t border-[#bac8ce]" />
            </div>

            <div
              onClick={() => setSelectedPlan("monthly")}
              className={`w-full rounded-sm border-4 bg-[#f1f6f4] p-6 cursor-pointer ${
                selectedPlan === "monthly"
                  ? "border-[#2be080]"
                  : "border-[#bac8ce]"
              }`}
            >
              {selectedPlan === "monthly" ? (
                <LiaDotCircleSolid className="w-[24px] h-[24px] shrink-0" />
              ) : (
                <LiaCircle className="w-[24px] h-[24px] shrink-0" />
              )}

              <div className="text-lg font-semibold">Premium Monthly</div>
              <div className="text-2xl font-bold">$9.99/month</div>
              <div className="text-sm">No trial included</div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] sticky z-1 p-[32px] flex flex-col items-center gap-[16px]">
          <span className="box-border m-0 p-0">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-[#2bd97c] text-[#032b41] rounded-sm text-base flex items-center justify-center w-[300px] min-w-[180px]"
            ></button>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-[#2bd97c] text-[#032b41] h-[40px] rounded-sm text-base flex items-center justify-center w-[300px] cursor-pointer"
            >
              {selectedPlan === "monthly"
                ? "Login"
                : "Start your free 7-day trial"}
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
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
          >
            <div className="font-medium text-2xl relative mt-[8px] text-[#032b41] border-bottom: 1px solid #ddd">
              <div>How does the free 7-day trial work?</div>
            </div>
            <BsChevronDown
              className={`w-[24px] min-w-[24px] h-[24px] transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`}
            />
          </div>
          <div className="relative overflow-hidden">
            {openIndex === 0 && (
              <div className="px-[24px] min-h-px pb-[24px] text-[#394547] leading-[1.5]  text-base">
                Begin your complimentary 7-day trial with a Summarist annual
                membership. You are under no obligation to continue your
                subscription, and you will only be billed when the trial period
                expires. With Premium access, you can learn at your own pace and
                as frequently as you desire, and you may terminate your
                subscription prior to the conclusion of the 7-day free trial.
              </div>
            )}
          </div>
          <div className="rounded-b-[1px] border-solid border-box border-[#ddd] mb-[8px] overflow-hidden">
            <div
              className="flex justify-between items-center cursor-pointer p-[24px] gap-[8px]"
              onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
            >
              <div className="font-medium text-2xl relative mt-[8px] text-[#032b41] border-bottom: 1px solid #ddd">
                <div>
                  Can I switch subscriptions from monthly to yearly, or yearly
                  to monthly?
                </div>
              </div>
              <BsChevronDown
                className={`w-[24px] min-w-[24px] h-[24px] transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`}
              />
            </div>
            <div className="relative overflow-hidden">
              {openIndex === 1 && (
                <div className="px-[24px] min-h-px pb-[24px] text-[#394547] leading-[1.5]  text-base">
                  While an annual plan is active, it is not feasible to switch
                  to a monthly plan. However, once the current month ends,
                  transitioning from a monthly plan to an annual plan is an
                  option.
                </div>
              )}
            </div>
          </div>
          <div className="rounded-b-[1px] border-solid border-box border-[#ddd] mb-[8px] overflow-hidden">
            <div
              className="flex justify-between items-center cursor-pointer p-[24px] gap-[8px]"
              onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
            >
              <div className="font-medium text-2xl relative mt-[8px] text-[#032b41] border-bottom: 1px solid #ddd">
                <div>What's included in the Premium plan?</div>
              </div>
              <BsChevronDown
                className={`w-[24px] min-w-[24px] h-[24px] transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`}
              />
            </div>
            <div className="relative overflow-hidden">
              {openIndex === 2 && (
                <div className="px-[24px] min-h-px pb-[24px] text-[#394547] leading-[1.5]  text-base">
                  Premium membership provides you with the ultimate Summarist
                  experience, including unrestricted entry to many best-selling
                  books high-quality audio, the ability to download titles for
                  offline reading, and the option to send your reads to your
                  Kindle.
                </div>
              )}
            </div>
          </div>
          <div className="rounded-b-[1px] border-solid border-box border-b border-[#ddd] mb-[8px] overflow-hidden">
            <div
              className="flex justify-between items-center cursor-pointer p-[24px] gap-[8px]"
              onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
            >
              <div className="font-medium text-2xl relative mt-[8px] text-[#032b41]">
                <div>Can I cancel during my trial or subscription?</div>
              </div>
              <BsChevronDown
                className={`w-[24px] min-w-[24px] h-[24px] transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}
              />
            </div>
            <div className="relative overflow-hidden">
              {openIndex === 3 && (
                <div className="px-[24px] min-h-px pb-[24px] text-[#394547] leading-[1.5]  text-base">
                  You will not be charged if you cancel your trial before its
                  conclusion. While you will not have complete access to the
                  entire Summarist library, you can still expand your knowledge
                  with one curated book per day.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#d7e9ff] p-12 w-full">
          <div className="max-w-[1070px] mx-auto p-24">
            <div className="flex relative justify-between text-sm mt-auto mb-auto">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg text-[#032b41]">Actions</h3>

                <div className="flex flex-col gap-2 text-sm text-[#394547]">
                  <a href="#">Summarist Magazine</a>
                  <a href="#">Cancel Subscription</a>
                  <a href="#">Help</a>
                  <a href="#">Contact us</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg text-[#032b41]">
                  Useful Links
                </h3>

                <div className="flex flex-col gap-2 text-sm text-[#394547]">
                  <a href="#">Pricing</a>
                  <a href="#">Summarist Business</a>
                  <a href="#">Gift Cards</a>
                  <a href="#">Authors & Publishers</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg text-[#032b41]">Company</h3>

                <div className="flex flex-col gap-2 text-sm text-[#394547]">
                  <a href="#">About</a>
                  <a href="#">Careers</a>
                  <a href="#">Partners</a>
                  <a href="#">Code of Conduct</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg text-[#032b41]">Other</h3>

                <div className="flex flex-col gap-2 text-sm text-[#394547]">
                  <a href="#">Sitemap</a>
                  <a href="#">Legal Notice</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Privacy Policies</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center text-[#032b41] w-full font-semibold mt-18">
              Copyright © 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
