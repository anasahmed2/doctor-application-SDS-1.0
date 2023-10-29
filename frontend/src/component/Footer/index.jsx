import { Cross } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full text-white gredeant">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto md:w-full lg:w-64 text-center md:mx-0 lg:text-left">
          <div className="flex justify-center lg:text-left">
            <Cross className="mr-2 text-white" size={30} fill="#fff" />
            <p className="font-black text-white tracking-wider text-2xl">
              {" "}
              FIRST AID
            </p>
                  </div>
                  <p>Book your doctor's appointment now</p>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-teal-200 uppercase title-font">
              About
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Company
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Careers
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-teal-200 uppercase title-font">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Contact Support
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Help Resources
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Release Updates
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-teal-200 uppercase title-font">
              Platform
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Terms &amp; Privacy
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Pricing
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-teal-200 uppercase title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Send a Message
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  Request a Quote
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-teal-200">
                  +123-456-7890
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-gray-700 capitalize xl:text-center">
            © 2020 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;