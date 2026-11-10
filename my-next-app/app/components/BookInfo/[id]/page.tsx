"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/for-you/sidebar";
import { IoIosSearch } from "react-icons/io";
import { PiClockThin } from "react-icons/pi";
import { IoMdStarOutline } from "react-icons/io";
import AudioDuration from "../components/AudioDuration";
import { FaPlayCircle } from "react-icons/fa";
import Navbar from "./components/Navbar";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  subTitle: string;
  averageRating: number;
};

export default function BookInfo() {
  const [books, setBooks] = useState<Book[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book[]>([]);

  useEffect(() => {
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Recommended books:", data);
        setRecommendedBooks(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const [suggestedBooks, setSuggestedBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Suggested books:", data);
        setSuggestedBooks(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Selected books:", data);
        setSelectedBook(data[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />

      <main className="ml-[200px] min-h-screen">
        {/* Search Header */}
        <header className="h-[76px] flex items-center justify-end px-12 border-b border-[#e1e7ea]">
          <div className="flex items-center w-[340px] max-w-full h-[40px] bg-[#f1f6f4] border-2 border-[#e1e7ea] rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for books"
              className="flex-1 min-w-0 px-4 bg-transparent outline-none text-[#042330]"
            />
            <button
              type="button"
              aria-label="Search books"
              className="h-full px-3 border-l border-[#e1e7ea]"
            >
              <IoIosSearch size={22} />
            </button>
          </div>
        </header>
        <div className="p-[40px] w-full">
          <div className="text-[#032b41] mb-[16px] text-3xl font-semibold">
            Can't Hurt Me
          </div>
          <div className="text-[#032b41] mb-[16px] text-3xl font-semibold">
            David Goggins
          </div>
          <div className="text-xl text-[#032b41] mb-[16px] font-semibold">
            Master Your Mind and Defy the Odds
          </div>
          <div className="border-t border-b border-[#e1e7ea] p-[16px] mb-[24px]">
            <div className="flex flex-wrap gap-[16px] max-w-md gap-y-[12px]">
              <div className="flex items-center text-[#032b41] w-[50%] font-medium text-sm">
                <IoMdStarOutline className="flex size={24} mr-1" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
