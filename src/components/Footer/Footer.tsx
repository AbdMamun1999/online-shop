import React from "react";
import {
  FaFacebook,
  FaTwitterSquare,
  FaGithub,
  FaInstagramSquare,
  FaDribbbleSquare,
  FaDiscord,
} from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-2 justify-items-center gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Company
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Brand Center
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Help center
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Discord Server
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Legal
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Download
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                iOS
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Android
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Windows
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                MacOS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6 px-4 bg-gray-100 dark:bg-gray-700 ">
        <div className="md:flex md:items-center md:justify-between w-4/5 mx-auto">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2022 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaDiscord></FaDiscord>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaDribbbleSquare></FaDribbbleSquare>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
