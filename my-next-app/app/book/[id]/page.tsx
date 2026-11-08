import { Suspense } from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  subTitle: string;
  imageLink: string;
  summary: string;
};

export default function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading book...</p>}>
      <BookDetails params={params} />
    </Suspense>
  );
}

async function BookDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );

  if (!response.ok) {
    return <p>Unable to load book.</p>;
  }

  const book = await response.json();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <h2 className="text-xl mt-2">{book.author}</h2>
      <p className="mt-2">{book.subTitle}</p>

      <img src={book.imageLink} alt={book.title} className="w-48 mt-6" />

      <p className="mt-6 whitespace-pre-line">{book.summary}</p>
    </main>
  );
}
