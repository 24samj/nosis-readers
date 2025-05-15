import { book_closed, bookmark, three_dot_menu } from "@/assets";
import { getBook } from "@/lib/firebase";
import { ChevronLeft, Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  BookAuthorDetails,
  BookContents,
  BookDetails,
  BookDetailsFooter,
  BookOptions,
  BookPreface,
  MoreBooksLikeThis,
} from "./_components";
import Link from "next/link";

type Props = {
  params: Promise<{ bookID: string }>;
};

const BookDetailsPage = async ({ params }: Props) => {
  const { bookID } = await params;

  const book = await getBook(bookID);

  if (!book) return null;

  return (
    <div className="relative">
      <div className="bg-brown-50 flex justify-between px-4 py-6 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-1 rounded-lg py-2 transition-all hover:shadow-sm md:bg-white md:px-4"
        >
          <ChevronLeft className="text-disabled aspect-square w-4 transition-all group-hover:text-black" />
          <span className="text-disabled text-sm font-medium transition-all group-hover:text-black">
            Back
          </span>
        </Link>
        <BookOptions />
      </div>
      <BookDetails book={book} />
      <div className="complete-details flex flex-col gap-12 bg-white p-6 md:px-8 md:py-16">
        <BookPreface description={book.description} />
        <BookContents contents={book.parts} />
        <BookAuthorDetails author={book.author} />
        <MoreBooksLikeThis book={book} />
      </div>
      <BookDetailsFooter />
    </div>
  );
};

export default BookDetailsPage;
