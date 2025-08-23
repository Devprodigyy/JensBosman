import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white px-3 bg-[black] py-12 md:px-[5vw]">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section - Menu */}
        <div className="flex flex-col gap-3 text-3xl md:text-4xl font-semibold text-gray-400">
          <a href="#" className="hover:text-white">WORK</a>
          <a href="#" className="hover:text-white">ABOUT</a>
          <a href="#" className="hover:text-white">BRANDS</a>
          <a href="#" className="hover:text-white">STICKY STUFF</a>
        </div>

        {/* Middle Section - Info */}
        <div className="flex flex-col gap-8">
          <div className="uppercase">
            <h3 className="text-sm font-bold text-white">Devprodigy</h3>
            <p className="text-gray-400">Kunalwatulkar1@gmail.com</p>
            <p className="text-gray-400">84462 66168</p>
          </div>

          <div className="uppercase">
            <h3 className="text-sm font-bold text-white">ADDRESS</h3>
            <p className="text-gray-400">Nagpur -</p>
            <p className="text-gray-400">Maharashtra, India</p>
          </div>
        </div>

        {/* Right Section - Social & Copyright */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-bold text-white">SOCIAL</h3>
            <a href="https://www.instagram.com/devprodigy__/" className="block text-gray-400 hover:text-white">INSTAGRAM</a>
            <a href="https://www.linkedin.com/in/devprodigy/" className="block text-gray-400 hover:text-white">LINKEDIN</a>
          </div>

          <div className="text-gray-400 text-sm">
            <p>COPYRIGHT 2025</p>
            <p>DEVPRODIGY</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
