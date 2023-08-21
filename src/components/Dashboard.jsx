import React from "react"
import { Link } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from "@mui/icons-material/Home"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined"
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-[#F0F2F5]  -custom-home-background">
      <nav className="top-0 inset-x-0 flex w-full items-center justify-around shadow-lg shadow-blue-600/30 fixed z-10 bg-[#F0F2F5]">
        <div>
          <Link to="/home">
            <div className="flex flex-col justify-center items-center cursor-pointer w-[80px] h-[80px]">
              <HomeIcon style={{ width: "40px", height: "40px" }} />
              <h3 className="text-blue-600">Home</h3>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center cursor-pointer gap-3">
          <input
            type="text"
            placeholder="search issues"
            className="w-[600px] h-12 rounded-3xl pl-10"
          />
          <SearchIcon style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="flex gap-2">
          <AccountCircleIcon style={{ width: "40px", height: "40px" }} />
          <Link to="/">
            <h3 className="text-[24px] underline text-blue-600">logout</h3>
          </Link>
        </div>
      </nav>

      <aside className="shadow-lg shadow-blue-600/30 pt-16 w-64 text-white fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block hidden bg-[#F0F2F5]/90">
        <div className="min-h-full pl-10 pt-10">
          <Link to="/myIssues">
            <section className="cursor-pointer hover:text-blue-600 text-black text-center">
              <TaskOutlinedIcon style={{ width: "50px", height: "50px" }} />
              <h1 className="text-[24px] underline">My Issues</h1>
            </section>
          </Link>
          <Link to="/createIssue">
            <section className="cursor-pointer hover:text-blue-600 text-black text-center">
              <TopicOutlinedIcon style={{ width: "50px", height: "50px" }} />
              <h1 className="text-[24px] underline">Create Issue</h1>
            </section>
          </Link>
        </div>
      </aside>
      <main className="pt-36 pb-20 sm:ml-96 sm:mr-64 shadow-lg shadow-blue-600/70 flex flex-col gap-10 bg-[#F0F2F5]/90">
        <section className="mx-20 bg-white rounded-3xl flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center gap-10">
            <div className="flex gap-20 py-10">
              <div className="flex gap-10 bg-red-600 p-6 justify-center items-center rounded-3xl">
                <div className="flex flex-col gap-12">
                  <h3 className="text-center text-white text-[42px] font-bold">
                    Open issues
                  </h3>
                  <h1 className="text-center text-white text-[52px] font-bold">
                    4
                  </h1>
                </div>
                <ThumbDownIcon
                  className="text-white"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
            <div className="flex gap-20 py-10">
              <div className="flex gap-10 bg-green-600 p-6 justify-center items-center rounded-3xl">
                <div className="flex flex-col gap-12">
                  <h3 className="text-center text-white text-[42px] font-bold">
                    Closed issues
                  </h3>
                  <h1 className="text-center text-white text-[52px] font-bold">
                    2
                  </h1>
                </div>
                <ThumbUpIcon
                  className="text-white"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-[52px] font-bold">State Level</h1>
        </section>
        <section className="mx-20 bg-white rounded-3xl flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center gap-10">
            <div className="flex gap-20 py-10">
              <div className="flex gap-10 bg-red-600 p-6 justify-center items-center rounded-3xl">
                <div className="flex flex-col gap-12">
                  <h3 className="text-center text-white text-[42px] font-bold">
                    Open issues
                  </h3>
                  <h1 className="text-center text-white text-[52px] font-bold">
                    4
                  </h1>
                </div>
                <ThumbDownIcon
                  className="text-white"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
            <div className="flex gap-20 py-10">
              <div className="flex gap-10 bg-green-600 p-6 justify-center items-center rounded-3xl">
                <div className="flex flex-col gap-12">
                  <h3 className="text-center text-white text-[42px] font-bold">
                    Closed issues
                  </h3>
                  <h1 className="text-center text-white text-[52px] font-bold">
                    2
                  </h1>
                </div>
                <ThumbUpIcon
                  className="text-white"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-[52px] font-bold">District Level</h1>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
