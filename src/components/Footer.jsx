import React from "react";
import footer from "../assets/img/footer-logo.svg";
import * as Fa from 'react-icons/fa'
import {GrAppleAppStore} from 'react-icons/gr'
import { Link } from "react-router-dom";

export default function Footer() {
  
  return (
    <footer className="max-w-6xl mx-auto px-6 mb-9 mt-5">
      <div className="flex lg:text-none lg:justify-between justify-center mb-8 flex-wrap w-full">
        <div className="lg:max-w-[350px] max-w-sm flex lg:justify-normal lg:text-start text-center justify-center flex-col mb-6 ">
          <div className="footer-logo">
            <img
              src={footer}
              alt="footer-logo"
              loading="lazy"
              className="lg:mb-6 mb-2 lg:w-[100px] text-center"
            />
          </div>
          <h1 className="lg:text-lg text-md">
            Hannah allows you to convert your gift cards & crypto to cash
            instantly.
          </h1>
        </div>
        <div className="flex lg:gap-12 gap-5 flex-wrap ">
          <div className=" lg:w-32 w-24">
            <h1 className="font-semibold lg:mb-6 mb-3">Features</h1>
            <ul className="lg:text-sm text-xs">
              <li className="mb-3">
                <Link to="/">Buy Gift cards</Link>
              </li>
              <li className="mb-3">
                <Link to="/">Sell Gift cards</Link>
              </li>
              <li className="mb-3">
                <Link to="/">Trade Crypto</Link>
              </li>
              <li className="mb-3">
                <Link to="/">Pay Bills</Link>
              </li>
            </ul>
          </div>
          <div className=" lg:w-32 w-24">
            <h1 className="font-semibold lg:mb-6 mb-3">Company</h1>
            <ul className="lg:text-sm text-xs">
              <li className="mb-3">
                <Link to="/about">About</Link>
              </li>
              <li className="mb-3">
                <Link to="/404">Blog</Link>
              </li>
            </ul>
          </div>
          <div className=" lg:w-32 w-24">
            <h1 className="font-semibold lg:mb-6 mb-3">Legal</h1>
            <ul className=" lg:text-sm text-xs">
              <li className="mb-3">
                <Link to="/term">Terms</Link>
              </li>
              <li className="mb-3 w-40">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mb-3">
                <Link to="/aml-policy">AML Policy</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-32 w-24">
            <h1 className="font-semibold lg:mb-6 mb-3">Support</h1>
            <ul className="lg:text-sm text-xs">
              <li className="mb-3">
                <Link to="/404">FAQs</Link>
              </li>
              <li className="mb-3">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <attribution className="flex lg:justify-between items-center flex-wrap justify-center text-center">
        <div>
          <p>© 2023 Hannah Technologies, Inc.</p>
        </div>
        <div className="flex items-center justify-center flex-wrap lg:ml-4 ml-4 lg:gap-7 gap-4 main-attribute">
          <div className="flex gap-7 mb-0  sec-attribute">
            <Fa.FaInstagram className="text-gray-500 text-xl hover:text-pink-400 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />{" "}
            <Fa.FaTwitter
              className="text-gray-500 text-xl hover:text-black hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer"
              cursor-pointer
            />{" "}
            <Fa.FaWhatsapp className="text-gray-500 text-xl hover:text-green-600 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />{" "}
            <Fa.FaFacebook className="text-gray-500 text-xl hover:text-blue-600 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />
          </div>
          <div className="flex lg:gap-2 gap-4 third-attribute">
            <button className="flex items-center whitespace-nowrap lg:text-base text-sm bg-black text-white lg:px-8 lg:py-4 px-5 py-3  rounded-full">
              Android <Fa.FaGooglePlay className="ml-3 cursor-pointer" />
            </button>
            <button className="flex items-center whitespace-nowrap lg:text-base text-sm bg-black text-white lg:px-8 lg:py-4 px-5 py-3 rounded-full">
              iOS <GrAppleAppStore className="ml-3 cursor-pointer" />
            </button>
          </div>
        </div>
      </attribution>
    </footer>
  );
}
