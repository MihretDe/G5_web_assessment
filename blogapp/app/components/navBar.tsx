import React from "react";

const navBar = () => {
  return (
    <div>
      <div className="flex items-center justify-between my-3 mx-7">
        <img src="/assets/a2svLogo.svg" alt="logo" />
        <nav className="flex gap-10">
          <a
            href="/"
            className="text-[#565656] font-Montserrat font-semibold text-[20px] "
          >
            Home
          </a>
          <a
            href="/"
            className="text-[#565656] font-Montserrat font-semibold text-[20px] "
          >
            Teams
          </a>
          <a
            href="/"
            className="text-[#565656] font-Montserrat font-semibold text-[20px] "
          >
            Success Stories
          </a>
          <a
            href="/"
            className="text-[#565656] font-Montserrat font-semibold text-[20px] "
          >
            About Us
          </a>
          <a
            href="/"
            className="text-[#264FAD] font-Montserrat font-semibold text-[20px] underline "
          >
            Blogs
          </a>
          <a
            href="/"
            className="text-[#565656] font-Montserrat font-semibold text-[20px] "
          >
            Get Involved
          </a>
        </nav>
        <nav className="flex items-center gap-6">
          <a
            href="/"
            className="text-[#3C3C3C] font-Montserrat font-bold text-[20px] "
          >
            Login
          </a>
          <div className="border border-solid w-[160px] h-[59px] rounded-lg bg-[#264FAD] flex items-center justify-center">
            <a
              href="/"
              className=" font-Montserrat font-bold text-[20px] text-[#FFFFFF] text-center"
            >
              Donate
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default navBar;
