import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ytLogoDark from "../images/yt-logo-dark.png";
import ytLogoLight from "../images/yt-logo-light.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { IoIosSearch } from "react-icons/io";
import {
  RiFeedbackLine,
  RiMoneyDollarCircleLine,
  RiVideoAddLine,
} from "react-icons/ri";
import { FiBell, FiHelpCircle, FiSettings } from "react-icons/fi";
import { Context } from "../context/contextApi";
import Loader from "../shared/loader";
import { useSidebarContext } from "../context/SidebarContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode, MdSwitchAccount } from "react-icons/md";
import {
  BsFillPersonVcardFill,
  BsPersonBadge,
  BsPersonCircle,
  BsPersonFillExclamation,
  BsPlayCircle,
} from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";

const Header = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const { loading } = useContext(Context);
  const { toggleSidebar } = useSidebarContext();
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen(!isAvatarMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 transition duration-700 ease-in-out all ${
        mode === "dark"
          ? "bg-[#0f0f0f] text-[#fff]"
          : "bg-[#fff] text-[#0f0f0f]"
      } `}
    >
      {loading && <Loader />}

      <div className="flex  items-center">
        <GiHamburgerMenu
          className="ml-2 mr-5 cursor-pointer  btn md:h-6 md:w-6 h-5 w-5 md:block hidden "
          onClick={toggleSidebar}
        />
        <Link to="/" className="flex h-5 items-center">
          {mode === "dark" ? (
            <img
              className="h-full hidden dark:md:block transition duration-700 ease-in-out all"
              src={ytLogoDark}
              alt="Youtube"
            />
          ) : (
            <img
              className="h-full hidden dark:md:block transition duration-700 ease-in-out all"
              src={ytLogoLight}
              alt="Youtube"
            />
          )}
          <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div
          className={`flex h-8 md:h-10 md:ml-6 md:pl-4 border rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ${
            mode === "dark" ? "border-[#303030] " : " border-[#555555] "
          }`}
        >
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className=" text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none  pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className={`w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 rounded-r-3xl ${
            mode === "dark"
              ? "border-[#303030] bg-white/[0.1]"
              : "bg-gray-100 border-[#555555] "
          }`}
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className=" text-xl" />
        </button>
      </div>
      <div className="flex items-center relative">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className=" text-xl cursor-pointer" />
          </div>

          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className=" text-xl cursor-pointer" />
          </div>
        </div>
        <div
          className="flex  md:ml-4 cursor-pointer rounded-full hover:bg-[#303030]/[0.6]"
          onClick={toggleAvatarMenu}
        >
          <BsPersonCircle className=" h-7 w-7 " />
        </div>
        {/* Avatar Menu */}
        {isAvatarMenuOpen && (
          <div
            className={`absolute -top-1 right-9 mt-2 w-72  border shadow-lg rounded-xl  overflow-y-auto h-screen  ${
              mode === "dark"
                ? "bg-[#444] text-[#fff] border-gray-700 "
                : "bg-white text-gray-700 border-gray-100"
            }`}
          >
            <div className="py-1">
              {/* Menu Items */}
              <span className="flex flex-row gap-4 mx-2 ">
                <BsPersonCircle className=" h-8 w-8 my-2" />

                <span className="mb-2">
                  <h1>Your Name</h1>
                  <p className="mb-1">@yourName</p>
                  <a href="#" className="text-blue-600 cursor-pointer ">
                    Manage your Account
                  </a>
                </span>
              </span>
              <hr
                className={`border-t-1  my-2 ${
                  mode === "dark" ? "border-gray-500" : "border-gray-300"
                } `}
              />
              <span className="mx-2 flex flex-col gap-1">
                <p
                  className={`px-2 py-2 cursor-pointer  flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <BsPersonBadge className="text-2xl mr-3" />
                  Your Channel
                </p>
                <p
                  className={`px-2 py-2 cursor-pointer flex flex-row  ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <BsPlayCircle className="text-2xl mr-3" />
                  Youtube Studio
                </p>
                <p
                  className={`px-2 py-2 cursor-pointer flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <MdSwitchAccount className="text-2xl mr-3" />
                  Switch Account
                </p>
              </span>
              <hr
                className={`border-t-1  my-2 ${
                  mode === "dark" ? "border-gray-500" : "border-gray-300"
                } `}
              />
              <span className="mx-2 flex flex-col gap-1">
                <p
                  className={`px-2 py-2 cursor-pointer  flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <RiMoneyDollarCircleLine className="text-2xl mr-3" />
                  Purchases and memberships
                </p>
                <p
                  className={`px-2 py-2 cursor-pointer flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <BsFillPersonVcardFill className="text-2xl mr-3" />
                  Your data in Youtube
                </p>
              </span>
              <hr
                className={`border-t-1  my-2 ${
                  mode === "dark" ? "border-gray-500" : "border-gray-300"
                } `}
              />
              <span className="mx-2 flex flex-col gap-1">
                <span
                  onClick={toggle}
                  className={`px-2 py-2 cursor-pointer flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <MdOutlineDarkMode className="text-2xl mr-3" />
                  Apperance: {mode === "light" ? "Dark" : "Light"}
                </span>
                <p
                  className={`px-2 py-2 cursor-pointer flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <IoLanguageOutline className="text-2xl mr-3" />
                  Language: English
                </p>
                <p
                  className={`px-2 py-2 cursor-pointer flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <BsPersonFillExclamation className="text-2xl mr-3" />
                  Restricted Mode: off
                </p>
              </span>
              <hr
                className={`border-t-1  my-2 ${
                  mode === "dark" ? "border-gray-500" : "border-gray-300"
                } `}
              />
              <span className="mx-2 flex flex-col gap-1">
                <p
                  className={`px-2 py-2 cursor-pointer  flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <FiSettings className="text-2xl mr-3" />
                  Settings
                </p>
              </span>
              <hr
                className={`border-t-1  my-2 ${
                  mode === "dark" ? "border-gray-500" : "border-gray-300"
                } `}
              />
              <span className="mx-2 flex flex-col gap-1">
                <p
                  className={`px-2 py-2 cursor-pointer  flex flex-row ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <FiHelpCircle className="text-2xl mr-3" />
                  Help
                </p>
                <p
                  className={`px-2 py-2 cursor-pointer flex flex-row mb-16 md:mb-7 ${
                    mode === "dark"
                      ? "hover:bg-[#303030]/[0.4]"
                      : "hover:bg-gray-200/[0.5]"
                  }`}
                >
                  <RiFeedbackLine className="text-2xl mr-3" />
                  Send feedback
                </p>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
