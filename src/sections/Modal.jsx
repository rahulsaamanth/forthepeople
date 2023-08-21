import React from "react"
import { homeBackground } from "../assets"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"

const Modal = ({ selected, setSelected }) => {
  if (!selected) {
    return <></>
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll grid place-items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[800px] w-[600px] bg-white shadow-lg shadow-gray-400 rounded-3xl flex flex-col  justify-start
      "
      >
        <img src={homeBackground} alt="No Image Uploaded" />
        <div className="flex items-center justify-between px-8 text-blue-600">
          <h1>Municipal Tap connection</h1>
          <h3>posted by &nbsp;&nbsp;lorem ipsum</h3>
        </div>
        <div>
          <h3 className="text-black text-[24px] pl-6">Description</h3>
          <p className="text-center">{selected.description}</p>
        </div>
        <div>
          <h3 className="text-[24px] pl-6">Solution</h3>
          <p className="text-center">{selected.solution}</p>
        </div>
        <div className="flex ic justify-between px-10 py-10 text-blue-600">
          <h3>{selected.location}</h3>
          <h3>{selected.date}</h3>
          <div className="flex gap-2 cursor-pointer">
            <ShareOutlinedIcon />
            <h3>share</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
