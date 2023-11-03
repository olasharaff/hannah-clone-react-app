import React, { useEffect, useState } from 'react'
import { GiftCardContent} from "../../data/HomeData"
import steam from "../../assets/img/Steam-ebay.svg"
import bitcoin from "../../assets/img/bitcoin-van-seph.svg";
import nord from "../../assets/img/Nord-razor-nike.svg";
import itunes from "../../assets/img/Itunes-google.svg";
import americaW from "../../assets/img/American-wal-mac.svg";
import americaT from "../../assets/img/Amazon-t.svg";

import punch from "../../assets/img/Punch.svg";
import tribune from "../../assets/img/Trinune.svg";
import legit from "../../assets/img/Legit NG.svg";
import premium from "../../assets/img/Premium Times.svg";
import Techcabal from "../../assets/img/Techcabal.svg";


export default function GiftCard() {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
      const animationTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 10000);
      return () => clearTimeout(animationTimer);
    }, []);
  return (
    <section className="flex justify-center items-center flex-col overflow-hidden">
      <div>
        {GiftCardContent.map((item, index) => (
          <div key={index} className="text-center px-6 mb-14">
            <h1 className="lg:text-4xl text-2xl font-black mb-3">
              {item.textheader}
            </h1>
            <p className="text-base">{item.textcontent}</p>
          </div>
        ))}
        <div
          className={`flex overflow-x-hidden ${"movie-animation"} ${
            isAnimating ? "animate" : ""
          }`}
        >
          <img className="lg:max-w-sm" src={steam} alt="steam-ebay" />
          <img className="lg:max-w-md" src={bitcoin} alt="bitcoin-van-seph" />
          <img className="lg:max-w-lg" src={nord} alt="Nord-razor-nike" />
          <img className="lg:w-96" src={itunes} alt="Itunes-google" />
          <img className="lg:max-w-lg" src={americaW} alt="americaW" />
          <img className="lg:w-96" src={americaT} alt="americaT" />
        </div>
        <div className="flex px-9 justify-center items-center gap-4 mb-6 mt-16">
          <img className="lg:w-[150px] w-10" src={punch} alt="steam-ebay" />
          <img
            className="lg:w-[150px] w-10"
            src={tribune}
            alt="bitcoin-van-seph"
          />
          <img
            className="lg:w-[150px] w-10"
            src={legit}
            alt="Nord-razor-nike"
          />
          <img className="lg:w-[150px] w-10" src={premium} alt="Itunes-google" />
          <img className="lg:w-[200px] w-10" src={Techcabal} alt="americaW" />
        </div>
      </div>
    </section>
  );
}
