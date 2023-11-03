import React, { useState } from "react";
import Headers from "../data/HeaderData";
import headerLogo from "../assets/img/footer-logo.svg";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

export default function Header2() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeContent, setActiveContent] = useState(0);
  
   const handleActiveContent = (index) => {
    setActiveContent(index)
   }
   

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  
  return (
    <>
      <header className="bg-white text-white border-b border-gray-600">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-10 ">
          <div>
            <Link to="/">
              <img src={headerLogo} alt="Header-logo" />
            </Link>
          </div>
          <ul className="lg:flex items-center gap-7 hidden">
            {Headers.map((items, index) => (
              <li key={index} className={`text-sm text-black font-semibold ${activeContent === index ? "text-gray-400" : "" }`} onClick={()=> handleActiveContent(index)}>
                <Link to={items.to}>{items.text}</Link>
              </li>
            ))}
            <button className="px-8 py-3 bg-[#FFE6C4] text-black text-sm rounded-3xl">
              Create an account
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
            <div className="fixed top-19 left-0 w-full h-full flex flex-col items-center justify-center bg-blue-800">
              <ul>
                {Headers.map((items, index) => (
                  <li key={index} className="red">
                    <Link to={items.to}>{items.text}</Link>
                  </li>
                ))}
              </ul>
              <button>Register</button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
