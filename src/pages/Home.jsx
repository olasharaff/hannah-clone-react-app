import React, { useEffect, useState } from 'react'
import {HomeDatas1} from '../data/HomeData';
import {GrAppleAppStore} from 'react-icons/gr'
import { FaGooglePlay } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import heroImg from '../assets/img/iPhone 14 Pro.svg'
import GiftCard from '../components/sub-components/GiftCard';
import Wallet from "../components/sub-components/Wallet";


export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [sliderValue, setSliderValue] = useState(50);

  const [rateSettings, setRateSettings] = useState();
  const [isHowMuch, setIsHowMuch] = useState(0)

useEffect(() => {
  if (sliderValue <= 1) {
    const calculatedRate =  500;
    setRateSettings(calculatedRate);
  }  if (sliderValue > 1) {
    const calculatedRate = 520;
    setRateSettings(calculatedRate);
  }  if (sliderValue >= 5) {
    const calculatedRate = 580;
    setRateSettings(calculatedRate);
  }
   if (sliderValue > 20) {
     const calculatedRate = 800;
     setRateSettings(calculatedRate);
   }
   if (sliderValue > 50) {
     const calculatedRate = 830;
     setRateSettings(calculatedRate);
   }

  //  for How much you get in naira

   if (sliderValue === 1) {
     const calculatedRate = sliderValue * 500;
     setIsHowMuch(calculatedRate);
   }
   if (sliderValue >= 1) {
     const calculatedRate = sliderValue * 520;
     setIsHowMuch(calculatedRate);
   }
   if (sliderValue >= 5) {
     const calculatedRate = sliderValue * 580;
     setIsHowMuch(calculatedRate);
   }
   if (sliderValue > 20) {
     const calculatedRate = sliderValue * 800;
     setIsHowMuch(calculatedRate);
   }
   if (sliderValue > 50) {
     const calculatedRate = sliderValue * 830;
     setIsHowMuch(calculatedRate);
   }

   
}, [sliderValue]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  }
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }
  return (
    <main className="relative">
      <div className="bg-[#7234F5] home-style">
        <div className="max-w-6xl mx-auto px-6  flex ">
          {HomeDatas1.map((item, index) => (
            <div key={index} className="flex flex-wrap gap-2 mt-10">
              <div>
                <h1 className="text-white text-5xl font-bold mb-4">
                  {item.heroheader}
                </h1>
                <h1 className="lg:text-8xl font-extrabold text-gradient-from-to mb-4 text-6xl">
                  {item.herotitle}.
                </h1>
                <p className="max-w-[440px] text-sm text-white mb-16">
                  {item.herocontent}
                </p>
                <div className="flex lg:gap-7 gap-4 mb-6 lg:pb-5 flex-wrap lg:justify-start justify-center items-center">
                  <button className="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2  rounded-full">
                    Android <FaGooglePlay className="ml-3 " />
                  </button>
                  <button className="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2 rounded-full">
                    iOS <GrAppleAppStore className="ml-3" />
                  </button>
                  <button className="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2 rounded-full">
                    Web <TfiWorld className="ml-3" />
                  </button>
                </div>
              </div>
              <div className="lg:max-w-md max-w-sm  relative z-20 lg:top-0 top-10">
                <img
                  src={heroImg}
                  alt="iphone14"
                  loading="lazy"
                  className="w-full hero-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SECTION 2 */}
      <section className="px-6">
        <div className="mx-auto lg:bg-white bg-gray-50 rounded-md max-w-6xl relative lg:bottom-20 -bottom-14 lg:mb-6 mb-36 ">
          <div className=" border-b border-gray-300">
            <h1 className="px-9 py-7 font-bold text-3xl">Our Rates</h1>
            <div className="flex gap-7 mt-6 mb-5 px-9 flex-wrap">
              <button className="flex items-center whitespace-nowrap lg:text-base text-sm bg-white border border-gray-300 text-[#7234F5] lg:px-7 lg:py-4 px-4 py-2  rounded-full">
                <FaGooglePlay className="mr-3 " /> Gift Card
              </button>
              <button className="flex items-center whitespace-nowrap lg:text-base text-sm bg-white border border-gray-300 text-[#7234F5] lg:px-7 lg:py-4 px-5 py-2 rounded-full">
                <GrAppleAppStore className="mr-3" /> Crypto
              </button>
            </div>
          </div>
          {/* select option */}
          <div className="flex flex-wrap lg:gap-6 gap-4 lg:px-9 px-3 my-6">
            <div>
              <label htmlFor="dropdown" className="font-medium text-lg">
                Gift card Category
              </label>{" "}
              <br />
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
                className="border p-2 lg:w-[300px] w-full sm:w-[250px] h-10 mt-3"
                disabled
              >
                <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="dropdown" className="font-medium text-lg">
                Gift card Sub-Category
              </label>
              <br />
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
                className="border p-2 lg:w-[300px] w-full sm:w-[250px] h-10 mt-3"
                disabled
              >
                <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          {/* range */}
          <div className="px-9 mb-7">
            <input
              type="range"
              id="slider"
              value={sliderValue}
              onChange={handleSliderChange}
              min="0.00"
              max="100"
              step="1"
              className="my-6 w-[57%] h-1.5 appearance-none"
              style={{
                background:
                  "linear-gradient(to right, #4299e1, #4299e1 " +
                  sliderValue * 1 +
                  "%, #cbd5e0 " +
                  sliderValue * 1 +
                  "%, #cbd5e0 100%)",
              }}
            />

            <style jsx>{`
              input[type="range"]::-webkit-slider-thumb {
                background-color: #4299e1;
              }
            `}</style>
            <h1 className="text-xl my-6">Card amount</h1>
            <p className="lg:text-4xl text-lg font-bold text-gray-300">
              {sliderValue}.00
            </p>
          </div>

          {/* rate */}
          <div className="bg-[#7234F5] w-full rounded-b-lg">
            <div className="flex flex-wrap gap-16 px-9 py-9">
              <div>
                <h1 className="text-white lg:text-lg text:sm font-medium mb-6">
                  Rate
                </h1>
                <p className="lg:text-5xl text-lg font-bold text-gray-300">
                  {rateSettings}.00
                </p>
              </div>
              <div>
                <h1 className="text-white lg:text-lg text:sm font-medium mb-6">
                  How much you would get
                </h1>
                <p className="lg:text-5xl text-lg font-bold text-gray-300">
                  ₦{isHowMuch.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  .00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GiftCard />
      <Wallet />
    </main>
  );
}
