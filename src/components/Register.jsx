import React, { useState } from "react"
import { homeBackground } from "../assets"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { Link } from "react-router-dom"

const Register = ({ languageClicked, setLanguageClicked }) => {
  const [invalidRegistration, setInvalidRegistration] = useState(false)

  const [toggleVisibilityOne, setToggleVisibilityOne] = useState(false)
  const [toggleVisibilityTwo, setToggleVisibilityTwo] = useState(false)

  const [validRegistration, setValidRegistration] = useState(false)

  const [form, setForm] = useState({
    firstName: "",
    LastName: "",
    userName: "",
    address: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      form.firstName !== "" &&
      form.phoneNumber !== "" &&
      form.password !== "" &&
      form.confirmPassword !== ""
    ) {
      setInvalidRegistration(false)
    } else {
      setInvalidRegistration(true)
      setTimeout(() => {
        setInvalidRegistration(false)
      }, 1500)
    }
  }
  return (
    <>
      <div className="h-screen w-full overflow-y-hidden">
        <nav className="flex items-center justify-between px-20 pt-6 ">
          <h1 className="text-[38px] font-bold text-blue-600">
            For The People
          </h1>
          <div className="flex gap-4">
            {languageClicked ? (
              <button
                onClick={() => setLanguageClicked((prev) => !prev)}
                className="btn text-blue-600 text-[20px] underline"
              >
                English
              </button>
            ) : (
              <button
                onClick={() => setLanguageClicked((prev) => !prev)}
                className="btn text-blue-600 text-[20px] underline"
              >
                Telugu
              </button>
            )}
          </div>
        </nav>
        <div className="w-full h-screen flex items-center justify-center md:px-12 z-10">
          <div className="">
            <img
              src={homeBackground}
              className="w-[600px] mb-52 -logo-rotate"
            />
          </div>
          <section className="border-[1px] border-gray-300 flex flex-col space-y-9 px-14 py-14 mb-20">
            <h1 className="text-[32px] text-blue-600 font-semibold">Sign Up</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center space-y-5"
            >
              <label className="mr-10">
                <input
                  name="firstName"
                  onChange={handleChange}
                  value={form.firstName}
                  type="text"
                  placeholder="First Name*"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                />
              </label>
              <label className="mr-10">
                <input
                  name="lastName"
                  onChange={handleChange}
                  value={form.LastName}
                  type="text"
                  placeholder="Last Name"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                />
              </label>
              <label className="mr-10">
                <input
                  name="userName"
                  onChange={handleChange}
                  value={form.userName}
                  type="text"
                  placeholder="Username"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                />
              </label>
              <label className="mr-10">
                <input
                  name="address"
                  onChange={handleChange}
                  value={form.address}
                  type="text"
                  placeholder="Address"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                />
              </label>
              <label className="mr-10">
                <input
                  name="phoneNumber"
                  onChange={handleChange}
                  value={form.phoneNumber}
                  type="text"
                  placeholder="Phone Number*"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                />
              </label>
              <label className="flex justify-center items-center gap-4">
                <input
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                  type={toggleVisibilityOne ? "text" : "password"}
                  placeholder="Password*"
                  className="h-12 w-80 pl-4 outline-none border-[1px] selection: border-black/20"
                />
                <div className="cursor-pointer">
                  {toggleVisibilityOne ? (
                    <VisibilityIcon
                      onClick={() => setToggleVisibilityOne((prev) => !prev)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => setToggleVisibilityOne((prev) => !prev)}
                    />
                  )}
                </div>
              </label>
              <label className="flex justify-center items-center gap-4">
                <input
                  name="confirmPassword"
                  onChange={handleChange}
                  value={form.confirmPassword}
                  type={toggleVisibilityTwo ? "text" : "password"}
                  placeholder="Confirm password*"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                />
                <div className="cursor-pointer">
                  {toggleVisibilityOne ? (
                    <VisibilityIcon
                      onClick={() => setToggleVisibilityTwo((prev) => !prev)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => setToggleVisibilityTwo((prev) => !prev)}
                    />
                  )}
                </div>
              </label>
              <button
                className={`btn text-white w-full h-10 text-center ${
                  validRegistration
                    ? "bg-green-600"
                    : invalidRegistration
                    ? "bg-red-600"
                    : "bg-black"
                }`}
              >
                {validRegistration
                  ? "User Registered"
                  : invalidRegistration
                  ? "Fill all required fields"
                  : "Register"}
              </button>
            </form>
            <h1
              className="text-[24px] text-blue-600 underline text-center cursor-pointer"
              onClick={() => {
                setValidRegistration(true)
                setTimeout(() => {
                  setValidRegistration(false)
                }, 1500)
              }}
            >
              prototype registration
            </h1>
            <h3 className="text-center">
              Already have an account?{" "}
              <Link to="/">
                <button className="text-blue-600">Sign In</button>
              </Link>
            </h3>
          </section>
        </div>
      </div>
    </>
  )
}

export default Register
