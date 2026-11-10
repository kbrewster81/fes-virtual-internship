"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/for-you/sidebar";
import { IoIosSearch } from "react-icons/io";
import { PiClockThin } from "react-icons/pi";
import { IoMdStarOutline } from "react-icons/io";
import AudioDuration from "@/app/components/AudioDuration";
import { FaPlayCircle } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  subTitle: string;
  averageRating: number;
};

export default function BookInfoClient({ id }: { id: string }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book[]>([]);
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${encodeURIComponent(id)}`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load book");
        return res.json();
      })
      .then((data) => {
        setBook(data);
      })
      .catch((error) => console.error(error));
  }, [id]);
  if (!book) return <div>Loading book...</div>;

  return (
    <div className="min-h-screen">
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
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#032b41] mb-4">
              {book.title}
            </h1>

            <h2 className="font-semibold text-[#032b41] mb-4">{book.author}</h2>

            <p className="text-xl text-[#032b41]">{book.subTitle}</p>

           
          </div>

          <div className="w-full md:w-[300px] shrink-0">
            <img
              src={book.imageLink}
              alt={book.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
