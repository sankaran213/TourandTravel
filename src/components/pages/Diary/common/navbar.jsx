import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-black transition">
      <ul className="text-center text-2xl p-20">
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800">
          <a
            href="/"
            spy={true}
            smooth={true}
            to="explore"
            onClick={handleClick}
          >
            Explore
          </a>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800">
          <a
            spy={true}
            smooth={true}
            to="recommendation"
            href="recommendation"
            onClick={handleClick}
          >
            Recomendation
          </a>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800">
          <a spy={true} smooth={true} href="blog" onClick={handleClick}>
            Blog
          </a>
        </li>
        {/* Added an anchor tag with href */}
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800">
          <a
            href="https://www.google.com"
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            Diary
          </a>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800">
          <a
            spy={true}
            smooth={true}
            to="login"
            href="/login"
            onClick={handleClick}
          >
            login
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 bg-black">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <a href="/explore" spy={true} smooth={true}>
                  Explore
                </a>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <a
                  spy={true}
                  smooth={true}
                  to="recomendation"
                  href="recommendation"
                >
                  Recomendation
                </a>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <a spy={true} smooth={true} href="action">
                  Action
                </a>
              </li>
              {/* Added an anchor tag with href */}
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diary
                </a>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <a spy={true} smooth={true} to="login" href="/login ">
                  login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
