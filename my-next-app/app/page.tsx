"use client";
import Image from "next/image";
import landing from "./assets/Image/landing.png";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BiCrown } from "react-icons/bi";
import { FaStarHalf } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    "Expand your learning",
    "Accomplish your goals",
    "Strengthen your vitality",
    "Become a better caregiver",
    "Improve your mood",
    "Maximize your abilities",
  ];

  const leftBenefits = [
    "Enhance your knowledge",
    "Achieve greater success",
    "Improve your health",
    "Develop better parenting skills",
    "Increase happiness",
    "Be the best version of yourself!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <main className="w-full max-w-7xl  mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center px-24 gap-12 mt-16">
          {/* Left side: Text */}
          <div className="flex flex-col items-start gap-6 md:w-1/2">
            <h1 className="text-4xl font-bold text-[#032b41]">
              Gain more knowledge in less time
            </h1>

            <p className="text-lg text-zinc-600">
              Great summaries for busy people, individuals who barely have time
              to read, and even people who don't like to read.
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-[#20d481] w-xs py-3 px-12 rounded cursor-pointer"
            >
              Login
            </button>
          </div>

          {/* Right side: Illustration */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={landing}
              alt="Landing illustration"
              className="w-full max-w-[350px] h-auto"
            />
          </div>
        </div>
      </main>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      <section className="mt-16">
        <h2 className="text-4xl font-bold text-[#032b41] mb-10 text-center">
          Understand books in few minutes
        </h2>

        {/* FEATURE CARDS */}
        <div className="max-w-[1070px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <FaFileAlt className="text-[#032b41] w-12 h-12" />
            <h3 className="text-2xl font-bold mt-4 text-[#032b41]">
              Read or listen
            </h3>
            <p className="mt-3 text-lg text-zinc-600">
              Save time by getting the core ideas from the best books.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <MdLightbulb className="text-[#032b41] w-12 h-12" />
            <h3 className="text-2xl font-bold mt-4 text-[#032b41]">
              Find your next read
            </h3>
            <p className="text-lg mt-3 text-zinc-600">
              Explore book lists and personalized recommendations.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaMicrophone className="text-[#032b41] w-12 h-12" />
            <h3 className="text-2xl font-bold mt-4 text-[#032b41]">
              Briefcasts
            </h3>
            <p className="text-lg mt-3 text-zinc-600">
              Gain valuable insights from briefcasts.
            </p>
          </div>
        </div>
        {/* FEATURE GRID ENDS HERE */}

        {/* BENEFITS AND STATISTICS */}
        <div className="max-w-[1070px] mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 text-[28px] font-semibold md:order-1">
            {leftBenefits.map((benefit, index) => (
              <p
                key={index}
                className={`transition-colors duration-500 ${
                  activeIndex === index ? "text-[#20d481]" : "text-[#6b757b]"
                }`}
              >
                {benefit}
              </p>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[#d7e9ff] p-8 flex flex-col gap-6 text-[#394547] text-lg md:order-2">
            <div className="flex items-start gap-4">
              <span className="font-bold text-blue-600 shrink-0">93%</span>
              <p>
                of Summarist members{" "}
                <span className="font-semibold">significantly increase</span>{" "}
                reading frequency.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-bold text-blue-600 shrink-0">96%</span>
              <p>
                of Summarist members{" "}
                <span className="font-semibold">establish better</span> habits.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-bold text-blue-600 shrink-0">90%</span>
              <p>
                have made{" "}
                <span className="font-semibold">significant positive</span>{" "}
                change to their lives.
              </p>
            </div>
          </div>
        </div>
        {/* STATISTICS GRID ENDS HERE */}

        <div className="max-w-[1070px] mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 text-[28px] font-semibold md:order-2">
            {benefits.map((benefit, index) => (
              <p
                key={index}
                className={`transition-colors duration-500 ${
                  activeIndex === index ? "text-[#20d481]" : "text-[#6b757b]"
                }`}
              >
                {benefit}
              </p>
            ))}
          </div>

          {/* STATISTICS - LEFT COLUMN */}
          <div className="bg-[#d7e9ff] p-8 flex flex-col gap-6 text-lg">
            <div className="flex items-start gap-4">
              <span className="font-bold text-blue-600 shrink-0">91%</span>
              <p>
                of Summarist members{" "}
                <span className="font-semibold">
                  report feeling more productive
                </span>{" "}
                after incorporating the service into their daily routine.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-bold text-blue-600 shrink-0">94%</span>
              <p>
                of Summarist members have{" "}
                <span className="font-semibold">noticed an improvement</span> in
                their overall comprehension and retention of information.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-bold text-blue-600 shrink-0">88%</span>
              <p>
                of Summarist members{" "}
                <span className="font-semibold">feel more informed</span> about
                current events and industry trends since using the platform.
              </p>
            </div>
          </div>
        </div>
        <div className="text-4xl font-bold text-[#032b41] mt-20 text-center">
          What our members say
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="flex flex-col bg-[#fff3d7] p-4 mb-6 rounded font-light mt-10">
            <div className="flex text-[#032b41] gap-2 mb-2">
              <div className="whitespace-nowrap">Hanna M.</div>
              <div className="flex">
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
              </div>
            </div>
            <div className="text-[#394547] tracking0[0.3px] leading-[1.4]">
              This app has been a game-changer for me! It's saved me so much
              time and effort in reading and comprehending books. Highly
              recommend it to all book lovers.
            </div>
          </div>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="flex flex-col bg-[#fff3d7] p-4 mb-6 rounded font-light mt-10">
            <div className="flex text-[#032b41] gap-2 mb-2">
              <div className="whitespace-nowrap">David B.</div>
              <div className="flex">
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
              </div>
            </div>
            <div className="text-[#394547] tracking0[0.3px] leading-[1.4]">
              I love this app! It provides concise and accurate summaries of
              books in a way that is easy to understand. It's also very
              user-friendly and intuitive.
            </div>
          </div>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="flex flex-col bg-[#fff3d7] p-4 mb-6 rounded font-light mt-10">
            <div className="flex text-[#032b41] gap-2 mb-2">
              <div className="whitespace-nowrap">Nathan S.</div>
              <div className="flex">
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
              </div>
            </div>
            <div className="text-[#394547] tracking0[0.3px] leading-[1.4]">
              This app is a great way to get the main takeaways from a book
              without having to read the entire thing. The summaries are
              well-written and informative. Definitely worth downloading.
            </div>
          </div>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="flex flex-col bg-[#fff3d7] p-4 mb-6 rounded font-light mt-10">
            <div className="flex text-[#032b41] gap-2 mb-2">
              <div className="whitespace-nowrap">Ryan R.</div>
              <div className="flex">
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
                <FaStar className="fill-[#0564f1] w-4 h-4" />
              </div>
            </div>
            <div className="text-[#394547] tracking0[0.3px] leading-[1.4]">
              If you're a busy person who loves reading but doesn't have the
              time to read every book in full, this app is for you! The
              summaries are thorough and provide a great overview of the book's
              content.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-24 gap-12 mt-10">
          <button
            onClick={() => setShowLogin(true)}
            className="bg-[#20d481] w-xs py-3 px-12 rounded cursor-pointer"
          >
            Login
          </button>
        </div>
        <h2 className="text-4xl font-bold text-[#032b41] mt-20 mb-8 text-center">
          Start growing with Summarist now
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {/* FIRST CARD */}
          <div className="flex flex-col items-center text-center bg-[#d7e9ff] p-10 rounded-xl w-80">
            <BiCrown className="w-14 h-14 text-[#0365f2]" />
            <div className="text-4xl text-[#032b41] font-bold mt-2 mb-4">
              3 Million
            </div>
            <div className="text-[#394547]">Downloads on all platforms</div>
          </div>

          {/* SECOND CARD */}
          <div className="flex flex-col items-center text-center bg-[#d7e9ff] p-10 rounded-xl w-80">
            <div className="flex h-8 mt-4">
              <FaStar className="fill-[#0564f1] w-4 h-4" />
              <FaStar className="fill-[#0564f1] w-4 h-4" />
              <FaStar className="fill-[#0564f1] w-4 h-4" />
              <FaStar className="fill-[#0564f1] w-4 h-4" />
              <FaStarHalf className="fill-[#0564f1] w-4 h-4" />
            </div>
            <div className="text-4xl text-[#032b41] font-bold mt-2 mb-4">
              4.5 Stars
            </div>
            <div className="text-[#394547]">
              Average ratings on iOS and Google Play
            </div>
          </div>

          {/* THIRD CARD */}
          <div className="flex flex-col items-center text-center bg-[#d7e9ff] p-10 rounded-xl w-80">
            <LuLeaf className="text-[#0564f1] w-14 h-14" />
            <div className="text-4xl text-[#032b41] font-bold mt-2 mb-4">
              97%
            </div>
            <div className="text-[#394547]">
              Of Summarist members create a better reading habit
            </div>
          </div>
        </div>
      </section>
      <div className=" p-12 w-full">
        <div className="max-w-[1070px] bg-[#d7e9ff] mx-auto p-24">
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
              <h3 className="font-bold text-lg text-[#032b41]">Useful Links</h3>

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
  );
}
