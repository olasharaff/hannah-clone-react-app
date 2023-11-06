import React from 'react'
import notfound from "../assets/img/404.svg"
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  const handleGoBack = () =>{
    navigate('/')

  }
  return (
    <div className="max-w-6xl px-9 mx-auto mt-20 mb-28">
      <div className="flex justify-center items-center">
        <img
          src={notfound}
          alt="404"
          className="w-[80%] notfound-img"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
}
