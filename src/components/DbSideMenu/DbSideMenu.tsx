import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAngleLeft,
  FaRegIdBadge,
  FaSearch,
  FaRegFolder,
  FaRegSun,
  FaRegUser,
  FaDailymotion,
  FaEnvelope,
  FaCommentAlt,
  FaHospitalAlt,
} from "react-icons/fa";

const DbSideMenu = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);
  return (
    <div
      className={`${
        open ? " w-72" : "w-20"
      } duration-300 h-[89vh] p-5 pt-8 bg-dark-purple relative`}
    >
      <FaAngleLeft
        onClick={handleOpen}
        className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 border-dark-purple rounded-full bg-white ${
          !open && "rotate-180"
        }`}
      ></FaAngleLeft>
      <div className="flex gap-x-4 items-center">
        <FaRegIdBadge
          className={`w-7 h-7 flex-shrink-0 cursor-pointer duration-500 text-white`}
        ></FaRegIdBadge>
        <h1
          className={`text-white origin-left font-medium text-xl   ${
            !open && "scale-0"
          } duration-300`}
        >
          Designer
        </h1>
      </div>
      <ul className="mt-3">
        <li>
          <Link
            to="/dashboard/usersprofile"
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md`}
          >
            <span className="flex-shrink-0">
              <FaDailymotion className="w-6 h-6" />
            </span>
            <span className={`${!open && "scale-0"} origin-left duration-300 `}>
              Dashboard
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DbSideMenu;
