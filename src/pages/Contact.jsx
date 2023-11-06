import React from 'react'
import { Link } from 'react-router-dom';
import Whatsapp from "../assets/img/WhatsappLogo.svg"
import twitter from "../assets/img/TwitterLogo.svg";
import instagram from "../assets/img/InstagramLogo.svg";
import { BsArrowRightShort } from 'react-icons/bs';

export default function Contact() {
  return (
    <div>
      <div className="max-w-6xl px-6 mx-auto my-20">
        <h1 className="text-base font-bold mb-6 text-[#7234F5]"> CONTACT US</h1>
        <p className="lg:text-5xl font-bold text-3xl mb-5">
          Got a Question? Let's Talk!
        </p>
        <p className="mb-6">
          Our support team are ready to provide you with the best solution to
          any problem you encounter on Hannah.
        </p>
      </div>
      <div className="max-w-6xl mx-auto gap- border-8 border-[#7234F51A] rounded-2xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-16">
        <div className="lg:border-r-2 border-gray-200 lg:border-b-transparent border-b-2 px-9">
          <h className="text-4xl font-bold mb-6">Get in Touch </h>
          <p className="mt-3">
            {" "}
            Request a feature, suggest an update, or help us fix a bug
          </p>
          <div className="mt-12 mb-6">
            
            <button className="flex items-center whitespace-nowrap border-none text-white bg-[#7234F5] lg:text-base text-sm lg:px-16 lg:py-6 px-6 py-3  rounded-full">
              <Link>Send us an Email</Link>{" "}
              <BsArrowRightShort className="ml-3 lg:text-2xl text-base" />
            </button>
          </div>
        </div>
        <div className="px-9">
          <h1 className="text-4xl font-bold mb-3">Chat with us now</h1>
          <p className="mt-3">Send us questions, comments, or a poem</p>
          <div className="mt-12 mb-6">
            <button className="flex items-center whitespace-nowrap border-none text-white bg-[#7234F5] lg:text-base text-sm lg:px-16 lg:py-6 px-6 py-3  rounded-full">
              <Link>Chat with a Live Support Agent</Link>{" "}
              <BsArrowRightShort className="ml-3 lg:text-2xl text-base" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex lg:gap-7 gap-4 mb-6 lg:pb-5 justify-center items-center mt-10 px-9">
        <button className="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-8 lg:py-5 px-3 py-2  rounded-full border-2 border-[#7234F51A] ">
          Instagram{" "}
          <img
            src={instagram}
            loading="lazy"
            alt="instagram"
            className="ml-3"
          />
        </button>
        <button className="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-8 lg:py-5  px-3 py-2 rounded-full border-2 border-[#7234F51A]">
          Twitter{" "}
          <img src={twitter} loading="lazy" alt="twitter" className="ml-3" />
        </button>
        <button className="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-8 lg:py-5  px-3 py-2 rounded-full border-2 border-[#7234F51A]">
          Whatsapp{" "}
          <img src={Whatsapp} loading="lazy" alt="twitter" className="ml-3" />
        </button>
      </div>
    </div>
  );
}
