import wallet from "../../assets/img/Wallet.svg"
import nairaleft from "../../assets/img/naira-icon-left.svg"
import nairaright from "../../assets/img/naira-icon-right.svg";
import toast from "../../assets/img/Toast.svg";
import handbitcoin from "../../assets/img/hand-bitcoin.svg"
import mookup from "../../assets/img/Mockup Images.svg"
import { Link } from "react-router-dom";
import {FaGooglePlay} from "react-icons/fa"
import { GrAppleAppStore } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";
import {BsArrowRightShort} from "react-icons/bs"

export default function Wallet(){
    return (
      <section className="max-w-6xl px-9 mx-auto my-16">
        <div className="text-center lg:mb-20 mb-10">
          <h1 className="font-extrabold text-4xl mb-3">
            Get started with Hannah.
          </h1>
          <p className="text-base mb-3">
            Hannah allows you to convert your gift cards & crypto to cash
            instantly.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <div className="bg-[#FEF3E4] rounded-2xl lg:max-w-lg md:max-w-md w-full">
            <div className="p-8 ">
              <div className="relative flex flex-col ml-auto  items-end mb-12">
                <img src={toast} alt="" className="mb-5" loading="lazy" />
                <img
                  src={wallet}
                  alt="wallet"
                  loading="lazy"
                  className="lg:max-w-xs items-end text-right "
                />
                <img
                  src={nairaleft}
                  alt="naira-left"
                  loading="lazy"
                  className="lg:w-28 w-20 absolute -bottom-2"
                />
                <img
                  src={nairaright}
                  loading="lazy"
                  alt="nairaright"
                  className="lg:w-28 w-20 absolute lg:left-0 left-0 lg:top-20 top-12 "
                />
              </div>
              <div className="">
                <h1 className="font-bold lg:text-5xl text-4xl max-w-xs mb-9 ">
                  No Waiting, Get Paid Instantly.
                </h1>
                <p className="text-sm">
                  No more waiting for long hours to get paid. Hannah has
                  partnered with the fastest payment processors with instant
                  payout.
                </p>
                <div className="mt-12 mb-6 relative">
                  <button className="flex items-center whitespace-nowrap border-none bg-[#FFE6C4] text-black lg:text-base text-sm lg:px-10 lg:py-5 px-6 py-3  rounded-full">
                    <Link> Get Started </Link>{" "}
                    <BsArrowRightShort className="ml-3 lg:text-2xl text-base" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F0FE] rounded-2xl lg:max-w-lg md:max-w-md w-full">
            <div className="">
              <div className="relative top-0 w-full lg:-mb-[110px] -mb-[10px]">
                <img
                  loading="lazy"
                  src={handbitcoin}
                  alt="hand-bitcoin"
                  className="w-full rounded-t-2xl"
                />
              </div>
              <div className="px-8 pb-8">
                <h1 className="font-bold lg:text-5xl text-4xl max-w-xs mb-5 ">
                  Be In Complete Control.
                </h1>
                <p className="text-sm">
                  Buy & sell gift cards, deposit and trade crypto, pay bills and
                  move your money freely however you like with our virtual bank
                  account.
                </p>
                <div className="mt-12 mb-6">
                  <button className="flex items-center whitespace-nowrap border-none bg-white text-[#7234F5] lg:text-base text-sm lg:px-10 lg:py-5 px-6 py-3  rounded-full">
                    <Link> Get Started </Link>{" "}
                    <BsArrowRightShort className="ml-3 lg:text-2xl text-base" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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