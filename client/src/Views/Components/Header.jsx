// components/Header.jsx
import React from "react";

const Header = ({ text = "", align = ""}) => {
  return (
    <h1 className={`!text-cyan-300 !font-bold !font-proxima-nova text-[1.5em] sm:text-[2em] md:text-[2.5em] lg:text-[3em] xl:text-[3.5em] text-${align} p-4`}>
      {text}
    </h1>
  );
};

export default Header;
