import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import Sidebar from "../components/Sidebar";
import { BsArrowDown, BsFillCheckCircleFill } from "react-icons/bs";
import ChannelCard from "./ChannelCard";
import { ThemeContext } from "../context/ThemeContext";

const ChannelDetail = () => {
  const { id } = useParams();
  const { setLoading } = useContext(Context);
  const [channelData, setChannelData] = useState();
  const [ChannelVideos, setChannelVideos] = useState();
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen(!isAvatarMenuOpen);
  };

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchChannelDetails();
    fetchChannelVideos();
  }, [id]);

  const fetchChannelDetails = () => {
    setLoading(true);
    fetchDataFromApi(`channel/details/?id=${id}`).then((res) => {
      // console.log(res);
      setChannelData(res);
      setLoading(false);
    });
  };

  const fetchChannelVideos = () => {
    setLoading(true);
    fetchDataFromApi(`channel/videos/?id=${id}`).then((res) => {
      // console.log(res);
      setChannelVideos(res);
      setLoading(false);
    });
  };

  const toCamelCase = (str) => {
    return str
      .replace(/\s+/g, "")
      .replace(/^(.)/, (match) => match.toLowerCase());
  };

  if (!channelData || !channelData.title) {
    return null;
  }

  const camelCaseTitle = toCamelCase(channelData?.title);

  const description = channelData?.description;
  const words = description.split(" ");
  const truncatedDescription = words.slice(0, 11).join(" ");

  return (
    <div>
      <Sidebar />
      <div className=" ml-0 md:ml-[7%]  ">
        <div className="w-full h-16 md:h-32 lg:h-52">
          <img
            className="h-full w-full object-cover"
            src={channelData?.banner?.desktop[0]?.url}
          />
        </div>
        <div className="flex flex-col items-center md:flex-row my-6 mx-16 ">
          <div className="w-20 md:w-28 lg:w-32 h-20 md:h-28 lg:h-32 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={channelData?.avatar[0]?.url}
            />
          </div>
          <div className="ml-4  flex flex-col items-center md:items-start ">
            <h1 className="text-lg lg:text-2xl font-medium flex items-center">
              {channelData?.title}
              {channelData?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill
                  className={` text-[12px] lg:text-[10px] xl:text-[12px] ml-1 ${
                    mode === "dark" ? "text-white/[0.5]" : "text-gray-600"
                  }`}
                />
              )}
            </h1>
            <span
              className={`flex flex-row gap-3  mt-1 mb-2 lg:text-base md:text-sm text-xs ${
                mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
              }`}
            >
              <p>@{camelCaseTitle}</p>
              <p>{channelData?.stats?.subscribersText}</p>
            </span>
            <p
              className={`lg:text-base text-xs ${
                mode === "dark" ? "text-white/[0.7]" : "text-gray-600"
              }`}
            >
              {truncatedDescription} {">"}
            </p>
          </div>
        </div>
        <div
          className={`flex flex-row gap-7 md:gap-5 mx-6 md:mx-16 lg:mx-24 justify-between  lg:text-base text-sm ${
            mode === "dark" ? "text-white/[0.8]" : "text-gray-700"
          }`}
        >
          <span>HOME</span>
          <span
            className={`underline font-medium ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            VIDEOS
          </span>

          <span>LIVE</span>
          <span className="text-lg md:hidden block" onClick={toggleAvatarMenu}>
            <BsArrowDown />
          </span>
          <span className="hidden md:block">PLAYLISTS</span>
          <span className="hidden md:block">COMMUNITY</span>
          <span className="hidden md:block">CHANNELS</span>
          <span className="hidden md:block">ABOUT</span>
        </div>
        {isAvatarMenuOpen && (
          <div
            className={`absolute top-[25%] left-[23%] mt-2 w-60  border shadow-md rounded-xl h-64  md:hidden block ${
              mode === "dark"
                ? "bg-[#444] text-[#fff] border-gray-700 "
                : "bg-white text-gray-700 border-gray-100"
            }`}
          >
            <div className="py-1 flex flex-col gap-3 mx-2">
              <p>Short</p>
              <p>Playlists</p>
              <p>Community</p>
              <p>About</p>
              <p>Channels</p>
              <p>Search</p>
              <p onClick={toggleAvatarMenu}>Cancel</p>
            </div>
          </div>
        )}
        <hr
          className={`border-t-2  my-3 ${
            mode === "dark" ? "border-gray-500" : "border-gray-300"
          } `}
        />
        <div
          className={`grow w-[calc(100%-2px)] lg:w-[calc(100%-50px)]  ${
            !ChannelVideos ? "h-screen" : "h-full"
          } overflow-y-auto hide-scrollbar transition duration-700 ease-in-out all ${
            mode === "dark"
              ? "bg-[#0f0f0f] text-[#fff]"
              : "bg-[#fff] text-black"
          }`}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 lg:gap-4 gap-3 lg:p-5 p-4 `}
          >
            {ChannelVideos?.contents?.map((item, index) => {
              if (item?.type !== "video") return false;
              return (
                <ChannelCard
                  key={index}
                  video={item?.video}
                  avatar={channelData?.avatar[0]?.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
