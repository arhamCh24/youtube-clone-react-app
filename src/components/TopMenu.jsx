import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";
import { ThemeContext } from "../context/ThemeContext";

const TopMenu = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navigate = useNavigate();
  const { mode } = useContext(ThemeContext);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    navigate("/");
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    containerRef.current.scrollLeft = scrollLeft - dx;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  return (
    <div className=" ml-0 md:ml-[6%] mt-3 mx-0 md:mx-[3.5rem] lg:mx-16 relative">
      <button
        className={`absolute top-0 bottom-0 md:left-7 lg:left-5 px-2  text-2xl text-center justify-center items-center   rounded-md  md:block hidden transition duration-700 ease-in-out all ${
          mode === "dark" ? "bg-gray-600" : "bg-transparent"
        }`}
        onClick={() => {
          containerRef.current.scrollLeft -= 200;
        }}
      >
        {"<"}
      </button>
      <button
        className={`absolute text-2xl top-0 bottom-0 md:right-6 lg:right-0 px-2 text-center  rounded-md  md:block hidden ${
          mode === "dark" ? "bg-gray-600" : "bg-transparent"
        }`}
        onClick={() => {
          containerRef.current.scrollLeft += 200;
        }}
      >
        {">"}
      </button>
      <div
        className="flex flex-row overflow-x-auto  md:gap-4 mx-0 md:mx-16 lg:mx-20 gap-5 hide-scrollbar "
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Home"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Home")}
        >
          Home
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Trending"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Trending")}
        >
          Trending
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Music"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Music")}
        >
          Music
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400 "
              : "bg-gray-200 hover:bg-gray-300 "
          } ${
            selectedCategory === "Gaming"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Gaming")}
        >
          Gaming
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "News"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("News")}
        >
          News
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Sports"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Sports")}
        >
          Sports
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Learning"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Learning")}
        >
          Learning
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Films"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Films")}
        >
          Films
        </span>

        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Fashion & beauty"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Fashion & beauty")}
        >
          Fashion&beauty
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Cricket"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Cricket")}
        >
          Cricket
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Home"
              ? ` ${
                  mode === "Mixes"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Mixes")}
        >
          Mixes
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Mashups"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Mashups")}
        >
          Mashups
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Birds"
              ? ` ${
                  mode === "dark"
                    ? "bg-white text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Birds")}
        >
          Birds
        </span>
        <span
          className={`px-4 py-2   rounded-md cursor-pointer ${
            mode === "dark"
              ? "bg-gray-600 hover:bg-gray-400"
              : "bg-gray-200 hover:bg-gray-300"
          } ${
            selectedCategory === "Driving"
              ? ` ${
                  mode === "dark"
                    ? "bg-gray-200 text-black  font-semibold"
                    : "bg-gray-800 text-[#fff] font-semibold"
                }`
              : null
          } `}
          onClick={() => handleCategorySelection("Driving")}
        >
          Driving
        </span>
      </div>
    </div>
  );
};

export default TopMenu;
