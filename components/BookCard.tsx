import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { book: Book };

const BookCard = ({ book }: Props) => {
  return (
    <Link
      href={`/books/${book.id}`}
      className="flex min-w-36 snap-start flex-col gap-3 pt-2 md:min-w-52"
    >
      <Image
        src={book.cover}
        alt={book.title}
        width={200}
        height={300}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="line-clamp-2 font-semibold">{book.title}</h3>
        <span className="text-disabled text-sm">{book.author.name}</span>
        <span className="text-disabled text-sm">
          {book.parts.length} part{book.parts.length > 1 ? "s" : ""} • 12 mins
        </span>
      </div>
    </Link>
  );
};

export default BookCard;
