import { React, useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const CollapsedSidebar = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      className={` z-10  lg:w-[6%] md:w-[9%] w-[100%] md:min-h-screen h-auto fixed md:top-10 md:flex-col bottom-0 md:justify-start justify-center flex px-4 md:py-4 py-0 md:gap-5 gap-[4.5rem] transition duration-700 ease-in-out all ${
        mode === "dark" ? "bg-[#0f0f0f] text-[#fff]" : "bg-[#fff] text-black"
      }`}
    >
      <Link
        to="/"
        className="cursor-pointer flex flex-col text-xs lg:text-sm items-center md:mb-7 lg:mt-5 md:mt-0 my-1"
      >
        <AiFillHome className="lg:text-2xl text-xl" />
        Home
      </Link>
      <span className="flex flex-col text-xs lg:text-sm items-center md:mb-7 md:mt-0 my-1 cursor-pointer">
        <FaTiktok className=" text-xl justify-start" />
        Shorts
      </span>
      <span className="flex-col text-xs lg:text-sm font-base items-center md:mb-7 lg:flex hidden">
        <FaRegNewspaper className=" text-xl justify-start" />
        Subscriptions
      </span>
      <span className="flex-col text-xs lg:text-sm font-base items-center md:mb-7 md:flex lg:hidden sm:hidden hidden">
        <FaRegNewspaper className=" text-xl justify-start" />
        Subscribe
      </span>
      <span className="flex flex-col text-xs lg:text-sm items-center md:mb-7 cursor-pointer md:mt-0 my-1">
        <FaPlayCircle className=" text-xl justify-start" />
        Library
      </span>
    </div>
  );
};

export default CollapsedSidebar;
