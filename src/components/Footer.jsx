import React from "react";
import footer from "../assets/img/footer-logo.svg";
import * as Fa from 'react-icons/fa'
import {GrAppleAppStore} from 'react-icons/gr'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 mb-9 mt-5">
      <div className="flex lg:text-none lg:justify-between items-center justify-center mb-8 flex-wrap">
        <div className="max-w-[350px]">
          <img src={footer} alt="footer-logo" className="mb-6" />
          <h1 className="text-lg ">
            Hannah allows you to convert your gift cards & crypto to cash
            instantly.
          </h1>
        </div>
        <div className="flex lg:gap-12 gap-5 flex-wrap items-center">
          <div className="lg:my-0 my-3">
            <h1 className="font-semibold mb-3">Features</h1>
            <ul className="space-y-4 text-sm">
              <li>Buy Gift cards</li>
              <li>Sell Gift cards</li>
              <li>Trade Crypto</li>
              <li>Pay Bills</li>
            </ul>
          </div>
          <div className="lg:my-0 my-3">
            <h1 className="font-semibold mb-3">Company</h1>
            <ul className="space-y-4 text-sm">
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="lg:my-0 my-3">
            <h1 className="font-semibold mb-3">Legal</h1>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/term">Terms</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/aml-policy">AML Policy</Link>
              </li>
            </ul>
          </div>
          <div className="lg:my-0 my-3">
            <h1 className="font-semibold mb-3">Support</h1>
            <ul className="space-y-4 text-sm">
              <li>FAQs</li>
              <li>Contact</li>
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
