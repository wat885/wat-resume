import React from "react";

import catagory from "../../src/img/undraw_Wireframing_re_q6k6 1.png";
import Ellipse61 from "../../src/img/Ellipse 6 (1).png";
import Ellipse62 from "../../src/img/Ellipse 6 (2).png";
import Ellipse63 from "../../src/img/Ellipse 6 (3).png";
import emojione from "../../src/img/emojione_e-mail.png";
import web1 from "../../src/img/Browse.PNG";
import web2 from "../../src/img/web2.png";
import web3 from "../../src/img/web3.png";

function Portfolio() {
  return (
    <>
      <h2
        className="font-[400]  text-2xl leading-[38px]   text-[#14279B] lg:text-4xl text-center mt-[75px] mb-[60px] "
        id="portfolio"
      >
        My <span className="font-[600]">Portfolio</span>
      </h2>

      <div
        className="container flex flex-wrap mx-auto justify-center
       lg:justify-between
           "
      >
        {/* //box */}
        <div className="w-[347px] h-[280px] rounded-2xl m-3.5 shadow-[0_5px_26px_5px_rgba(0,0,0,0.17)] flex flex-col   bg-[#FFFFFF]  z-[-2] relative ">
          <img
            src={Ellipse61}
            className="absolute left-[2.5%] z-[-1] top-7"
            alt="catagory"
          ></img>

          <div className="mt-[29px] ml-[18px]">
            <img src={emojione} className="inline" about=""></img>
            <span className=" text-[#6C63FF]  font-[600] text-2xl leading-[30px]  ">
              Catagory
            </span>
          </div>

          <div className="w-4/5 mt-[20px] ml-[46px] ">
            <img src={web1} alt="frontend" />
          </div>
        </div>

        {/* //box */}
        <div className="w-[347px] h-[280px] rounded-2xl m-3.5 shadow-[0_5px_26px_5px_rgba(0,0,0,0.17)] flex flex-col   bg-[#FFFFFF]  z-[-2] relative">
          <img
            src={Ellipse62}
            className="absolute left-[2.5%] z-[-1] top-7"
            alt="e-commerce"
          ></img>

          <div className="mt-[29px] ml-[18px] h-[51px]">
            <span className=" text-[#4581F7]  font-[600] text-2xl leading-[30px] ">
              E- Commerce
            </span>
            <p className="text-[#4581F7]  font-[600] text-sm leading-[30px] ml-[120px]">
              Website
            </p>
          </div>

          <div className="w-4/5 mt-[20px] ml-[46px] ">
            <img src={web2} alt="frontend" />
          </div>
        </div>
        {/* //box */}
        <div className="w-[347px] h-[280px] rounded-2xl m-3.5 shadow-[0_5px_26px_5px_rgba(0,0,0,0.17)] flex flex-col   bg-[#FFFFFF]  z-[-2] relative">
          <img
            src={Ellipse63}
            className="absolute left-[2.5%] z-[-1] top-7"
            alt="staticwebsite"
          ></img>

          <div className="mt-[29px] ml-[18px] h-[51px]">
            <span className=" text-[#515153]  font-[600] text-2xl leading-[30px] ">
              Santic website
            </span>
          </div>

          <div className="w-4/5 mt-[20px] ml-[46px] ">
            <img src={web3} alt="frontend" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
