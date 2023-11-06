import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css/bundle";
import tribune from "../assets/img/Trinune.svg"
import punch from "../assets/img/Punch.svg";
import legit from "../assets/img/Legit NG.svg";
import premium from "../assets/img/Premium Times.svg";
import Techcabal from "../assets/img/Techcabal.svg";

export default function Slider() {
    SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <div className="mt-12 mb-12">
      <div className="bg-[#F5F0FE]">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: "progressbar" }}
          effect="fade"
          modules={[EffectFade]}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center mx-auto max-w-xl  text-center overflow-hidden h-[320px] px-9 mb-9 mt-9">
              <img
                src="https://www.hannahapp.com/assets/images/avatar.png"
                loading="lazy"
                alt="index"
                className="rounded-full mb-5"
              />
              <h1 className="mb-5">
                Simply amazing! This is the most versatile, intuitive and high
                quality theme I have ever used! Can't wait to see how it can be
                even better with future updates.
              </h1>
              <cite className="font-bold">Daudu Sunday</cite>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex px-9 justify-center items-center gap-4 mb-6 mt-16">
        <img   loading="lazy" className="lg:w-[150px] w-10" src={punch} alt="steam-ebay" />
        <img  loading="lazy"
          className="lg:w-[150px] w-10"
          src={tribune}
          alt="bitcoin-van-seph"
        />
        <img  loading="lazy" className="lg:w-[150px] w-10" src={legit} alt="Nord-razor-nike" />
        <img  loading="lazy" className="lg:w-[150px] w-10" src={premium} alt="Itunes-google" />
        <img  loading="lazy" className="lg:w-[200px] w-10" src={Techcabal} alt="americaW" />
      </div>
    </div>
  );
}
