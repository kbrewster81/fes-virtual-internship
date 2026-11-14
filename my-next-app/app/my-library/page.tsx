"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/for-you/sidebar";
import Navbar from "@/app/components/Navbar";
import { IoIosSearch, IoMdStarOutline } from "react-icons/io";
import { PiClockThin } from "react-icons/pi";
import AudioDuration from "../components/AudioDuration";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  subTitle: string;
  averageRating: number;
  audioLink: string;
};

export default function MyLibrary() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const savedIds: string[] = JSON.parse(
      localStorage.getItem("myLibrary") || "[]",
    );

    Promise.all(
      savedIds.map((id) =>
        fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${encodeURIComponent(id)}`,
        ).then((res) => {
          if (!res.ok) throw new Error("Failed to load book");
          return res.json();
        }),
      ),
    )
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <Sidebar />
      <main className="ml-[200px] min-h-screen">
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

        <div className="text-xl font-bold text-[#032b41] mb-[16px] text-left">
          Saved Books
        </div>
        <div className="text-sm font-light text-[#394547] mb-[16px] text-left">
          0 items
        </div>
        <div className="bg-[#f1f6f4] max-w-fit font-bold flex flex-col items-center gap-[8px] p-[32px] rounded-[12px] mx-auto text-center">
          Save your favorite books!
          <div className="text-[#394547] font-light">
            When you save a book, it will appear here
          </div>
        </div>

        <div className="text-xl font-bold text-[#032b41] mb-[16px] mt-[24px] text-left">
          Finished
        </div>
        <div className="text-sm font-light text-[#394547] mb-[16px] text-left">
          13 items
        </div>
        <div className="flex gap-[16px] mb-[32px] overflow-x-auto snap-x"></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {books.map((book) => (
            <Link href={`/book/${book.id}`} key={book.id}>
              <div className="cursor-pointer">
                <img
                  src={book.imageLink}
                  alt={book.title}
                  className="w-full h-48 object-contain"
                />
                <h3 className="font-bold mt-3 text-[#032b41]">{book.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{book.author}</p>
                <p className="text-sm text-[#394547] mt-2">{book.subTitle}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <div className="flex items-center gap-1">
                    <PiClockThin size={14} />
                    <AudioDuration audioLink={book.audioLink} />
                  </div>
                  <div className="flex items-center gap-1">
                    <IoMdStarOutline size={14} />
                    <span>{book.averageRating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
