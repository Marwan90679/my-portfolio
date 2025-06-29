import React from "react";
import { RxBorderDashed } from "react-icons/rx";
import { TbArrowDownRight } from "react-icons/tb";
import Logo from "../Logo";
import { Link } from "react-scroll";
import pdf from '../../assets/Resume-marwan.pdf'
const Navbar = () => {
  const navlinks = (
    <div className="flex flex-col lg:flex-row lg:gap-8 cursor-pointer"> {/* This div groups the li elements */}
      <li>
        <Link to="about" smooth={true} duration={100} className="cursor-pointer">
          About Me
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={100} className="cursor-pointer">
          Skills
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={100} className="cursor-pointer">
          Projects
        </Link>
      </li>
      <li> {/* Added Contact link here to match all sections */}
        <Link to="contact" smooth={true} duration={100} className="cursor-pointer">
          Contact
        </Link>
      </li>
    </div>
  );
  return (
    <div className="bg-[#FFE7D6]  sticky top-0 z-50 border-b md:rounded-t-xl lg:border-b-4 md:border-b-2 w-full py-3 ">
      <nav className=" flex items-center justify-between px-4  ">
        {/* Left Section */}
        <div className="flex items-center md:gap-6">
          {/* Hamburger for mobile only */}
          <div className="lg:hidden dropdown ">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="drop-shadow-2xl bg-[#FFE7D6] menu menu-sm dropdown-content shadow-md rounded-box z-10 mt-3 w-52 p-2 "
            >
              {navlinks}
              <li>
               <a href={pdf}> <button className="btn bg-[#9c8371] text-white">
                  Download Resume
                </button></a>
              </li>
            </ul>
          </div>

          {/* Logo */}
         <Logo></Logo>

          <span className="border-l-2 border-dashed ml-3"></span>
        </div>

        {/* Centered UL */}
        <ul className="kanit hidden lg:flex gap-4 absolute left-1/2 transform -translate-x-1/2">
          {navlinks}
        </ul>

        {/* Right Button */}
        <div className="hidden lg:block ">
         <a href={pdf}> <button className="kanit cursor-pointer px-2 py-2 hover:text-white hover:bg-black rounded-full border">
         Download Resume
       </button></a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
