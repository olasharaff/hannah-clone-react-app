import React, { useState } from "react";
import Headers from "../data/HeaderData";
import headerLogo from "../assets/img/footer-logo.svg";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

export default function Header() {

  
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeContent, setActiveContent] = useState(0);

   const handleActiveContent = (content) => {
    setActiveContent(content)
   }
   
   
   
 const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
 };

  
  return (
    <>
      <header className="bg-blue-800 text-white border-b border-gray-600">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-10 ">
          <div>
            <Link to="/">
              <img src={headerLogo} alt="Header-logo" />
            </Link>
          </div>
          <ul className="lg:flex items-center gap-7 hidden">
            {Headers.map((items, index) => (
              <li
                key={index}
                className={`text-sm text-white font-semibold ${
                  activeContent === index ? "text-gray-400" : ""
                }`}
                onClick={() => handleActiveContent(index)}
              >
                <Link to={items.to}>{items.text}</Link>
              </li>
            ))}
            <button className="px-8 py-3 bg-[#FFE6C4] text-black text-sm rounded-3xl">
              <Link to="/register" target="_blank">Create an account</Link>
            </button>
          </ul>

          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </nav>
        <div className="">
          {isMenuOpen && (
            <div className="sticky top-19 left-0 w-full h-full  bg-blue-800 z-50">
              <ul className="flex flex-col items-center justify-center gap-10 pt-6">
                {Headers.map((items, index) => (
                  <li
                    key={index}
                    className={`text-sm text-white font-semibold  ${
                      activeContent === index ? "text-gray-400" : ""
                    }`}
                    onClick={() => handleActiveContent(index)}
                  >
                    <Link to={items.to}>{items.text}</Link>
                  </li>
                ))}
                <button className="px-8 py-3 bg-[#FFE6C4] text-black text-sm rounded-3xl mt-1">
                  <Link to="/register">Create an account</Link>
                </button>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
