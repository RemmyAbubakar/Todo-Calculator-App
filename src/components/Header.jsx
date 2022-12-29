import React from "react";
import { CgDarkMode } from "react-icons/cg";
import { CiLight } from "react-icons/ci";

function Header({ handleToggleDarkMode, darkMode }) {
  return (
    <div className="header flex items-center justify-between mb-10">
      <h1
        className={`font-bold text-4xl mt-10 ${
          darkMode ? "dark:text-white" : ""
        }`}
      >
        Notes
      </h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className={
          darkMode
            ? "save bg-[#e1e1e1] border-none rounded-[15px] p-[5px_10px_5px_10px] hover:bg-[#ededed] hover:cursor-pointer mt-10"
            : ""
        }
      >
        {darkMode ? (
          <CiLight size={35} />
        ) : (
          <CgDarkMode size={35} className="hover:cursor-pointer mt-10" />
        )}
      </button>
    </div>
  );
}

export default Header;
