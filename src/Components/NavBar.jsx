import React, { useContext } from "react";
import contents from "../assets/context";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const NavBar = () => {
  const { mode, theme } = useContext(contents);
  return (
    <nav className="w-full flex fixed z-50 justify-between items-center p-3 bg-white shadow-shadow-light text-black dark:shadow-shadow-dark dark:text-white dark:bg-gray-700 ">
      <h2 className="font-medium text-base">Where in the World?</h2>
      <div
        className="flex  items-center p-3 font-medium space-x-2 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-slate-400"
        onClick={mode}
      >
        {theme === "light" ? (
          <FaRegMoon className="text-lg" />
        ) : (
          <FaMoon className="text-lg" />
        )}
        <span className="hidden md:block text-base">{theme} theme</span>
      </div>
    </nav>
  );
};

export default NavBar;
