import React from "react";

const Footer = () => {
  return (
    <div className="mx-6 mr-16 mt-20  ">
      <hr></hr>
      <div className="flex gap-24 mr-36 my-12">
        <img src="/assets/background-complete.svg" alt="footer image " />
        <div className="min-w-[170px]">
          <p className="font-montserrat text-black font-semibold text-2xl mb-8 ">
            Get involved in improving tech education in Africa!
          </p>
          <div className="border border-solid bg-[#264FAD] flex items-center justify-center max-w-[268px] h-[70px] rounded-[10px]">
            <a
              href="/"
              className="text-white font-montserrat font-bold text-[20px]  "
            >
              Support Us
            </a>
          </div>
        </div>
        <div className="min-w-[170px]">
          <p className="font-montserrat font-semibold text-[22px] text-black mb-4">
            Links
          </p>
          <ul>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">Home</a>
            </li>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">Success stories</a>
            </li>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">About Us</a>
            </li>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">Get Involved</a>
            </li>
          </ul>
        </div>
        <div className="min-w-[170px]">
          <p className="font-montserrat font-semibold text-[22px] text-black mb-4">
            Teams
          </p>
          <ul>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">Board Members</a>
            </li>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">Advisors/Mentors</a>
            </li>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">Executives</a>
            </li>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">Staffs</a>
            </li>
          </ul>
        </div>
        <div className="min-w-[170px]">
          <p className="font-montserrat font-semibold text-[22px] text-black mb-4">
            Blogs
          </p>
          <ul>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">Recent Blogs</a>
            </li>
            <li className="font-montserrat font-light  text-[22px] text-black mb-3">
              <a href="/">New Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-between my-9">
        <div className="flex gap-3">
          <img src="/assets/footerIcon.svg" alt="icon" />
          <p className="font-montserrat font-light text-[20px] text-[#0F0F0F]">
            2020 Africa to Silicon Valley, Inc. All right reserved.
          </p>
        </div>
        <div className="flex gap-10">
            <a href="/"><img src="/assets/twitter.svg"></img></a>
            <a href="/"><img src="/assets/facebook.svg"></img></a>
            <a href="/"><img src="/assets/youtube.svg"></img></a>
            <a href="/"><img src="/assets/linkdin.svg"></img></a>
            <a href="/"><img src="/assets/instagram.svg"></img></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
