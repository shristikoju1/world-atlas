import React from "react";
import Headers from "../UI/Headers";
import Footers from "../UI/Footers";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  console.log("AppLayout is rendering");
  return (
    <div>
      <Headers />
      <Outlet />
      <Footers />
    </div>
  );
};

export default AppLayout;
