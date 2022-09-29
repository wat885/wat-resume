import React from "react";

function Portfolio() {
  return (
    <>
      <h2 className="font-[400]  text-2xl leading-[38px]   text-[#14279B] lg:text-4xl text-center mt-[75px] mb-[60px] " id="portfolio">
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
            src="img/Ellipse 6 (1).png"
            className="absolute left-[2.5%] z-[-1] top-7"
          ></img>

          <div className="mt-[29px] ml-[18px]">
            <img src="img/emojione_e-mail.png" className="inline"></img>
            <span className=" text-[#6C63FF]  font-[600] text-2xl leading-[30px]  ">
              Catagory
            </span>
          </div>

          <div className="w-4/5 mt-[20px] ml-[46px] ">
            <img src="img/Browse.PNG" alt="frontend" />
          </div>
        </div>

        {/* //box */}
        <div className="w-[347px] h-[280px] rounded-2xl m-3.5 shadow-[0_5px_26px_5px_rgba(0,0,0,0.17)] flex flex-col   bg-[#FFFFFF]  z-[-2] relative">
          <img
            src="img/Ellipse 6 (2).png"
            className="absolute left-[2.5%] z-[-1] top-7"
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
            <img src="img/web2.png" alt="frontend" />
          </div>
        </div>
        {/* //box */}
        <div className="w-[347px] h-[280px] rounded-2xl m-3.5 shadow-[0_5px_26px_5px_rgba(0,0,0,0.17)] flex flex-col   bg-[#FFFFFF]  z-[-2] relative">
          <img
            src="img/Ellipse 6 (3).png"
            className="absolute left-[2.5%] z-[-1] top-7"
          ></img>

          <div className="mt-[29px] ml-[18px] h-[51px]">
            <span className=" text-[#515153]  font-[600] text-2xl leading-[30px] ">
              Santic website
            </span>
          </div>

          <div className="w-4/5 mt-[20px] ml-[46px] ">
            <img src="img/web3.png" alt="frontend" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
