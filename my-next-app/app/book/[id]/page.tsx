import { Suspense } from "react";
import BookInfoClient from "./BookInfoClient";

type Props = {
  params: Promise<{ id: string }>;
};

async function BookContent({ params }: Props) {
  const { id } = await params;

  return <BookInfoClient id={id} />;
}

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading book...</p>}>
      <BookContent params={params} />
    </Suspense>
  );
}
