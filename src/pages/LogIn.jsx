import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {BsArrow90DegLeft} from "react-icons/bs"

export default function LogIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const {username, password} =formData;
  const handleSelectChange = (event) => {
    setFormData((prevState) =>({
      ...prevState, [event.target.id]: event.target.value
    }))
  }
  const handSubmitForm = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="max-w-6xl px-9 mx-auto lg:mt-[19%] mt-[20%]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="lg:mb-28 mb-10">Login</h1>
        <Link
          to="/"
          className="fixed top-10 left-5 text-xl hover:border-8 hover:border-[#7234F51A] hover:rounded-full p-2 "
        >
          <BsArrow90DegLeft />
        </Link>
        <div className="font-bold text-3xl max-w-[200px] text-center lg:mb-0 mb-5">
          <h1>Lets get you back in.</h1>
        </div>
        <div className="w-full ">
          <form className="flex flex-col" onSubmit={handSubmitForm}>
            <div className="mb-6">
              <label className="text-sm">
                Email or Username{" "}
                <span className="text-[#7234F5] text-xs">*</span>
              </label>
              <input
                type="text"
                value={username}
                id="username"
                placeholder="you@email.com"
                onChange={handleSelectChange}
                className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm">
                Password <span className="text-[#7234F5] text-xs">*</span>
              </label>
              <input
                type="text"
                value={password}
                id="password"
                onChange={handleSelectChange}
                placeholder="Password (min. of 8 characters)"
                className="w-full rounded-md px-5 py-3 border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
              />
            </div>
            <div className="text-center mt-6">
              <h1 className="text-sm font-light mb-5">
                Forgot Password?{" "}
                <Link to="" className="text-[#7234F5] font-extrabold">
                  Reset
                </Link>{" "}
              </h1>
              <h1 className="text-sm font-light mb-10">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#7234F5] font-extrabold">
                  Sign Up
                </Link>{" "}
              </h1>
              <button className="bg-[#7234F5] lg:text-base text-sm lg:px-28 lg:py-4 px-10 py-2 rounded-full text-white">
                Log me in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
