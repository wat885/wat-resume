import React from "react";

import git from "../../src/img/Git.png";
import Instagram from "../../src/img/Instagram.png";
import Email from "../../src/img/Email.png";
import telpon from "../../src/img/telpon.png";

function Contact() {
  return (
    <>
      <h2
        className="font-[400]  text-2xl leading-[38px]   text-[#14279B] lg:text-4xl text-center mt-[75px] "
        id="contact"
      >
        Contact <span className="font-[600]">Me</span>
      </h2>

      <div
        className="container flex flex-wrap mx-auto justify-center
       lg:justify-between
           "
      >
        {/* //icon contactme */}

        <a
          className="w-[240px] h-[236px]  flex flex-col justify-center items-center basis-full lg:basis-1/4   mt-[70px]"
          href="https://github.com/wat885"
        >
          <div>
            <img src={git} alt="git" />
          </div>

          <p className="font-[500] leading-[52px]   text-[#3F3D56] text-4xl tracking-[.055em] mt-[30px]">
            Github
          </p>
        </a>

        {/* //icon contactme */}
        <a
          className="w-[240px] h-[236px]  flex flex-col justify-center items-center basis-full lg:basis-1/4 mt-[70px]"
          href="#"
        >
          <div>
            <img src={Instagram} alt="Instagram" />
          </div>

          <p className="font-[500] leading-[52px]   text-[#3F3D56] text-4xl tracking-[.055em] mt-[30px]">
            Instagram
          </p>
        </a>
        {/* //icon contactme */}
        <button
          className="w-[240px] h-[236px]  flex flex-col justify-center items-center basis-full lg:basis-1/4   mt-[70px]"
          href="#"
          onClick={() => alert("twatcharin90@gmail.com")}
        >
          <div>
            <img src={Email} alt="Email" />
          </div>

          <p className="font-[500] leading-[52px]   text-[#3F3D56] text-4xl tracking-[.055em] mt-[30px]">
            Email
          </p>
        </button>

        <button
          className="w-[240px] h-[236px]  flex flex-col justify-center items-center basis-full lg:basis-1/4   mt-[70px]"
          href="#"
        >
          <div>
            <img src={telpon} alt="telpon" />
          </div>

          <p className="font-[500] leading-[52px]   text-[#3F3D56] text-4xl tracking-[.055em] mt-[30px]">
            Telp
          </p>
        </button>
      </div>
    </>
  );
}

export default Contact;
