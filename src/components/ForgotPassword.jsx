import React from "react"
import { homeBackground } from "../assets"
import { Link } from "react-router-dom"

const ForgotPassword = ({ languageClicked, setLanguageClicked }) => {
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
            <h2 className="text-[32px] text-blue-600 font-semibold">
              Forgot password
            </h2>
            <form
              // onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center space-y-8"
            >
              <label className="flex justify-center items-center">
                {/* <PersonOutlineIcon /> */}
                <input
                  name="username"
                  type="text"
                  // value={form.username}
                  // onChange={handleChange}
                  placeholder="Phone number or Username"
                  className="h-12 w-80 pl-4 outline-none border-[1px] border-black/20"
                  // onClick={() => setAccessDenied(false)}
                />
              </label>

              <button
                type="submit"
                className={`btn bg-black text-white text-[18px] w-80 h-10`}
              >
                Verify
              </button>
            </form>
            <hr />
            <Link to="/" className="text-center">
              <button className="text-blue-600 text-[18px]">Sign In</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
