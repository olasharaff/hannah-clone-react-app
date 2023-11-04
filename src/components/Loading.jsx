import React from 'react'


export default function Loading() {
  return (
    <div className="bg-red-700 w-full h-full">
      <div className="max-w-6xl px-6 mx-auto my-[50%] ">
        <img
          src="https://app.giftcardstonaira.com/assets/icons/app_icon.svg"
          alt="loading"
        />
      </div>
    </div>
  );
}
