import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import ChevronUpGradientIcon from "../Assets/ChevronUpGradient";

const TealArrow = () => {
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

const DropdownList = () => {
  return (
    <div className="absolute w-[225px] h-full top-14 -left-[13px] dark:text-white">
      <a
        href="http://izzyai.com/"
        className="text-[16px] px-6 py-4 h-auto bg-white dark:bg-[#24303A] w-full flex justify-between items-center"
      >
        <span>IZZYAI</span>
        <TealArrow />
      </a>
    </div>
  );
};

const TryProductsButton = (props) => {
  return (
    <span className="inline-flex rounded-md shadow ml-2">
      <a
        {...props}
        className="inline-flex hover:cursor-pointer uppercase items-center px-4 py-2 border border-[#D6D6D6] dark:border-[#283642] text-base leading-6 font-medium rounded-none dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA] focus:outline-none focus:border-blue-700"
      >
        <span className="">Try Product</span>
        {<ChevronUpGradientIcon open={props.open} />}
      </a>
    </span>
  );
};

function DropdownLink(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  DropdownLink.handleClickOutside = () => {
    setShowDropdown(false);
  };

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
    >
      <TryProductsButton
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      />
      {showDropdown ? <DropdownList /> : null}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropdownLink.handleClickOutside,
};

export default onClickOutside(DropdownLink, clickOutsideConfig);
