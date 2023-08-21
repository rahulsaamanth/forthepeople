import React, { useState } from "react"
import { Link } from "react-router-dom"
import DashboardIcon from "@mui/icons-material/Dashboard"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined"
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined"
import {
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material"

const CreateIssue = () => {
  const [invalidPost, setInvalidPost] = useState(false)
  const [validPost, setValidPost] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setInvalidPost(true)
    setTimeout(() => {
      setInvalidPost(false)
    }, 1500)
  }

  return (
    <div className="w-full min-h-screen bg-[#F0F2F5]  -custom-home-background">
      <nav className="top-0 inset-x-0 flex w-full items-center justify-between px-48 shadow-lg shadow-blue-600/30 fixed z-10 bg-[#F0F2F5]">
        <div>
          <Link to="/dashboard">
            <div className="flex flex-col justify-center items-center cursor-pointer w-[80px] h-[80px]">
              <DashboardIcon style={{ width: "40px", height: "40px" }} />
              <h3 className="text-blue-600">Dashboard</h3>
            </div>
          </Link>
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
          <section className="cursor-pointer hover:text-blue-600 text-black text-center">
            <TopicOutlinedIcon style={{ width: "50px", height: "50px" }} />
            <h1 className="text-[24px] underline">Create Issue</h1>
          </section>
        </div>
      </aside>
      <main className="pt-20 pb-20 sm:ml-96 sm:mr-64 shadow-lg shadow-blue-600/70 grid place-content-center bg-[#F0F2F5]/90">
        <section className="flex flex-col py-10 px-40 bg-white rounded-3xl shadow-lg shadow-gray-400">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex flex-col gap-9">
              <label className="">
                <input
                  type="text"
                  placeholder="Title"
                  className="text-[36px] outline-none w-full border-[1px] border-black/20 rounded-2xl pl-4"
                />
              </label>
              <label>
                <textarea
                  placeholder="Description"
                  className="text-[36px] outline-none border-[1px] border-black/20 w-full rounded-2xl pl-4"
                />
              </label>
              <label>
                <textarea
                  placeholder="Solution"
                  className="text-[36px] outline-none border-[1px] border-black/20 w-full rounded-2xl pl-4"
                />
              </label>
            </div>
            <RadioGroup
              aria-labelledby="categories"
              defaultValue="state"
              name="categories"
              row
            >
              <FormControlLabel
                value="state"
                control={<Radio />}
                label="State"
              />
              <FormControlLabel
                value="district"
                control={<Radio />}
                label="District"
              />
              <FormControlLabel
                value="constituency"
                control={<Radio />}
                label="constituency"
              />
              <FormControlLabel
                value="mandal"
                control={<Radio />}
                label="Mandal"
              />
              <FormControlLabel
                value="city/village"
                control={<Radio />}
                label="City/Village"
              />
            </RadioGroup>
            <Select
              labelId="department"
              id="select-department"
              value="selectDepartment"
              label="Select Dept."
            >
              <MenuItem value="agriculture">
                Agriculture and co-operation
              </MenuItem>
              <MenuItem value="selectDepartment">Select Department</MenuItem>
              <MenuItem value="tribalWelfare">Tribal and Welfare</MenuItem>
              <MenuItem value="animal">Animal husbandry, Fisheries</MenuItem>
              <MenuItem value="backwardClasses">
                Backward Classes welfare
              </MenuItem>
              <MenuItem value="energy">Energy</MenuItem>
              <MenuItem value="health">
                Health, Medical ad family welfare
              </MenuItem>
            </Select>
            <input type="file" id="file" name="file" multiple />
            <button
              className={`btn text-white w-full h-10 ${
                validPost
                  ? "bg-green-600"
                  : invalidPost
                  ? "bg-red-600"
                  : "bg-black"
              }`}
            >
              {validPost
                ? "Posted"
                : invalidPost
                ? "Fill all required fields"
                : "Post"}
            </button>
          </form>
          <h1
            className="text-[24px] text-blue-600 underline text-center pt-6 cursor-pointer"
            onClick={() => {
              setValidPost(true)
              setTimeout(() => {
                setValidPost(false)
              }, 1500)
            }}
          >
            prototype post
          </h1>
        </section>
      </main>
    </div>
  )
}

export default CreateIssue
