"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/for-you/sidebar";
import { IoIosSearch } from "react-icons/io";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  subTitle: string;
};

export default function ForYouPage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data: Book[] = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchBooks();
  }, []);

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

        {/* Page Content */}
        <div className="max-w-[1070px] mx-auto px-8 py-10">
          <h1 className="text-2xl font-bold text-[#032b41] mb-6">
            Selected just for you
          </h1>
          <div className="flex items-center gap-8 bg-[#fbefd6] p-6 rounded-lg">
            {/* Book Description */}
            <div className="flex-1">
              <p className="text-[#032b41] text-lg">
                How Constant Innovation Creates Radically Successful Businesses
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex-1 flex items-center gap-6">
            <div className="w-24 h-36 bg-gray-200 rounded flex items-center justify-center">
              Cover
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[#032b41]">The Lean Startup</h2>
            <p className="text-sm mt-2">Eric Ries</p>
          </div>
        </div>
        {/* Book Information */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link href={`/book/${book.id}`} key={book.id}>
              <div>
                <img
                  src={book.imageLink}
                  alt={book.title}
                  className="w-full h-48 object-contain"
                />
                <h3 className="font-bold mt-3">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-px h-36 bg-gray-300">
          {/* Recommended Books */}
          <h2 className="text-2xl font-bold text-[#032b41] mt-10 mb-6">
            Recommended For You
          </h2>
          <div className="font-light text-[#394547] mb-[16px]">
            We think you'll like these
          </div>
        </div>
      </main>
    </div>
  );
}
