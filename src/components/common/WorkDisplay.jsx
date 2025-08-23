import React from "react";

const WorkDisplay = ({ videoSrc, marqueeText, title, subtitle }) => {
  return (
    <div className="min-w-[50vw] relative rounded-2xl border-[#ffffff21] border-1 p-5">
      {/* Video Section */}
      <div className="w-full relative">
        <video
          className="h-full w-full object-cover rounded-2xl relative z-0"
          loop
          muted
          autoPlay
          src={videoSrc}
        ></video>

        {/* Marquee Text */}
        <div className="absolute h-[10vh] flex items-center justify-start bottom-[-2vh] sm:bottom-[0] text-center overflow-hidden w-full px-1">
          <h1 className="text-[4vh] sm:text-[8vh] font-semibold text-[#ffffff5b] whitespace-nowrap">
            {marqueeText}
          </h1>
        </div>
      </div>

      {/* Title Section */}
      <div className="px-2 font-[700] py-2 w-full text-white flex items-center justify-between tracking-wide gap-0">
        <h1 className="text-[0.7rem] w-fit md:text-[2rem] leading-[0.7rem] md:leading-[2rem]">
          {title} <br /> {subtitle}
        </h1>
        <h1>-</h1>
      </div>
    </div>
  );
};

export default WorkDisplay;
