"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/for-you/sidebar";

type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
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
      <div className="w-6">
        <div className="text-xl font-bold text-[#032b41] mb-[16px]">
          Saved Books
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id}>
            <div className="cursor-pointer">
              <img
                src={book.imageLink}
                alt={book.title}
                className="w-full rounded-lg"
              />
              <h2 className="font-bold mt-2">{book.title}</h2>
              <p className="text-gray-500">{book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
