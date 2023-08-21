import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { homeBackground } from "../assets"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import LockIcon from "@mui/icons-material/Lock"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"

const Login = ({ stateForLogo, languageClicked, setLanguageClicked }) => {
  const [accessDenied, setAccessDenied] = useState(false)

  const [access, setAccess] = useState(false)

  const [toggleVisibility, setToggleVisibility] = useState(false)

  const [form, setForm] = useState({
    username: "",
    password: "",
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
      form.username == "admin" &&
      form.password == "admin" &&
      accessDenied == false
    )
      setAccess(true)
    else {
      setAccessDenied(true)
      setTimeout(() => {
        setAccessDenied(false)
      }, 1500)
    }
  }

  // console.log(accessDenied)

  if (stateForLogo)
    return (
      <div className="h-screen w-full grid place-items-center">
        <img src={homeBackground} className="w-[600px]" />
      </div>
    )

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
          <section className="border-[1px] border-gray-300 flex flex-col space-y-9 px-14 py-14 mb-16">
            <h2 className="text-[32px] text-blue-600 font-semibold">SignIn</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center space-y-8"
            >
              <label className="flex justify-center items-center gap-4 pr-10">
                <PersonOutlineIcon />
                <input
                  name="username"
                  type="text"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Phone number or Username"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                  onClick={() => setAccessDenied(false)}
                />
              </label>
              <label className="flex justify-center items-center gap-4">
                <LockIcon />
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type={toggleVisibility ? "text" : "password"}
                  placeholder="Password"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                  onClick={() => setAccessDenied(false)}
                />
                <div className="cursor-pointer">
                  {toggleVisibility ? (
                    <VisibilityIcon
                      onClick={() => setToggleVisibility((prev) => !prev)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => setToggleVisibility((prev) => !prev)}
                    />
                  )}
                </div>
              </label>
              <button
                type="submit"
                className={`btn ${
                  accessDenied ? "bg-red-600" : "bg-black"
                }  text-white text-[18px] w-80 h-10`}
              >
                {accessDenied ? "Invalid username or password" : "Log In"}
              </button>
              <Link to="/home" className="text-blue-600 underline">
                prototype login
              </Link>
            </form>
            <hr />
            <Link to="/forgotPassword" className="text-center">
              <button className="text-blue-600 text-[18px]">
                Forgot your password?
              </button>
            </Link>
            <h3 className="text-center">
              Don't have an account?{" "}
              <Link to="/register">
                <button className="text-blue-600">Register</button>
              </Link>
            </h3>
          </section>
        </div>
      </div>
    </>
  )
}

export default Login
