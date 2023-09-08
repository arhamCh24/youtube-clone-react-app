import { React, useContext } from "react";
import { useSidebarContext } from "../../context/SidebarContext";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { Context } from "../../context/contextApi";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";

const ExtendedSidebar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  const { sideBar } = useSidebarContext();
  const navigate = useNavigate();
  const { mode } = useContext(ThemeContext);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    navigate("/");
  };

  return (
    <>
      {sideBar && (
        <div
          className={`  z-50  w-[16%] md:w-[27%] lg:w-[18%] h-screen fixed md:block hidden top-10  flex-col pl-3 py-2 gap-5  ${
            mode === "dark" ? "bg-opacity-90 bg-black" : "bg-white "
          }`}
        >
          <div className="h-full overflow-y-auto">
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Home"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
              onClick={() => handleCategorySelection("Home")}
              href="/"
            >
              <AiFillHome className=" text-xl justify-start" />
              Home
            </span>
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Shorts"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <FaTiktok className=" text-xl justify-start" />
              Shorts
            </span>
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Subscriptions"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <FaRegNewspaper className=" text-xl justify-start" />
              Subscriptions
            </span>
            <hr className="my-3 bg-gray-700" />
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Library"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <FaPlayCircle className=" text-xl justify-start" />
              Library
            </span>
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "History"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <MdHistory className=" text-xl justify-start" />
              History
            </span>

            <hr className="my-3 bg-gray-700" />

            <p className="ml-4">
              Sign in to like videos, comment, and subscribe.
            </p>
            <button className="flex justify-center items-center gap-2 border border-gray-400 hover:bg-blue-400 hover:opacity-50 rounded-xl ml-5 px-5 mt-2 text-blue-600 font-semibold">
              <BsPersonCircle className="h-4 w-4" /> Sign in
            </button>

            <hr className="my-3 bg-gray-700" />
            <p className="ml-1 text-lg">Explore</p>
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Trending"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
              onClick={() => handleCategorySelection("Trending")}
            >
              <MdLocalFireDepartment className=" text-xl justify-start" />
              Trending
            </span>
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Music"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
              onClick={() => handleCategorySelection("Music")}
            >
              <CgMusicNote className=" text-xl justify-start" />
              Music
            </span>
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Gaming"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
              onClick={() => handleCategorySelection("Gaming")}
            >
              <IoGameControllerSharp className=" text-xl justify-start" />
              Gaming
            </span>
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "News"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
              onClick={() => handleCategorySelection("News")}
            >
              <ImNewspaper className=" text-xl justify-start" />
              News
            </span>
            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Sports"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
              onClick={() => handleCategorySelection("Sports")}
            >
              <GiDiamondTrophy className=" text-xl justify-start" />
              Sports
            </span>

            <hr className="my-3 bg-gray-700" />

            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Browse Channel"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <a href="/" className="text-xl  justify-start">
                ➕
              </a>{" "}
              Browse Channel
            </span>

            <hr className="my-3 bg-gray-700" />

            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Setting"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <FiSettings className=" text-xl justify-start" />
              Setting
            </span>

            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Report history"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <AiOutlineFlag className=" text-xl justify-start" />
              Report history
            </span>

            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Help"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <FiHelpCircle className=" text-xl justify-start" />
              Help
            </span>

            <span
              className={`flex text-lg font-medium items-center lg:gap-5 gap-4 mb-2 rounded-lg py-[0.4rem] mt-5 px-3 cursor-pointer
                ${
                  mode === "dark" ? " hover:bg-[#303030]" : "hover:bg-gray-200 "
                } ${
                selectedCategory === "Send feedback"
                  ? ` ${
                      mode === "dark" ? "bg-[#303030]/[0.8] " : "bg-gray-100 "
                    }`
                  : ""
              }`}
            >
              <RiFeedbackLine className=" text-xl justify-start" />
              Send feedback
            </span>

            <hr className="my-3 bg-gray-700" />
            <p className="ml-3 text-md cursor-pointer">
              About press copyright{" "}
            </p>
            <p className="ml-3 text-md cursor-pointer">contact us creators </p>
            <p className="ml-3 text-md mb-2 cursor-pointer">
              Adertise Developers
            </p>
            <p className="ml-3 text-md cursor-pointer">
              Terms Privacy Policy&Safety
            </p>
            <p className="ml-3 text-md cursor-pointer">How Youtube works</p>
            <p className="ml-3 text-md mb-2 cursor-pointer">
              Test new features
            </p>
            <p className="ml-3 text-md mb-20 opacity-70">@2023 Google LLC</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExtendedSidebar;
