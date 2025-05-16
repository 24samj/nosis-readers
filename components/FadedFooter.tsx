import clsx from "clsx";
import { headers } from "next/headers";
import React from "react";

type Props = {};

const FadedFooter = async (props: Props) => {
  const headerList = headers();
  const pathname = (await headerList).get("x-current-path");

  return (
    <div
      className={clsx("px-6", {
        "bg-brown-50 pb-96": pathname === "/",
        "pb-24": pathname !== "/",
      })}
    >
      <p className="text-dark-75 text-[2.5rem] font-bold">
        next gen.,
        <br /> library.
      </p>
      <span className="text-dark-75 pt-3 text-xs">
        the world’s largest digital library.
      </span>
    </div>
  );
};

export default FadedFooter;
