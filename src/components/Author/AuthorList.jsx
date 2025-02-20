import React from "react";

const Authorlist = ({ BookProduct }) => {
  return (
    <div className="all-Author xl:p-4 w-full">
      <ul className="xl:flex xl:flex-col xl:justify-start xl:items-start gap-4 w-full xl:overflow-y-scroll h-[410px] xl:scrollbar-thumb-red-500 xl:scrollbar-track-red-700">
        {BookProduct.map((item, index) => (
          <li
            className="w-full xl:border-none xl:px-0 xl:py-0 border px-6 py-4"
            key={index}
          >
            <a href="#" className="xl:font-semibold font-bold text-[18px]">
              {item.author}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authorlist;
