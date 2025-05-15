import { BookActions } from "@/components";
import Image from "next/image";
import React from "react";

type Props = {
  book: Book;
};

const BookDetails = ({ book }: Props) => {
  return (
    <div className="book-details bg-brown-50 flex flex-col items-center gap-4 pb-8 md:flex-row md:items-start md:gap-8 md:pl-8">
      <Image
        src={book.cover}
        alt={book.title}
        width={200}
        height={300}
        className="rounded-lg"
      />
      <div className="flex max-w-96 flex-col items-center gap-4 pt-2 md:items-start lg:gap-6">
        <h2 className="text-3xl font-semibold md:text-4xl">{book.title}</h2>
        <span className="text-disabled">{book.author.name}</span>
        <div className="text-disabled flex items-center gap-3 text-sm">
          <span>
            {book.parts.length} part{book.parts.length > 1 ? "s" : ""}
          </span>
          <span>•</span>
          <span>0 mins</span>
        </div>
        <div className="flex flex-wrap">
          {book.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-300"
            >
              {genre}
            </span>
          ))}
        </div>
        <BookActions type="bookDetails" />
      </div>
    </div>
  );
};

export default BookDetails;
