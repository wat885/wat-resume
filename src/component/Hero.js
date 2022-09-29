import React from "react";
// import logo from '../logo.png';

import Ellipse1 from "../../src/img/Ellipse 1.png";
import Ellipse2 from "../../src/img/Ellipse 2.png";
import Ellipse3 from "../../src/img/Ellipse 3.png";
import HeroImg from "../../src/img/heroImg 1.png";

function Hero() {
  return (
    <div
      className=" flex flex-row-reverse items-center justify-center flex-wrap relative"
      id="about"
    >
      <img
        src={Ellipse1}
        className="absolute left-[2.5%] top-[-5%]"
        alt="Ellipse 1"
      ></img>
      <img
        src={Ellipse2}
        className="absolute hiden  lg:left-[25%] lg:bottom-[-15%] "
        alt="Ellipse 2"
      ></img>
      <img
        src={Ellipse3}
        className="absolute right-[-5%]  lg:right-[5%] lg:top-[15%] "
        alt="Ellipse 3"
      ></img>
      <div className="basis-6/6 lg:basis-3/6 flex justify-center">
        <img src={HeroImg} alt="HeroImg" />
      </div>
      <div className="basis-6/6 lg:basis-3/6">
        <div className=" font-[400]  text-2xl leading-[45px] tracking-[.0005em] lg:text-4xl lg:leading-[53px]">
          <h2>Hi !</h2>
          <h2 className="font-[700]">I’m Watcharin.</h2>
          <h2 className="font-[700]">a Full Stack Developer</h2>
        </div>

        <p className="font-[400] text-1xl leading-[28px] tracking-[.015em] mt-[35px] lg:text-2xl lg:leading-[34px] ">
          Front-End developer based in Bangkok, Thailand I’am coding with a
          clean and beautiful problem solving in mind.
        </p>
      </div>
    </div>
  );
}

export default Hero;
