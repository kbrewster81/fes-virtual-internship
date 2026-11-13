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
import { AiOutlineRead } from "react-icons/ai";
import { TiMicrophoneOutline } from "react-icons/ti";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { BsBookmarkFill } from "react-icons/bs";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  subTitle: string;
  averageRating: number;
  duration: string;
  summary: string;
  bookDescription: string;
  authorDescription: string;
  audioLink: string;
  tags: string[];
};

export default function BookInfoClient({ id }: { id: string }) {
  const router = useRouter();
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book[]>([]);
  const [book, setBook] = useState<Book | null>(null);
  const [duration, setDuration] = useState("--:--");

  useEffect(() => {
    if (!id) return;

    setDuration("--:--");

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

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!id) return;

    const savedBooks = JSON.parse(localStorage.getItem("myLibrary") || "[]");

    setIsSaved(savedBooks.includes(id));
  }, [id]);

  const handleToggleSave = () => {
    if (!id) return;

    const savedBooks = JSON.parse(localStorage.getItem("myLibrary") || "[]");

    if (savedBooks.includes(id)) {
      const updatedBooks = savedBooks.filter((bookId: string) => bookId !== id);

      localStorage.setItem("myLibrary", JSON.stringify(updatedBooks));

      setIsSaved(false);
    } else {
      savedBooks.push(id);

      localStorage.setItem("myLibrary", JSON.stringify(savedBooks));

      setIsSaved(true);
    }
  };
  if (!book) {
    return <div>Loading book...</div>;
  }

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
        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT COLUMN */}
          <div className="flex-1">
            <h1 className="text-[32px] font-bold leading-tight text-[#032b41] mb-4">
              {book.title}
            </h1>

            <h2 className="text-base font-bold text-[#032b41] mb-4">
              {book.author}
            </h2>

            <p className="text-xl font-light text-[#032b41] mb-5">
              {book.subTitle}
            </p>
            <audio
              key={book.id}
              src={book.audioLink}
              preload="metadata"
              onLoadedMetadata={(event) => {
                const seconds = event.currentTarget.duration;

                console.log("Audio duration:", seconds);

                if (!Number.isFinite(seconds)) return;

                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = Math.floor(seconds % 60);

                setDuration(
                  `${String(minutes).padStart(2, "0")}:${String(
                    remainingSeconds,
                  ).padStart(2, "0")}`,
                );
              }}
              onError={(event) => {
                console.error(
                  "Audio metadata error:",
                  event.currentTarget.error,
                );
              }}
            />

            {/* Ratings grid goes HERE */}
            <div className="border-t border-[#e1e7ea] pt-5  md:flex-row">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full max-w-[400px] text-sm font-semibold text-[#032b41]">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <IoMdStarOutline size={24} />
                  <span>4.4 (608 ratings)</span>
                </div>

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <PiClockThin size={24} />
                  <span>{duration}</span>
                </div>

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <TiMicrophoneOutline size={24} />
                  <span>Audio & Text</span>
                </div>

                <div className="flex items-center gap-2 whitespace-nowrap">
                  <HiOutlineLightBulb size={24} />
                  <span>8 Key ideas</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6 mt-6">
              <button
                onClick={() => router.push(`/player/${book.id}`)}
                className="flex items-center justify-center gap-2 w-[144px] h-[48px] bg-[#032b41] text-white rounded"
              >
                <AiOutlineRead size={24} />
                Read
              </button>

              <button
                onClick={() => router.push(`/player/${book.id}`)}
                className="flex items-center justify-center gap-2 w-[144px] h-[48px] bg-[#032b41] text-white rounded"
              >
                <TiMicrophoneOutline size={24} />
                Listen
              </button>
            </div>
            <div
              onClick={handleToggleSave}
              className="flex items-center gap-2 text-[#0365f2] font-semibold cursor-pointer mb-10 text-lg"
            >
              {isSaved ? (
                <BsBookmarkFill size={22} />
              ) : (
                <CiBookmark size={22} />
              )}

              <span>
                {isSaved ? "Saved in My Library" : "Add to My Library"}
              </span>
            </div>
            <div className="text-lg font-bold  text-[#032b41] mb-[18px]">
              What's it about?
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f1f6f4] px-4 py-3 text-[#032b41] font-semibold rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <section className="mt-8 text-[#032b41]">
              <p className="text-[#032b41] leading-relaxed whitespace-pre-line">
                {book.bookDescription}
              </p>
              <h2 className="text-lg font-bold mb-4">About the author</h2>

              <p className="leading-relaxed whitespace-pre-line">
                {book.authorDescription}
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN */}
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
