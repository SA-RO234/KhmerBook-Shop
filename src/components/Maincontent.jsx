import React, { useEffect, useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Maincontent.css";
import Authorlist from "./Author/AuthorList";
import Carousel from "./Carousel";

const Maincontent = () => {
  const [BookProduct, setBookProduct] = useState([]);
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch("/BookProducts.json")
      .then((response) => response.json())
      .then((data) => {
        setBookProduct(data);
      })
      .catch((error) => console.log("Error Fetching Product ! ", error));
  }, []);

  useEffect(() => {
    fetch("/ads.json")
      .then((response) => response.json())
      .then((data) => setAds(data))
      .catch((error) => console.error("Error fetching image ! ", error));
  }, []);

  return (
    <div className="xl:flex xl:pt-4 bg-[#F8F8F8] xl:gap-4 xl:relative xl:select-none">
      {/*  Desktop  */}
      <div className="Author-list hidden xl:block  xl:border xl:w-[23%]  bg-white">
        <div className="Author-title font-hanuman xl:bg-[var(--color-dark)] xl:flex xl:p-3 xl:px-4 xl:justify-between xl:border-b-2">
          <p>អ្នកនិពន្ធ</p>
          <p className="xl:cursor-pointer xl:flex xl:gap-1">
            មើលទាំងអស់
            <span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </span>
          </p>
        </div>
        <Authorlist BookProduct={BookProduct} />
      </div>

      {/* Mobile */}
      <div className="mobile-overlay xl:hidden w-full h-full top-0 bg-black opacity-75 absolute"></div>
      <div className="Author-list xl:hidden  top-0 py-[15px] absolute w-[70%] h-full border-2  bg-white ">
        <div className="Author-title px-6 flex justify-between pb-5 ">
          <p className="text-[25px]">អ្នកនិពន្ធ</p>
        </div>
        <Authorlist BookProduct={BookProduct} />
      </div>
      <div className="slide-home hidden xl:block xl:w-[77%] h-[500px] ">
        <div className="carousel xl:w-ful h-full ">
          <Carousel Avertiment={ads} />
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
