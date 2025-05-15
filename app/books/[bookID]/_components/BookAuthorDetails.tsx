import React from "react";

type Props = {
  author: Author;
};

const BookAuthorDetails = ({ author }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h3 className="text-2xl font-semibold">About Author</h3>
      <div className="flex flex-col gap-2 rounded-xl p-6 shadow-md">
        <span className="font-semibold">{author.name}</span>
        <p className="text-disabled">{author.bio}</p>
      </div>
    </div>
  );
};

export default BookAuthorDetails;
