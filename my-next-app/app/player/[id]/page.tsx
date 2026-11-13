"use client";

import { useParams } from "next/navigation";
import BookAudio from "@/app/components/BookAudio";
import { useState, useEffect, Suspense } from "react";
import Sidebar from "@/app/for-you/sidebar";
import { IoIosSearch } from "react-icons/io";

function PlayerContent() {
  const { id } = useParams();

  const [book, setBook] = useState<{
    id: string;
    title: string;
    author: string;
    imageLink: string;
    audioLink: string;
    summary: string;
  } | null>(null);

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    fetch(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${encodeURIComponent(id)}`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load book");
        return res.json();
      })
      .then((data) => setBook(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="ml-[200px]">
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
      </div>

      <main className="ml-[200px] p-8 pb-28">
        {book ? (
          <div className="max-w-[800px] mx-auto text-[#032b41]">
            <h1 className="text-2xl font-bold mb-6 border-b pb-5">
              {book.title}
            </h1>

            <div className="text-base leading-relaxed whitespace-pre-line">
              {book.summary}
            </div>
          </div>
        ) : (
          <p>Loading book...</p>
        )}
      </main>

      {book && (
        <BookAudio
          audioLink={book.audioLink}
          title={book.title}
          author={book.author}
          imageLink={book.imageLink}
        />
      )}
    </div>
  );
}

export default function PlayerPage() {
  return (
    <Suspense fallback={<p>Loading player...</p>}>
      <PlayerContent />
    </Suspense>
  );
}
