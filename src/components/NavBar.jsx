import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="">
        <ul className="flex justify-evenly bg-black h-16 text-white items-center">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/todo">
            <li>Todo App</li>
          </Link>
          <Link to="/noteapp">
            <li>Note App</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
