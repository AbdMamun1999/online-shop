import React, { useState } from "react";
import { FaBars, FaTimes ,FaSearch} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../images/logos/logo.png"

// type Props = {}

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <img src={logo} alt="" width="150" height="50"/>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaTimes></FaTimes> : <FaBars></FaBars>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 uppercase text-sm lg:font-bold">
              <li className="text-gray-600 hover:text-blue-600">
                {/* <input type="text" className="border-2 outline-none rounded-md px-1 py-2 border-black" />
                          <button></button> */}
                <form>
                  <div className="relative">
                    <input
                      type="search"
                      className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-none"
                      placeholder="Search..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-0 bottom-1  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
                    >
                     <FaSearch className="text-black"></FaSearch>
                    </button>
                  </div>
                </form>
              </li>
              <li className="text-gray-600 hover:text-blue-600 ">
                <a href="javascript:void(0)">Dashboard</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Blog</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Contact US</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
