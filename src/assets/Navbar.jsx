import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("home");

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Education" },
  ];

  return (
    <div className="fixed top-0 bg-[#000300] flex justify-between items-center h-20 w-full px-8 md:px-24 text-white z-100">
      {/* Logo */}
      <h1 className="w-full text-2xl md:text-3xl font-bold text-white gt">
        YASH J.
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.text.toLowerCase())}
            className={`text-zinc-500 p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-white hover:translate-y-[-1px] hover:scale-101 inter relative
              ${active === item.text.toLowerCase() ? "active-link" : ""}
            `}
          >
            <a href={`#${item.text.toLowerCase()}`}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] text-center h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 py-[25vh] z-100"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] py-[25vh] z-100"
        }
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setNav(false);
              setActive(item.text.toLowerCase());
            }}
            className={`p-4 hover:text-white duration-300 text-zinc-500 cursor-pointer hover:translate-x-1 relative
              ${active === item.text.toLowerCase() ? "active-link" : ""}
            `}
          >
            <a href={`#${item.text.toLowerCase()}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
