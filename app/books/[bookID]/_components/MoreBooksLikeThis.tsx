import { BookCarousel } from "@/components";
import { getAllBooks } from "@/lib/firebase";
import React from "react";

type Props = {
  book: Book;
};

const MoreBooksLikeThis = async ({ book }: Props) => {
  // this book param could potential be used to fetch similar books
  const books = await getAllBooks();

  return <BookCarousel books={books} heading="More Like This" hideControls />;
};

export default MoreBooksLikeThis;
