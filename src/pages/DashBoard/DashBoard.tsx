import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DbSideMenu from "../../components/DbSideMenu/DbSideMenu";
// icons
import { FaAngleLeft, FaRegIdBadge,FaSearch,FaRegFolder ,FaRegSun,FaRegUser,FaDailymotion,FaEnvelope,FaCommentAlt,FaHospitalAlt} from "react-icons/fa";


const DashBoard = () => {

  return (
    <div className="flex">
      <DbSideMenu></DbSideMenu>
      <div className="p-7 text-2xl font-semibold flex-1">
        <h1>Home Page</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
