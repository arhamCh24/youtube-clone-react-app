import React, { useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import VideoLength from "../shared/videoLength";

const SuggestionVideoCard = ({ video }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className="flex mb-3">
      <Link to={`/video/${video?.videoId}`}>
        <div
          className={`relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl  overflow-hidden ${
            mode === "dark"
              ? "bg-slate-800 text-[#fff]"
              : "bg-slate-300 text-black"
          }`}
        >
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt={video?.author?.title}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
      </Link>
      <div className="flex flex-col ml-3 overflow-hidden">
        <Link to={`/video/${video?.videoId}`}>
          <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 ">
            {video?.title}
          </span>
        </Link>
        <Link to={`/channel/${video?.author?.channelId}`}>
          <span
            className={`text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-1  flex items-center ${
              mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
            }`}
          >
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill
                className={` text-[12px] lg:text-[10px] xl:text-[12px] ml-2 lg:ml-1" ${
                  mode === "dark" ? "text-white/[0.5]" : "text-gray-600"
                }`}
              />
            )}
          </span>
        </Link>
        <div
          className={`flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden ${
            mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
          }`}
        >
          <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
          <span
            className={`flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1 ${
              mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
            }`}
          >
            .
          </span>
          <span className="truncate">{video?.publishedTimeText}</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionVideoCard;
