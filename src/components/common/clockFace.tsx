import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import React, { useEffect, useState } from "react";

type ClockFaceProps = {
  currentTimeZone?: string;
  memberName?: string;
};

const ClockFace: React.FC<ClockFaceProps> = ({
  currentTimeZone = "Africa/Johannesburg",
  memberName = "User",
}) => {
  const [date, setDate] = useState(new Date());
  // first to zonedTime
  const [zonedTime, setZonedTime] = useState(
    toZonedTime(new Date(), currentTimeZone)
  );
  // third to display
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setZonedTime(toZonedTime(new Date(), currentTimeZone));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTimeZone]);

  const isPM = zonedTime.getHours() >= 12;

  return (
    <div className="flex items-center justify-center flex-col">
      {/* Location */}
      <div className="mb-3">
        <span className=" text-white text-sm md:text-lg font-semibold">
          {memberName}
        </span>
      </div>

      <div className="relative w-36 h-36 md:w-52 md:h-52 bg-gray-800 rounded-full flex flex-col items-center justify-center shadow-lg">
        {/* Circle Border */}
        <div className="absolute inset-0 rounded-full border-[6px] border-purple-500 opacity-90"></div>
        {/* Time */}
        <span className="text-white text-2xl md:text-4xl font-bold space-x-1">
          <span>{format(zonedTime, "hh:mm")}</span>
          <span className="text-sm md:text-xl font-bold text-gray-500">
            {isPM ? "PM" : "AM"}
          </span>
        </span>
        {/* Date */}
        <span className="text-gray-400 text-xs md:text-sm mt-1">
          {format(date, "MMMM d, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default ClockFace;
