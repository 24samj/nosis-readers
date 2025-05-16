import { getAllBooks } from "@/lib/firebase";
import React from "react";
import { BookCategories, BookMonth } from "./_components";
import { BookCarousel, ContinueReading } from "@/components";

type Props = {};

const Home = async (props: Props) => {
  const books = await getAllBooks();

  return (
    <div className="bg-brown-50 flex flex-col gap-9 p-4 md:gap-12 md:p-6">
      <ContinueReading books={books} />
      <BookCarousel books={books} heading="Readers' Choice" />
      <BookCategories />
      <BookMonth bookMonthBooks={books.slice(0, 2)} />
      <BookCarousel books={books} heading="Featured Books" />
      {/* Curated Pathways Section */}
      {/* Reading Journey Section */}
    </div>
  );
};

export default Home;
