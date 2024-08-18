import { useState } from "react";
import NavbarLogo from "../Assets/Logo";
import Switcher from "./Switcher";
import ChevronDownIcon from "../Assets/ChevronDown";
import DropdownLink from "../components/InfoBoxFunctional";

const TealArrow = () => {
  var width = window.innerWidth;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M0.555575 10.1617C0.165058 10.5522 0.16507 11.1854 0.555602 11.5759C0.946133 11.9664 1.5793 11.9664 1.96982 11.5759L0.555575 10.1617ZM12 1.13108C12 0.5788 11.5523 0.131093 11 0.131104L1.99998 0.131273C1.4477 0.131283 0.99999 0.579007 1 1.13129C1.00001 1.68358 1.44773 2.13128 2.00002 2.13127L10 2.13112L10.0002 10.1311C10.0002 10.6834 10.4479 11.1311 11.0002 11.1311C11.5525 11.1311 12.0002 10.6834 12.0002 10.1311L12 1.13108ZM1.96982 11.5759L11.7071 1.8382L10.2929 0.42401L0.555575 10.1617L1.96982 11.5759Z"
        fill="url(#paint0_linear_54_745)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_54_745"
          x1="1.48749"
          y1="1.42156"
          x2="11.0419"
          y2="10.8406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0CC8E8" />
          <stop offset="1" stopColor="#2DEEAA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const NavLink = ({ text, href }) => {
  return (
    <a
      href={href}
      className="text-[16px] font-medium uppercase text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 transition duration-150 ease-in-out"
    >
      {text}
    </a>
  );
};

const links = [
  {
    text: "Product",
    href: "#products",
  },

  {
    text: "Team",
    href: "#team",
  },
  {
    text: "FAQ's",
    href: "#Faq",
  },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdown, setIsMobileDropdown] = useState(false);

  const toogle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="relative flex items-center justify-between sm:h-10 md:h-16 py-6 px-6 md:px-8 w-full dark:bg-[#111920]">
        <div className="flex items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              <NavbarLogo />
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          {links.map(function (link) {
            return (
              <NavLink
                key={Math.random().toString()}
                text={link.text}
                href={link.href}
              />
            );
          })}
        </div>
        <div className="relative hidden md:flex md:items-center ">
          <Switcher />
          <DropdownLink />
        </div>
        <div className="-mr-2 flex items-center md:hidden">
          <Switcher />
          <button
            type="button"
            onClick={() => toogle()}
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-white hover:text-gray-500 dark:bg-[#1B2731] focus:outline-none focus:bg-gray-100 focus:text-gray-500"
          >
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden px-2 pt-2 pb-4`}
      >
        {/* <a
          href="#research"
          className="block text-center text-black dark:text-white hover:text-teal-500 hover:shadow-lg px-6 py-3"
        >
          Research
        </a>
        <a
          href="#api"
          className="block text-center text-black dark:text-white hover:text-teal-500 hover:shadow-lg px-6 py-3"
        >
          API
        </a> */}
        <a
          href="#products"
          className="block text-center text-black dark:text-white hover:text-teal-500 hover:shadow-lg px-6 py-3"
        >
          Product
        </a>
        {/* <a
          href="#comapny"
          className="block text-center text-black dark:text-white hover:text-teal-500 hover:shadow-lg px-6 py-3"
        >
          Company
        </a> */}

        <a
          href="#team"
          className="block text-center text-black dark:text-white hover:text-teal-500 hover:shadow-lg px-6 py-3"
        >
          Team
        </a>
        <a
          href="#Faq"
          className="block text-center text-black dark:text-white hover:text-teal-500 hover:shadow-lg px-6 py-3"
        >
          FAQ's
        </a>
        <div className="relative w-full text-black dark:text-white">
          <button
            onClick={() => setIsMobileDropdown(!isMobileDropdown)}
            className="flex items-center text-center  hover:text-teal-500 hover:shadow-lg px-6 py-3 mx-auto"
          >
            <span>Try Product</span>
            <ChevronDownIcon />
          </button>

          {isMobileDropdown && (
            <div className="absolute h-full top-14 w-full shadow-md">
              <a
                href="http://izzyai.com/"
                className="text-[16px] px-6 py-4 h-auto bg-white dark:bg-[#24303A] w-full flex justify-between items-center"
              >
                <span>IZZYAI</span>
                <TealArrow />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
