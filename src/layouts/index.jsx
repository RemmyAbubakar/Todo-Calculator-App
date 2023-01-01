import React from "react";
import { Outlet } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <Sidebar/>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
