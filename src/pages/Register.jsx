import React, { useState } from 'react'
import {BsArrow90DegLeft} from "react-icons/bs"
import { Link } from 'react-router-dom'


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    password: "",
    referral: "",
  })
  const {name, email, password, referral, username, number} = formData

  const handleSelectChange = (event) => {
    setFormData((prevState) =>({
      ...prevState, [event.target.id]: event.target.value
    }))

  }

  const onSubmitForm = (event) =>{
    event.preventDefault()
  }
  return (
    <>
      <div className="max-w-6xl px-9 mx-auto lg:mt-[10%] mt-[20%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-10">Create an account </h1>
          <Link
            to="/"
            className="fixed top-10 left-5 text-xl hover:border-8 hover:border-[#7234F51A] hover:rounded-full p-2 "
          >
            <BsArrow90DegLeft />
          </Link>

          <div className="w-full">
            <form className="flex flex-col" onSubmit={onSubmitForm}>
              <div className="mb-6">
                <label className="text-sm">
                  Name
                  <span className="text-[#7234F5] text-xs">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="John doe"
                  onChange={handleSelectChange}
                  className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm">
                  Username <span className="text-[#7234F5] text-xs">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Johndoe"
                  onChange={handleSelectChange}
                  className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm">
                  Email
                  <span className="text-[#7234F5] text-xs">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="you@email.com"
                  onChange={handleSelectChange}
                  className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm">
                  Number
                  <span className="text-[#7234F5] text-xs">*</span>
                </label>
                <input
                  type="number"
                  id="number"
                  value={number}
                  placeholder="0212345678"
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
                  id="password"
                  value={password}
                  onChange={handleSelectChange}
                  placeholder="Password (min. of 8 characters)"
                  className="w-full rounded-md px-5 py-3 border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm">
                  Referral Code <span>(Optional)</span>
                  <span className="text-[#7234F5] text-xs">*</span>
                </label>
                <input
                  type="text"
                  id="referral"
                  value={referral}
                  onChange={handleSelectChange}
                  placeholder="RFC00001"
                  className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                />
                <span className="text-xs text-gray-400 font-light">
                  You can proceed without a referral code
                </span>
              </div>
              <div className="text-center mt-6 mb-6">
                <button className="text-[#7234F5] lg:text-base text-sm lg:px-28 lg:py-4 px-10 py-2 rounded-full bg-[#7234F51A]">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
