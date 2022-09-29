import React from "react";
import { useState } from "react";

function Navbar() {
  const [isopen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between py-[21px]">
        <div className="flex items-center">
          <h1 className="basis-3/12   text-2xl leading-[38px] tracking-[.205em] text-[#002265]  ">
            <span className="font-[700] ">Nueng</span>Developer
          </h1>
        </div>

        <div className=" justify-between items-center basis-6/12 font-[400]  text-2xl leading-[38px] lg:flex hidden text-[#212121]">
          <a href="#about">About</a>
          <a href="#passions">Passions</a>
          <a href="#portfolio">Portfolio</a>
          <a
            href="#contact"
            className="bg-[#608AF5] px-[18px] py-[10px] rounded-[10px] text-[#FFFFFF]"
          >
            Contact Me
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            className="space-y-2"
            onClick={() => {
              console.log("click");
              setIsOpen(!isopen);
            }}
          >
            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
          </button>
        </div>
      </nav>
      {isopen === true ? (
        <div className="  flex flex-col items-center font-[400]  text-2xl leading-[38px] ">
          <a href="#about">About</a>
          <hr />
          <a href="#passions">Passions</a>
          <hr />
          <a href="#portfolio">Portfolio</a>
          <hr />
          <a href="#contact">Contact Me</a>
          <hr />
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
