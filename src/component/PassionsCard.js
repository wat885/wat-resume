import React from "react";

import frontendImg from "../../src/img/undraw_Wireframing_re_q6k6 1.png";
import backend from "../../src/img/undraw_Detailed_analysis_re_tk6j 1.png";
import database from "../../src/img/undraw_Design_process_re_0dhf 1.png";

function PassionsCard() {
  return (
    <>
      <h2
        className="font-[400]  text-2xl leading-[38px]   text-[#14279B] lg:text-4xl text-center mt-[75px] mb-[60px] "
        id="passions"
      >
        Additional <span className="font-[600]">passions</span>
      </h2>
      <div
        className="container flex flex-wrap mx-auto justify-center
       lg:justify-between
        relative   "
      >
        {/* //box */}
        <div className="w-[347px] h-[280px] rounded-2xl m-3.5 shadow-[0_5px_26px_5px_rgba(0,0,0,0.17)] flex flex-col justify-center items-center bg-[#FFFFFF]">
          <div>
            <img src={frontendImg} alt="frontendImg" />
          </div>

          <h3 className="font-[600] text-2xl leading-[38px] tracking-[.055em]">
            Front-End <span className="font-[400]">Developer</span>
          </h3>
          <p className="font-[400] text-lg leading-[27px] tracking-[.055em]">
            (React, Bootstrap, Tailwind)
          </p>
        </div>
        {/* //box */}
        <div className="w-[347px] h-[280px] rounded-2xl m-3.5 shadow-[0_5px_26px_5px_rgba(0,0,0,0.17)] flex flex-col justify-center items-center bg-[#FFFFFF]">
          <div>
            <img src={backend} alt="backend" />
          </div>

          <h3 className="font-[600] text-2xl leading-[38px] tracking-[.055em]">
            Back-End <span className="font-[400]">Developer</span>
          </h3>
          <p className="font-[400] text-lg leading-[27px] tracking-[.055em]">
            (NodeJS, Express)
          </p>
        </div>

        {/* //box */}
        <div className="w-[347px] h-[280px] rounded-2xl m-3.5 shadow-[0_5px_26px_5px_rgba(0,0,0,0.17)] flex flex-col justify-center items-center bg-[#FFFFFF]">
          <div>
            <img src={database} alt="database" />
          </div>

          <h3 className="font-[600] text-2xl leading-[38px] tracking-[.055em]">
            Database
          </h3>
          <p className="font-[400] text-lg leading-[27px] tracking-[.055em]">
            (MongoDB, SQL )
          </p>
        </div>
      </div>
    </>
  );
}

export default PassionsCard;
