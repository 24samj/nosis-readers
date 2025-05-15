import { BookCard } from "@/components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type Props = {
  books: Array<Book>;
  heading: string;
  hideControls?: boolean;
};

const CarouselControls = () => {
  return (
    <div className="flex gap-2">
      <button className="grid aspect-square h-8 place-items-center rounded-full bg-white shadow-md">
        <ChevronLeft className="aspect-square w-4" />
      </button>
      <button className="grid aspect-square h-8 place-items-center rounded-full bg-white shadow-md">
        <ChevronRight className="aspect-square w-4" />
      </button>
    </div>
  );
};

const BookCarousel = ({ books, heading, hideControls = false }: Props) => (
  <section className="flex flex-1 flex-col gap-2">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      {!hideControls && <CarouselControls />}
    </div>
    <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-scroll pt-2 md:gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  </section>
);

export default BookCarousel;
