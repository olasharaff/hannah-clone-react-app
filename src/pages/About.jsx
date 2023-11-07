import React, { useEffect, useState } from 'react'
import Slider from "../components/Slider"
import steam from "../assets/img/Steam.svg"
import bitcoin from "../assets/img/bitcoin-van-seph.svg";
import nord from "../assets/img/Nord-razor-nike.svg";
import itunes from "../assets/img/Itunes-google.svg";
import americaW from "../assets/img/American-wal-mac.svg";
import americaT from "../assets/img/Amazon-t.svg";

export default function About() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 10000);
    return () => clearTimeout(animationTimer);
  }, []);
  return (
    <div className="lg:mt-[12%] mt-[18%]">
      <div className="max-w-3xl lg:pl-20 pl-5 my-7 pr-6">
        <h1 className="text-[#7234F5] mb-6">ABOUT US </h1>
        <p className="lg:text-6xl text-2xl font-bold ">
          We're building the next generation finance & trading system.
        </p>
      </div>

      {/* Floating Card */}
      <div
        className={`flex mb-16 ${"movie-animation"} ${
          isAnimating ? "animate" : ""
        }`}
      >
        <img
          loading="lazy"
          className="lg:max-w-[200px] max-w-[100px]"
          src={steam}
          alt="steam-ebay"
        />
        <img
          loading="lazy"
          className="lg:max-w-md max-w-[200px]"
          src={bitcoin}
          alt="bitcoin-van-seph"
        />
        <img
          loading="lazy"
          className="lg:max-w-lg"
          src={nord}
          alt="Nord-razor-nike"
        />
        <img
          loading="lazy"
          className="lg:w-96"
          src={itunes}
          alt="Itunes-google"
        />
        <img
          loading="lazy"
          className="lg:max-w-lg"
          src={americaW}
          alt="americaW"
        />
        <img
          loading="lazy"
          className="lg:max-w-xs max-w-[200px]"
          src={americaT}
          alt="americaT"
        />
      </div>

      <div className="max-w-3xl lg:pl-20 pl-5 my-7 pr-6 ">
        <h1 className="lg:text-6xl text-2xl font-bold mb-6">Our Mission</h1>
        <p className="mb-6">
          {" "}
          Lorem ipsum dolor sit amet consectetur. Egestas nulla quisque ornare
          neque hac. Ut etiam a quam eget quam ipsum lectus. Risus in elementum
          egestas magna ipsum convallis a. Nisl nullam mauris aliquam diam
          vitae. Varius et donec orci eros viverra consectetur ac. Consectetur
          ac rhoncus massa lobortis. Mi egestas est risus pellentesque a est
          felis libero enim. Vestibulum vestibulum consequat pellentesque
          sagittis proin augue orci egestas felis. Scelerisque et molestie
          quisque nisl commodo in molestie vulputate sed.
        </p>

        <p className="mb-6">
          {" "}
          Lorem ipsum dolor sit amet consectetur. Egestas nulla quisque ornare
          neque hac. Ut etiam a quam eget quam ipsum lectus. Risus in elementum
          egestas magna ipsum convallis a. Nisl nullam mauris aliquam diam
          vitae. Varius et donec orci eros viverra consectetur ac. Consectetur
          ac rhoncus massa lobortis. Mi egestas est risus pellentesque a est
          felis libero enim. Vestibulum vestibulum consequat pellentesque
          sagittis proin augue orci egestas felis. Scelerisque et molestie
          quisque nisl commodo in molestie vulputate sed.
        </p>
      </div>

      <Slider />
    </div>
  );
}
