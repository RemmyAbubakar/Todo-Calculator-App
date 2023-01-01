import React from "react";
import { FcCalculator } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { TiWeatherStormy } from "react-icons/ti";
import { GiNotebook } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    label: "Calculator App",
    link: "/",
    icon: FcCalculator,
  },
  {
    label: "Todo App",
    link: "/todo",
    icon: FcTodoList,
  },
  {
    label: "Notes App",
    link: "/noteapp",
    icon: GiNotebook,
  },
  {
    label: "Weather App",
    link: "/weatherapp",
    icon: TiWeatherStormy,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="h-screen w-80 fixed flex flex-col left-0 top-0 bg-neutral-900">
      <div className="flex-1 px-6 space-y-1 flex flex-col justify-center">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className={`flex items-center gap-4 text-xl text-white px-5 py-4 rounded-md cursor-pointer hover:bg-gray-600 duration-200 ${
              pathname === link.link ? "bg-gray-600" : ""
            }`}
          >
            {React.createElement(link.icon)}
            <h3 className="flex-1 uppercase">{link.label}</h3>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
