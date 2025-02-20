import React from "react";
import logo from "../assets/logo.webp";
import English from "../assets/flag/english.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons/faCircleUser";
import  account  from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="w-full">
      <div className="nav-top font-hanuman px-3 py-3 xl:p-0 relative xl:w-full flex justify-between items-center xl:border-b-2 xl:pb-4">
        <div className="top-left w-full xl:w-[550px] xl:relative flex xl:justify-start items-center gap-2">
          <a href="#">
            <img
              className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]"
              src={logo}
              alt="logo"
            />
          </a>
          <h1 className="xl:text-2xl font-hanuman  select-none font-bold italic w-[120px] text-primary">
            សៀវភៅចំណេះដឹង
          </h1>
          <div className="search font-hanuman absolute xl:left-60 xl:top-[36px] top-[70px] flex xl:justify-end justify-center items-center xl:w-[300px] w-[90%]">
            <input
              className="w-full outline-none border-2 border-slate-500 px-2 py-3 xl:px-5 xl:py-1 placeholder:select-none"
              type="text"
              name=""
              placeholder="ស្វែងរកសៀវភៅ​..."
              id=""
            />
            <div className="searchIcon xl:px-4 bg-black text-white xl:py-[9px] py-[17px] border-black xl:w-[20px] w-[60px] h-[100%] border flex justify-center items-center cursor-pointer">
              <FontAwesomeIcon icon={faSearch} size="1x"></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div className="nofication xl:hidden absolute top-[20px] right-[140px]">
          <a href="#">
            <FontAwesomeIcon
              icon={faBell}
              className="text-[25px]"
            ></FontAwesomeIcon>
          </a>
        </div>
        <div className="flex gap-[50px] items-center">
          <div className="account">
            <a
              href="#"
              className="flex items-center  font-bokor gap-2 justify-center"
            >
              <img className="w-[35px] h-[35px]" src={account} alt="account" />
              <span className="font-poppins">Sun Rosa</span>
            </a>
          </div>
          <div className="xl:top-right w-[70px] relative xl:right-0 right-[20px] xl:top-0 xl:relative flex justify-center items-center border bg-gray-100 border-gray-700 px-2 cursor-pointer py-1">
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            <span className="font-normal select-none">ទំនិញ</span>
            <span
              className="qty absolute w-[20px] h-[20px] bg-red-700 rounded-full flex justify-center items-center top-[-10px] right-[-10px] text-white"
              id="qty"
            >
              0
            </span>
          </div>
        </div>
        <div className="menu xl:hidden">
          <button type="button">
            <FontAwesomeIcon
              icon={faBars}
              className="text-[35px]"
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
      {/*  navbar bottom  */}
      <div className="nav-bottom font-hanuman xl:w-full xl:border-b-2 hidden xl:flex justify-between items-center">
        <div className="navleft w-[400px] flex justify-start items-center gap-6 py-2">
          <div className="explore flex select-none cursor-pointer justify-center items-center gap-2">
            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
            រុករកសៀវភៅ
          </div>
          <div className="explore select-none cursor-pointer flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
            ការជូនដំណឹង
          </div>
          <div className="explore select-none cursor-pointer flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faClipboardCheck}></FontAwesomeIcon>
            តាមដានការបញ្ជាទិញ
          </div>
        </div>
        <div className="navright">
          <div className="selected-lang cursor-pointer flex justify-center gap-2 items-center">
            <img src={English} className="w-[25px] select-none" alt="" />
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </div>
          <ul>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
