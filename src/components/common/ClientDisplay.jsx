import React from "react";

const ClientDisplay = () => {

  const data = [
    "Mizuno",
    "Cluse",
    "Harpers Bazaar",
    "Footlocker",
    "Filling Pieces"
  ]
  return (
    <div className="w-full md:flex items-center justify-center gap-2">
      <div className="w-full md:w-[50%] h-[40vh] sm:h-[80vh] p-2">
        <img
          className="h-full w-full object-center rounded-2xl object-cover"
          src="\images\client\footlocker.webp"
          alt=""
        />
      </div>

      <div className="w-full md:w-[50%] h-[80vh] p-2">
        {data.map((item, i) => (
          <div key={i} className="w-full h-[15%] border-b-[1px] flex items-center justify-start">
            <h2 className="text-[2rem] sm:text-[1.5rem] md:text-[2rem]">
              {item}
            </h2>
          </div>
        ))}
        <div className="w-full h-[15%] flex items-center justify-end">
          <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.3rem] bg-white text-black px-[1rem] rounded-full">
            Brands
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClientDisplay;
