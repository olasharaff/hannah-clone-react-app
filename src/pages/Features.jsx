import React from 'react'
import { Link } from 'react-router-dom';
import vanila from "../assets/img/Vanilla.svg";
import ebay from "../assets/img/Ebay.svg";
import steam from "../assets/img/Steam.svg";
import glare1 from "../assets/img/glare-1.svg";
import glare2 from "../assets/img/glare-2.svg";
import glare3 from "../assets/img/glare-3.svg";
import image from "../assets/img/Image Group.svg"
import coins from "../assets/img/Coins.svg";
import iphone14pros from "../assets/img/iPhone 14 Pros.svg";
import mtn from "../assets/img/Ellipse 132.svg";
import spectranet from "../assets/img/Ellipse 133.svg";
import dstv from "../assets/img/Ellipse 134.svg";
import bet from "../assets/img/Ellipse 135.svg";
import ie from "../assets/img/Ellipse 136.svg";
import mookup from "../assets/img/Mockup Images.svg"
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";
import Slider from '../components/Slider';
import { BsArrowRightShort } from 'react-icons/bs';


export default function Features() {
  return (
    <section>
      {/* SECTION 1 */}
      <main className="feature-main">
        <div className="max-w-6xl px-9 mx-auto py-9">
          <div className="flex lg:flex-nowrap flex-wrap mb-6  ">
            <div className="relative z-50 w-full">
              <h1 className="lg:text-8xl text-4xl text-white font-extrabold lg:max-w-lg max-w-md mb-8">
                Buy & Sell Gift Cards.
              </h1>
              <p className="text-7xl text-gradient-from-to mb-14 lg:whitespace-nowrap whitespace-normal">
                In Less than 5mins.
              </p>
              <div className="mb-6">
                <button className="flex items-center whitespace-nowrap border-none bg-white text-[#7234F5] lg:text-base text-sm lg:px-10 lg:py-5 px-6 py-3  rounded-full">
                  <Link> Get Started </Link>{" "}
                  <BsArrowRightShort className="ml-3 lg:text-2xl text-base" />
                </button>
              </div>
            </div>
            <div className="relative w-full lg:pb-1 pb-80 lg:mx-0 mx-4 lg:overflow-visible overflow-hidden">
              <img
                loading="lazy"
                src={glare1}
                alt=""
                className="absolute lg:right-0 right-28"
              />
              <img
                loading="lazy"
                src={glare3}
                alt=""
                className="absolute lg:right-40 lg:-top-2 top-0 "
              />
              <img
                loading="lazy"
                src={vanila}
                alt=""
                className="lg:w-[350px] w-[250px] absolute lg:top-2 lg:right-0 left-32 z-40"
              />
              <img
                loading="lazy"
                src={ebay}
                alt=""
                className="lg:w-[350px] w-[250px] absolute lg:bottom-14 lg:right-24 lg:left-0 top-10 left-11 z-30"
              />
              <img
                loading="lazy"
                src={steam}
                alt=""
                className="lg:w-[350px] w-[250px] absolute lg:-bottom-7 lg:right-56 bottom-16 z-20"
              />
              <img
                loading="lazy"
                src={glare2}
                alt="glare-3"
                className="absolute lg:bottom-52 lg:-left-16 -bottom-2 z-50"
              />
            </div>
          </div>
        </div>
      </main>
      {/* SECTION 2 */}
      <div className=" feature-section2">
        <div className="max-w-6xl px-9 mx-auto flex justify-center lg:flex-nowrap flex-wrap py-8 gap-6">
          <div className="lg:my-36 my-6">
            <img src={image} alt="images-group " loading="lazy" />
          </div>
          <div className="lg:my-36 mb-24 px-2 lg:text-start text-center">
            <h1 className="text-white lg:max-w-lg lg:text-[70px] text-[50px]  font-extrabold">
              Choose How you Get Paid.{" "}
            </h1>
            <p className="text-gray-500 lg:max-w-md">
              {" "}
              Hannah offers you multiple payment options to choose from, so you
              control how you move your money.
            </p>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}

      <div className="px-6">
        <div className="max-w-6xl px-9 mx-auto border-4 border-[#7234F51A] rounded-lg relative bottom-24 bg-white">
          <div className="flex flex-col justify-center items-center text-center lg:py-32 py-5  px-9">
            <img src={coins} alt="coins" className="mb-3" loading="lazy" />
            <h1 className="lg:text-7xl text-3xl font-extrabold max-w-lg mb-6">
              Trade BTC, ETH, & USDT.
            </h1>
            <p className="max-w-sm lg:mb-3 mb-0">
              Deposit and sell your crypto assets smoothly, and get paid
              instantly.
            </p>
            <div className="mt-12 mb-6">
              <button className="flex items-center whitespace-nowrap border-none text-white bg-[#7234F5] lg:text-base text-sm lg:px-10 lg:py-5 px-6 py-3  rounded-full">
                <Link> Get Started </Link>{" "}
                <BsArrowRightShort className="ml-3 lg:text-2xl text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="max-w-6xl px-9 mx-auto py-6">
        <div className="flex flex-wrap gap-12 items-center justify-center">
          <div className="max-w-md">
            <img
              src={iphone14pros}
              alt="iphone 14 cols"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="max-w-lg flex flex-col lg:justify-normal justify-center lg:items-start items-center lg:text-start text-center">
            <h1 className="lg:text-5xl text-4xl font-bold mb-2">
              Crypto trading that works for you.
            </h1>
            <p className="max-w-sm mb-6">
              Delightful and beginner friendly trading experience that works for
              you.
            </p>
            <div className="mt-12 mb-6">
              <button className="flex items-center whitespace-nowrap border-none text-white bg-[#7234F5] lg:text-base text-sm lg:px-10 lg:py-5 px-6 py-3  rounded-full">
                <Link> Get Started </Link>{" "}
                <BsArrowRightShort className="ml-3 lg:text-2xl text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="px-6">
        <div className="max-w-6xl px-9 mx-auto border-4 border-[#7234F51A] rounded-lg bg-white my-10">
          <div className="flex flex-col justify-center items-center text-center px-9 lg:mb-20 mb-10">
            <div className="flex relative max-w-lg justify-center  bottom-4 lg:py-28 py-24 lg:mb-20 ">
              <img
                src={mtn}
                alt="mtn"
                loading="lazy"
                className="lg:max-w-[170px] max-w-[70px] absolute lg:right-36 right-10"
              />
              <img
                src={spectranet}
                alt="spectranet"
                loading="lazy"
                className="lg:max-w-[170px] max-w-[70px] absolute lg:right-[30px] lg:-bottom-6 -right-3 bottom-14"
              />
              <img
                src={dstv}
                alt="coins"
                loading="lazy"
                className="lg:max-w-[170px] max-w-[70px] absolute lg:bottom-2 lg:-left-16 -left-2 bottom-16"
              />
              <img
                src={bet}
                alt="coins"
                loading="lazy"
                className="lg:max-w-[170px] max-w-[70px] absolute lg:-bottom-6 bottom-14 lg:left-14 left-8"
              />
              <img
                src={ie}
                alt="coins"
                loading="lazy"
                className="lg:max-w-[170px] max-w-[70px] absolute lg:left-40 left-20 "
              />
            </div>
            <h1 className="lg:text-5xl text-3xl font-extrabold max-w-xl mb-6">
              Earn up to 2% Off on Bill Payments.
            </h1>
            <p className="max-w-sm mb-3">
              Stay active when you pay your bills with Hannah.
            </p>
            <div className="mt-12 mb-6">
              <button className="flex items-center whitespace-nowrap border-none text-white bg-[#7234F5] lg:text-base text-sm lg:px-10 lg:py-5 px-6 py-3  rounded-full">
                <Link> Get Started </Link>{" "}
                <BsArrowRightShort className="ml-3 lg:text-2xl text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Slider />

      {/* mookup image */}
      <div className="lg:mb-24 lg:mt-24 mb-20 mt-20">
        <img src={mookup} alt="mookup" loading="lazy" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Do what matters to you on any device.
        </h1>
        <p className="mb-9 text-sm text-center">
          Hannah is available on iOS, Android and on the Web.
        </p>
        <div className="flex lg:gap-7 gap-4 mb-6 lg:pb-5 justify-center items-center flex-wrap">
          <button className="flex items-center whitespace-nowrap border-2 border-gray-200 bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2  rounded-full">
            Android <FaGooglePlay className="ml-3 " />
          </button>
          <button className="flex items-center whitespace-nowrap border-2 border-gray-200 bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2 rounded-full">
            iOS <GrAppleAppStore className="ml-3" />
          </button>
          <button className="flex items-center whitespace-nowrap border-2 border-gray-200 bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2 rounded-full">
            Web <TfiWorld className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
