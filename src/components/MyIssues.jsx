import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import DashboardIcon from "@mui/icons-material/Dashboard"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined"
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined"

import { Link } from "react-router-dom"

const MyIssues = () => {
  return (
    <div className="w-full min-h-screen bg-[#F0F2F5]  -custom-home-background">
      <nav className="top-0 inset-x-0 flex w-full items-center justify-around shadow-lg shadow-blue-600/30 fixed z-10 bg-[#F0F2F5]">
        <div>
          <Link to="/dashboard">
            <div className="flex flex-col justify-center items-center cursor-pointer w-[80px] h-[80px]">
              <DashboardIcon style={{ width: "40px", height: "40px" }} />
              <h3 className="text-blue-600">Dashboard</h3>
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
          <section className="cursor-pointer hover:text-blue-600 text-black text-center">
            <TaskOutlinedIcon style={{ width: "50px", height: "50px" }} />
            <h1 className="text-[24px] underline">My Issues</h1>
          </section>
          <Link to="/createIssue">
            <section className="cursor-pointer hover:text-blue-600 text-black text-center">
              <TopicOutlinedIcon style={{ width: "50px", height: "50px" }} />
              <h1 className="text-[24px] underline">Create Issue</h1>
            </section>
          </Link>
        </div>
      </aside>
      <main className="pt-36 pb-20 sm:ml-96 sm:mr-64 shadow-lg shadow-blue-600/70 flex flex-col gap-10 min-h-screen bg-[#F0F2F5]/90">
        <section className="grid place-items-center">
          <h1 className="text-[52px] text-red-600">No Issues Raised </h1>
          <Link to="/createIssue">
            <h1 className="text-[32px] text-blue-600 underline cursor-pointer">
              Raise Now
            </h1>
          </Link>
        </section>
      </main>
    </div>
  )
}

export default MyIssues
