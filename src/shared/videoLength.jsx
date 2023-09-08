import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const duration = moment.duration(time, "seconds");
  let formattedDuration;

  if (duration.asMinutes() < 60) {
    formattedDuration = moment.utc(duration.asMilliseconds()).format("m:ss");
  } else {
    formattedDuration = moment.utc(duration.asMilliseconds()).format("H:mm:ss");
  }

  return (
    <span className="absolute bottom-0 right-1 bg-black py-1 px-2 text-white text-xs rounded-md">
      {formattedDuration}
    </span>
  );
};

export default VideoLength;
