import { React, useContext, useState } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import VideoLength from "../shared/videoLength";

const ChannelCard = ({ video, avatar }) => {
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
    <Link to={`/video/${video?.videoId}`}>
      <div
        className={`flex flex-col mb-8 ${
          mode === "dark" ? "bg-[#0f0f0f] text-[#fff]" : "bg-white text-black"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={thumbnailUrl}
            alt={video?.author?.title}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex  mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={avatar}
                alt={video?.author?.title}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span
              className={`text-[12px] font-semibold mt-2 flex items-center  ${
                mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
              }`}
            >
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill
                  className={`text-[12px] ml-1  ${
                    mode === "dark" ? "text-white/[0.5]" : "text-gray-600"
                  }`}
                />
              )}
            </span>
            <div
              className={`flex text-[12px] font-semibold truncate overflow-hidden  ${
                mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
              }`}
            >
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span
                className={`flex text-[24px] leading-none font-bold relative top-[-10px] mx-1  ${
                  mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
                }`}
              >
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;
