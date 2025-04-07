import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import Sidebar from "./Sidebar";
import MegaMenu from "./MegaMenu";
import CustomButton from "./CustomButton";

import { navLinks } from "../constants";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="w-full relative">
      <header className="w-full bg-gradient-to-r from-dark-navy via-dark-navy  to-deep-blue py-4 font-family-Poppins">
        <div className="2xl:container 2xl:mx-auto xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3">
          <div className="flex items-center justify-between gap-10">
            <img
              src="/logo.svg"
              alt="logo"
              className="object-contain  max-md:max-w-32"
            />
            <nav className="max-lg:hidden">
              <ul className=" flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="relative group text-[#CFCFCF] lg:text-xl"
                  >
                    {link.hasDropdown ? (
                      <button
                        type="button"
                        onClick={() => {
                          toggleDropdown();
                          setActiveLink(link.title);
                        }}
                        className={`flex items-center gap-1 transition-all duration-300 cursor-pointer ${
                          activeLink === link.title ? "font-bold" : ""
                        }`}
                      >
                        {link.title}
                        <span
                          className={`transform transition duration-300 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-light-blue transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setActiveLink(link.title)}
                        className={`transition-all duration-300  ${
                          activeLink === link.title ? "font-bold" : ""
                        }`}
                      >
                        {link.title}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-light-blue transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <CustomButton
              extraStyle="bg-gradient-to-r from-navy-blue via-light-blue to-navy-blue border-[1px] border-light-blue max-lg:hidden py-2"
              title="+234 818 444 1404"
              handleClick={() => {}}
              icon={
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              }
            />
            <button
              className="block z-10 lg:hidden text-[#CFCFCF]"
              type="button"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-primary-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>{dropdownOpen && <MegaMenu />}</AnimatePresence>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Header;
