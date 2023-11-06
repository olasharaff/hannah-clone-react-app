import React from 'react'


export default function Loading() {
  return (
    <div className="bg-[#7234F5] h-full">
      <div className="flex justify-center items-center lg:py-[450%] py-[40%]">
        <img
          src="https://app.giftcardstonaira.com/assets/icons/app_icon.svg"
          alt="loading"
           loading="lazy"
        />
      </div>
    </div>
  );
}
