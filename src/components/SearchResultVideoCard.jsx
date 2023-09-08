import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

import VideoLength from "../shared/videoLength";

const SearchResultVideoCard = ({ video }) => {
  const { mode } = useContext(ThemeContext);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const thumbnailUrl = hovered
    ? video?.movingThumbnails[0]?.url
    : video?.thumbnails[0]?.url;
  return (
    <div className="flex flex-col md:flex-row mb-8 md:mb-3 rounded-xl md:p-4">
      <Link to={`/video/${video?.videoId}`}>
        <div
          className={`relative flex shrink-0 h-48 md:h-32 lg:h-44 xl:h-48 w-full md:w-48 lg:w-72 xl:w-80 rounded-xl overflow-hidden transition duration-700 ease-in-out all ${
            mode === "dark"
              ? "bg-slate-800 text-[#fff]"
              : "bg-slate-300 text-black"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="h-full w-full object-cover"
            src={thumbnailUrl}
            alt={video?.author?.title}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
      </Link>
      <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
        <Link to={`/video/${video?.videoId}`}>
          <span className="text-base md:text-lg lg:text-xl font-medium line-clamp-2 ">
            {video?.title}
          </span>

          <div
            className={` flex text-xs font-medium  truncate overflow-hidden ${
              mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
            }`}
          >
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span
              className={`flex leading-none font-bold relative top-[-10px] mx-1 ${
                mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
              }`}
            >
              .
            </span>
            <span className="truncate">{video?.publishedTimeText}</span>
          </div>
        </Link>
        <Link to={`/channel/${video?.author?.channelId}`}>
          <div className="hidden md:flex items-center ">
            <div className="flex items-start mr-3 mt-2 lg:mt-3">
              <div className="flex h-8 w-8 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <span
                className={`text-xs font-semibold mt-2 lg:mt-3 flex items-center ${
                  mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
                }`}
              >
                {video?.author?.title}

                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill
                    className={` text-[12px] lg:text-[10px] xl:text-[12px] ml-1 ${
                      mode === "dark" ? "text-white/[0.5]" : "text-gray-600"
                    }`}
                  />
                )}
              </span>
            </div>
          </div>
        </Link>
        <span
          className={`empty:hidden text-xs lg:text-sm line-clamp-1 md:line-clamp-2 ] md:pr-24 md:my-1 lg:my-3 ${
            mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
          }`}
        >
          {video?.descriptionSnippet}
        </span>
      </div>
    </div>
  );
};

export default SearchResultVideoCard;
