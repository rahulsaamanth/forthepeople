import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import DashboardIcon from "@mui/icons-material/Dashboard"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined"
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"

import issues from "../../store"
import { Link } from "react-router-dom"
import Modal from "../sections/Modal"

const Home = () => {
  const [selected, setSelected] = useState(null)

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

      <aside className="shadow-lg shadow-blue-600/30 pt-16 w-64 text-white fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block hidden bg-[#F0F2F5]/90 ">
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
        <section className="mx-20 bg-white rounded-3xl flex flex-col gap-8 shadow-lg shadow-gray-400">
          <div className="flex items-center justify-between px-16 pt-6 ">
            <div className="flex justify-center items-center gap-4">
              <PersonOutlineIcon
                style={{ width: "40px", height: "40px" }}
                className="rounded-full bg-slate-500"
              />
              <h1 className="text-[32px] font-semibold opacity-50">
                Naveen Kumar
              </h1>
            </div>
            <h2 className="text-[24px]">Higher Education</h2>
          </div>
          <div className="flex flex-col gap-8 px-16">
            <h3 className="text-[18px] text-blue-600">
              Drainage leakage on the roads
            </h3>
            <p className="text-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis aperiam mollitia eos nulla numquam error dignissimos
              fugiat doloremque. Animi rem et laborum recusandae, ad magnam!
              Magni, dolorem tempore! Molestiae ea iure perferendis ipsum aut
              vero libero dignissimos veniam assumenda in.
            </p>
          </div>
          <hr />
          <div className="flex items-center justify-around text-blue-600 pb-6 text-[18px]">
            <h3>2 months ago</h3>
            <h3>4 Followers</h3>
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <ShareOutlinedIcon style={{ width: "30px", height: "30px" }} />
              <h3>Share</h3>
            </div>
          </div>
        </section>
        {issues.map((issue) => (
          <section
            key={issue.id}
            onClick={() => setSelected(issue)}
            className="mx-20 bg-white rounded-3xl flex flex-col gap-8 shadow-lg shadow-gray-400 cursor-pointer"
          >
            <div className="flex items-center justify-between px-16 pt-6 ">
              <div className="flex justify-center items-center gap-4">
                <PersonOutlineIcon
                  style={{ width: "40px", height: "40px" }}
                  className="rounded-full bg-slate-500"
                />
                <h1 className="text-[32px] font-semibold opacity-50">
                  {issue.victim}
                </h1>
              </div>
              <h2 className="text-[24px]">{issue.department}</h2>
            </div>
            <div className="flex flex-col gap-8 px-16">
              <h3 className="text-[18px] text-blue-600">{issue.title}</h3>
              <p className="text-[24px]">{issue.description}</p>
            </div>
            <hr />
            <div className="flex items-center justify-around text-blue-600 pb-6 text-[18px]">
              <h3>{issue.age} ago</h3>
              <h3>{issue.followers} Followers</h3>
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <ShareOutlinedIcon style={{ width: "30px", height: "30px" }} />
                <h3>Share</h3>
              </div>
            </div>
          </section>
        ))}
        <Modal selected={selected} setSelected={setSelected} />
      </main>
    </div>
  )
}

export default Home
