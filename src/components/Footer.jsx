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
          <img
            src={footer}
            alt="footer-logo"
            loading="lazy"
            className="lg:mb-6 mb-2 lg:w-[100px] text-center"
          />
          <h1 className="lg:text-lg text-md">
            Hannah allows you to convert your gift cards & crypto to cash
            instantly.
          </h1>
        </div>
        <div className="flex lg:gap-12 gap-5 flex-wrap ">
          <div className="lg:my-0 my-3 lg:w-32 w-40">
            <h1 className="font-semibold mb-6">Features</h1>
            <ul className="text-sm">
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
          <div className="lg:my-0 my-3 lg:w-32 w-40">
            <h1 className="font-semibold mb-6">Company</h1>
            <ul className="text-sm">
              <li className="mb-3">
                <Link to="/about">About</Link>
              </li>
              <li className="mb-3">
                <Link to="/404">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="lg:my-0 my-3 lg:w-32 w-40">
            <h1 className="font-semibold mb-6">Legal</h1>
            <ul className=" text-sm">
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
          <div className="lg:my-0 my-3 lg:w-32 w-40">
            <h1 className="font-semibold mb-6">Support</h1>
            <ul className="text-sm">
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
      <attribution className="flex lg:justify-between items-center flex-wrap justify-center">
        <div>
          <p>© 2023 Hannah Technologies, Inc.</p>
        </div>
        <div className="flex items-center justify-center flex-wrap ml-4 gap-7">
          <div className="flex gap-7 lg:my-0 my-4">
            <Fa.FaInstagram className="text-gray-500 text-xl" />{" "}
            <Fa.FaTwitter className="text-gray-500 text-xl" />{" "}
            <Fa.FaWhatsapp className="text-gray-500 text-xl" />{" "}
            <Fa.FaFacebook className="text-gray-500 text-xl" />
          </div>
          <div className="flex lg:gap-2 gap-4">
            <button className="flex items-center whitespace-nowrap bg-black text-white lg:px-8 lg:py-4 px-5 py-3  rounded-full">
              Android <Fa.FaGooglePlay className="ml-3" />
            </button>
            <button className="flex items-center whitespace-nowrap bg-black text-white lg:px-8 lg:py-4 px-5 py-3 rounded-full">
              iOS <GrAppleAppStore className="ml-3" />
            </button>
          </div>
        </div>
      </attribution>
    </footer>
  );
}
