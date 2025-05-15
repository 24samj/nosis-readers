import {
  atom,
  book_person,
  brain_blow,
  briefcase,
  cloud,
  cupcake,
  flex_heart,
  geo_politics,
  hand_pray,
  hand_wrap,
  heart_check,
  heart_filled,
  hug_heart,
  person_growth,
  phone_coin,
  podium_first,
  startup_entrepreneurship,
} from "@/assets";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {};

interface BookCategory {
  icon: StaticImageData;
  label: string;
}

const categories: Array<BookCategory> = [
  {
    icon: startup_entrepreneurship,
    label: "Startup Entrepreneurship",
  },
  {
    icon: cloud,
    label: "Philosophy",
  },
  {
    icon: hand_wrap,
    label: "Personal Development",
  },
  {
    icon: atom,
    label: "Science & Technology",
  },
  {
    icon: podium_first,
    label: "Leadership",
  },
  {
    icon: heart_check,
    label: "Productivity",
  },
  {
    icon: hand_pray,
    label: "Spirituality",
  },
  {
    icon: briefcase,
    label: "Business",
  },
  {
    icon: geo_politics,
    label: "Global Politics",
  },
  {
    icon: hug_heart,
    label: "Lifestyle",
  },
  {
    icon: heart_filled,
    label: "Romance",
  },
  {
    icon: cupcake,
    label: "Entertainment",
  },
  {
    icon: book_person,
    label: "Biographies",
  },
  {
    icon: flex_heart,
    label: "Health & Nutrition",
  },
  {
    icon: person_growth,
    label: "Self-Help",
  },
  {
    icon: brain_blow,
    label: "Psychology",
  },
  {
    icon: phone_coin,
    label: "Finance & Investments",
  },
];

const CategoryPill = ({ category }: { category: BookCategory }) => {
  return (
    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-2 shadow-sm">
      <Image
        src={category.icon}
        alt={category.label}
        width={20}
        height={20}
        className="aspect-square w-5"
      />
      <span className="text-sm font-medium text-green-300">
        {category.label}
      </span>
    </button>
  );
};

const BookCategories = (props: Props) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-3 py-2">
        {categories.map((category) => (
          <CategoryPill key={category.label} category={category} />
        ))}
      </div>
    </section>
  );
};

export default BookCategories;
