import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const ClientDisplay = () => {
  const data = [
    { name: "Mizuno", img: "/images/client/mizuno.webp" },
    { name: "Cluse", img: "/images/client/cluse.webp" },
    { name: "Harpers Bazaar", img: "/images/client/harpersBazaar.webp" },
    { name: "Footlocker", img: "/images/client/footlocker.webp" },
    { name: "Filling Pieces", img: "/images/client/fillingPieces.webp" },
  ];

  const [currentImg, setCurrentImg] = useState(data[0].img);
  const imgRef = useRef(null); 

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [currentImg]);

  return (
    <div className="w-full md:flex items-center justify-center gap-2">
      {/* Left Image Section */}
      <div className="w-full md:w-[50%] h-[40vh] sm:h-[80vh] p-2">
        <img
          ref={imgRef}
          className="h-full w-full object-center rounded-2xl object-cover"
          src={currentImg}
          alt="brand"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-[50%] h-[80vh] p-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="w-full h-[15%] border-b-[1px] flex items-center justify-start cursor-pointer"
            onMouseEnter={() => setCurrentImg(item.img)}
          >
            <h2 className="text-[2rem] sm:text-[1.5rem] md:text-[2rem]">
              {item.name}
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
