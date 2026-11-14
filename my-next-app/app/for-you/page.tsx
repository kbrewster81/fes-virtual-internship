"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/for-you/sidebar";
import { IoIosSearch } from "react-icons/io";
import { PiClockThin } from "react-icons/pi";
import { IoMdStarOutline } from "react-icons/io";
import AudioDuration from "../components/AudioDuration";
import { FaPlayCircle } from "react-icons/fa";

type Book = {
  id: string[];
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

export default function ForYouPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book[]>([]);
  const [duration, setDuration] = useState("--:--");
  const [book, setBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsSearching(true);
      fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${encodeURIComponent(searchQuery)}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(Array.isArray(data) ? data : []);
          setIsSearching(false);
        })
        .catch((error) => {
          console.error(error);
          setIsSearching(false);
        });
    }, 300); // Waits 300ms after you stop typing before calling the API

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

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

  useEffect(() => {
    setDuration("--:--");
  }, []);

  useEffect(() => {
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBook?id=encodeURIComponent",
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
      <Sidebar />

      <main className="ml-[200px] min-h-screen">
        {/* Search Header */}
        <header className="h-[76px] flex items-center justify-end px-12 border-b border-[#e1e7ea]">
          <div className="relative w-[340px] max-w-full">
            <div className="flex items-center w-full h-[40px] bg-[#f1f6f4] border-2 border-[#e1e7ea] rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search for books"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 min-w-0 px-4 bg-transparent outline-none text-[#042330]"
              />
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Search books"
                className="h-full px-3 border-l border-[#e1e7ea] cursor-pointer"
              >
                <IoIosSearch size={22} />
              </button>
            </div>

            {/* Search Results Dropdown */}
            {searchQuery.trim() !== "" && (
              <div className="absolute top-[52px] right-0 w-[440px] max-h-[400px] overflow-y-auto bg-white shadow-xl border border-[#e1e7ea] p-4 z-50 flex flex-col gap-4">
                {isSearching ? (
                  <p className="text-sm text-gray-500">Searching...</p>
                ) : searchResults.length === 0 ? (
                  <p className="text-sm text-gray-500">No books found</p>
                ) : (
                  searchResults.map((book) => (
                    <Link
                      href={`/book/${book.id}`}
                      key={book.id}
                      className="flex items-center gap-4 p-2 hover:bg-[#f1f6f4] rounded transition"
                    >
                      <img
                        src={book.imageLink}
                        alt={book.title}
                        className="w-16 h-20 object-contain shrink-0"
                      />
                      <div className="flex flex-col">
                        <h4 className="font-bold text-sm text-[#032b41]">
                          {book.title}
                        </h4>
                        <p className="text-xs text-[#6b757b] mt-1">
                          {book.author}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-[#6b757b] mt-1">
                          <PiClockThin size={14} />
                          <AudioDuration audioLink={book.audioLink} />
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <div className="max-w-[1070px] mx-auto px-8 py-10 mb-2">
          <h1 className="text-2xl font-bold text-[#032b41] mb-6">
            Selected just for you
          </h1>

          <div className="flex items-center gap-6 bg-[#fbefd6] p-6 rounded-lg">
            {/* Left: Book Description */}
            <div className="w-[40%]">
              <p className="text-[#032b41] mt-">
                How Constant Innovation Creates Radically Successful Businesses
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="w-px h-36 bg-gray-300 shrink-0" />

            {/* Middle: Book Cover */}
            <Link
              href={`/book/${selectedBook.id}`}
              className="w-32 shrink-0 cursor-pointer"
            >
              <img
                src={selectedBook.imageLink}
                alt={selectedBook.title}
                className="w-full h-36 object-contain"
              />
            </Link>

            {/* Right: Book Information */}
            <div className="flex flex-col gap-2 cursor-pointer">
              <h3 className="font-bold text-[#032b41]">{selectedBook.title}</h3>

              <p className="text-sm">{selectedBook.author}</p>

              {/* Play Button and Duration */}
              <div className="flex items-center gap-2 mt-2">
                {/* Add your existing play icon here */}
                <FaPlayCircle className=" w-full h-[50px] rounded-[50%]" />
                <AudioDuration
                  audioLink={selectedBook.audioLink}
                  long={true}
                  className="text-[#032b41] text-sm font-medium"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Recommended Books */}
        <div className="max-w-[1070px] mx-auto px-8 mt-2">
          <h2 className="text-2xl font-bold  text-[#032b41] mb-4">
            Recommended For You
          </h2>

          <p className="font-light text-[#394547] mb-10">
            We think you'll like these
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {recommendedBooks.slice(0, 5).map((book) => (
              <Link href={`/book/${book.id}`} key={book.id}>
                <div>
                  <img
                    src={book.imageLink}
                    alt={book.title}
                    className="w-full h-48 object-contain"
                  />
                  <h3 className="font-bold mt-3">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <p className="text-sm text-gray-500 mt-2">{book.subTitle}</p>
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
        </div>
        {/* Sugessted Books */}
        <div className="max-w-[1070px] mx-auto px-8 mt-14">
          <h2 className="text-2xl font-bold  text-[#032b41] mb-4">
            Suggest Books
          </h2>
          <p className="font-light text-[#394547] mb-10">Browse those books</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {suggestedBooks.slice(0, 5).map((book) => (
              <Link href={`/book/${book.id}`} key={book.id}>
                <div>
                  <img
                    src={book.imageLink}
                    alt={book.title}
                    className="w-full h-48 object-contain"
                  />
                  <h3 className="font-bold mt-3">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <p className="text-sm text-gray-500 mt-2">{book.subTitle}</p>
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
        </div>
      </main>
    </div>
  );
}
