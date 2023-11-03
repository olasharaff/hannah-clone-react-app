import React from 'react'
import { Link } from 'react-router-dom';
import vanila from "../assets/img/Vanilla.svg";
import ebay from "../assets/img/Ebay.svg";
import steam from "../assets/img/Steam.svg";
import glare1 from "../assets/img/glare-1.svg";
import glare2 from "../assets/img/glare-2.svg";
import glare3 from "../assets/img/glare-3.svg";

export default function Features() {
  return (
    <section className="feature-main">
      <main className="max-w-6xl px-9 mx-auto py-9">
        <div className="flex lg:flex-nowrap flex-wrap mb-6  ">
          <div className="relative z-50 w-full">
            <h1 className="lg:text-8xl text-4xl text-white font-extrabold lg:max-w-lg max-w-md mb-8">
              Buy & Sell Gift Cards.
            </h1>
            <p className="text-7xl text-gradient-from-to mb-14 lg:whitespace-nowrap whitespace-normal">
              In Less than 5mins.
            </p>
            <div className="mb-6">
              <span className="lg:px-16 lg:py-5 lg:text-base px-6 py-3 text-sm bg-[#FFE6C4] rounded-full">
                <Link>Get Started</Link>
              </span>
            </div>
          </div>
          <div className="relative w-full lg:pb-1 pb-80 lg:mx-0 mx-4 lg:overflow-visible overflow-hidden">
            <img src={glare1} alt="" className="absolute lg:right-0 right-28" />
            <img
              src={glare3}
              alt=""
              className="absolute lg:right-40 lg:-top-2 top-0 "
            />
            <img
              src={vanila}
              alt=""
              className="lg:w-[350px] w-[250px] absolute lg:top-2 lg:right-0 left-32 z-40"
            />
            <img
              src={ebay}
              alt=""
              className="lg:w-[350px] w-[250px] absolute lg:bottom-14 lg:right-24 lg:left-0 top-10 left-11 z-30"
            />
            <img
              src={steam}
              alt=""
              className="lg:w-[350px] w-[250px] absolute lg:-bottom-7 lg:right-56 bottom-16 z-20"
            />
            <img src={glare2} alt="glare-3" className='absolute lg:bottom-52 lg:-left-16 -bottom-2 z-50' />
          </div>
        </div>
      </main>
    </section>
  );
}
