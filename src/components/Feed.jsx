import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";
import Sidebar from "./Sidebar";
import TopMenu from "./TopMenu";
import { ThemeContext } from "../context/ThemeContext";

const Feed = () => {
  const { mode } = useContext(ThemeContext);
  const { loading, searchResults } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <>
      <TopMenu />
      <div
        className={`flex flex-row ${
          searchResults.length === 0 ? "h-screen" : "h-[calc(100%-56px)]"
        }  mt-4 transition duration-700 ease-in-out all ${
          mode === "dark" ? "bg-[#0f0f0f] text-[#fff]" : "bg-[#fff] text-black"
        }`}
      >
        <Sidebar />
        <div className="grow w-full md:w-[calc(100%-240px)] h-full overflow-y-auto  ml-0 md:ml-[7%] hide-scrollbar ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-5 ">
            {!loading &&
              searchResults.map((item) => {
                if (item.type !== "video") return false;
                return (
                  <VideoCard key={item?.video?.videoId} video={item?.video} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
