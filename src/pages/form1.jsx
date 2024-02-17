import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

export const Form1 = () => {
  const [selectedValue, setSelectedValue] = useState("Select a client");
  const [projectName, setProjectName] = useState("");
  const [clientName, setNewClientName] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedNotes, setSelectedNotes] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/form2`);
    const userInfo = {
      projectName,
      clientName,
      selectedStartDate,
      selectedEndDate,
      selectedNotes,
    };
    localStorage.setItem("userData", JSON.stringify(userInfo));
  };

  return (
    <div className="mt-12 flex flex-col lg:items-center lg:justify-center">
      <div className="relative border rounded-xl p-4 lg:p-10 shadow-lg">
        <div className="absolute top-5 right-5 text-gray-400 text-xl">
          <RxCross2 />
        </div>

        <h1 className="text-2xl font-semibold pb-6">Create a project</h1>

        <form action="">
          <div className=" flex flex-col lg:justify-start lg:items-start">
            <div className=" flex flex-col justify-start items-start pb-4">
              <label htmlFor="projectName" className="pb-2 font-medium">
                Project Name
              </label>
              <input
                type="text"
                name="email"
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="border p-2 rounded-md lg:w-[400px]"
                placeholder="Enter project name here"
              />
            </div>
            <div className=" flex flex-col justify-start items-start pb-4">
              <label htmlFor="Client" className="pb-2 font-medium">
                Client
              </label>
              <div className="flex flex-col lg:flex-row">
                {/* <input
                type="text"
                name="email"
                id="Client"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded-md"
                placeholder="Select a client"
              ></input> */}

                <select
                  type="text"
                  name="Select a client"
                  id="client"
                  value={selectedValue}
                  className="border p-2 rounded-md text-gray-400"
                  onChange={(e) => setSelectedValue(e.target.value)}
                  style={{ width: "285px" }}
                >
                  <option value="" selected="selected" hidden="hidden">
                    {" "}
                    Select a Client{" "}
                  </option>
                  <option value="someOption">first option</option>
                  <option value="otherOption">Other option</option>
                </select>

                <span className="pl-4 pr-4 pt-2 text-gray-400"> Or </span>
                <div className="flex  flex-row items-center w-max border rounded-md">
                  <span className="p-2 text-gray-400">
                    <FaPlus />
                  </span>
                  <label
                    htmlFor="projectName"
                    className="pb-2 font-medium"
                  ></label>
                  <input
                    type="text"
                    name="email"
                    id="projectName"
                    value={clientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    className="rounded-md"
                    placeholder="New Client"
                    style={{ width: "90px" }}
                  ></input>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-start items-start pb-4">
              <label htmlFor="dates" className="pb-2 font-medium ">
                Dates
              </label>
              <div className="flex flex-col lg:flex-row">
                <input
                  type="date"
                  name="dates"
                  id="dates"
                  value={selectedStartDate}
                  onChange={(e) => setSelectedStartDate(e.target.value)}
                  className="border p-2 rounded-md text-gray-400"
                  placeholder="25/10/2019"
                  style={{ width: "218px" }}
                ></input>
                <span className="text-gray-400 pr-2 pl-2">-</span>
                <input
                  type="date"
                  name="dates"
                  id="dates"
                  value={selectedEndDate}
                  onChange={(e) => setSelectedEndDate(e.target.value)}
                  className="border p-2 rounded-md text-gray-400"
                  placeholder="25/10/2019"
                  style={{ width: "218px" }}
                ></input>
              </div>
            </div>
            <div className=" flex flex-col justify-start items-start pb-4">
              <label htmlFor="notes" className="pb-2 font-medium">
                {" "}
                Notes
              </label>
              <div>
                <textarea
                  type="text"
                  name="email"
                  id="notes"
                  value={selectedNotes}
                  onChange={(e) => setSelectedNotes(e.target.value)}
                  className="border p-2 rounded-md w-full"
                  placeholder="Optional"
                  rows={4}
                  cols={50}
                />
              </div>
            </div>

            <div className="flex  items-center w-full space-x-36">
              {/* <span className="pr-40"> */}{" "}
              <div className="flex flex-row items-center justify-center text-gray-400 cursor-pointer">
                <span>
                  <MdKeyboardArrowLeft />{" "}
                </span>
                Back
              </div>
              {/* </span> */}
              <button
                className="text-white bg-blue-500 pt-2 pb-2 pr-8 pl-8 rounded-md"
                onClick={handleClick}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
