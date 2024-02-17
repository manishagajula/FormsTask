import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export const Form2 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedData, setSelectedData] = useState("Time & Materials");
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(true);
  const [inputText, setInputText] = useState("");
  //   const menuData = ["Time & Materials",]

  const navigate = useNavigate();

  const hourlyRates = {
    1: 10,
    2: 15,
    3: 20,
  };

  const handleClick = () => {
    navigate(`/form3`);
    const userInfoForm2 = {
      selectedValue,
      selectedData,
      isChecked,
      isChecked1,
      inputText,
    };
    localStorage.setItem("userDataForm2", JSON.stringify(userInfoForm2));
  };

  const handleBackClick = () => {
    navigate(`/`);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  const handleChecked1 = () => {
    setIsChecked1(!isChecked1);
  };
  //   const handleHourlyPrice = () => {
  //     return hourlyRates[selectedValue] || 0;
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("clicked");
    // loginHandler(email, password);
  };

  return (
    <div className="pb-8">
      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col items-center justify-center"
      >
        <div className="relative border rounded-xl p-10 shadow-lg">
          <div className="absolute top-5 right-5 text-gray-400 text-xl">
            <RxCross2 />
          </div>
          <div>
            <h1 className="text-2xl font-semibold pb-1"> Project type</h1>
            <p className="text-gray-400 pb-8">
              Don't panic -- You can also customize this types in settings
            </p>
          </div>

          <div className="flex flex-row items-center justify-center pb-8 text-gray-400">
            <table>
              <tr className="">
                <th
                  className={`rounded-l-lg pt-2 pb-2 pl-4 pr-4 ${
                    selectedData === "Time & Materials" &&
                    "bg-blue-500 text-white"
                  }`}
                  onClick={() => setSelectedData("Time & Materials")}
                >
                  Time & Materials
                </th>
                <th
                  className={`border pt-2 pb-2 pl-10 pr-10 ${
                    selectedData === "Fixed Fee" && "bg-blue-500 text-white"
                  }`}
                  onClick={() => setSelectedData("Fixed Fee")}
                >
                  Fixed Fee
                </th>
                <th
                  className={`border rounded-r-lg pt-2 pb-2 pl-8 pr-8 ${
                    selectedData === "Non-Billable" && "bg-blue-500 text-white"
                  }`}
                  onClick={() => setSelectedData("Non-Billable")}
                >
                  {" "}
                  Non-Billable
                </th>
              </tr>
            </table>
          </div>
          <div>
            <div className="pb-5 ">
              <div className="flex flex-col items-start justify-start pb-4">
                <h2 className=" text-xl ">Hourly</h2>
                <p className="text-gray-400">
                  We need hourly rates to track your project's billable amount.
                </p>
              </div>
              <div className="flex flex-row` items-start justify-start">
                <select
                  type="text"
                  name="Select a client"
                  id="client"
                  value={selectedValue}
                  className="border pt-2 pb-2 pl-2 rounded-md text-gray-400"
                  onChange={(e) => setSelectedValue(e.target.value)}
                  style={{ width: "250px" }}
                >
                  <option value="" selected="selected" hidden="hidden">
                    Project Hourly Rate
                  </option>
                  <option value="1">1hr</option>
                  <option value="2">2hr</option>
                  <option value="3">3hr</option>
                </select>
                <label htmlFor="price"></label>
                <input
                  type="text"
                  name="email"
                  id="projectName"
                  value={hourlyRates[selectedValue] || 0}
                  readOnly
                  className="border p-2 rounded-md ml-3"
                  //   placeholder="127278"
                  style={{ width: "120px" }}
                ></input>
              </div>
            </div>
            <div className="pb-4">
              <div className="flex flex-col items-start justify-start pb-4">
                <h2 className="text-xl ">Budget</h2>
                <p className="text-gray-400">
                  We need hourly rates to track your project's billable amount
                </p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <select
                  type="text"
                  name="Select a client"
                  id="client"
                  value={selectedValue}
                  className="border p-2 rounded-md text-gray-400"
                  onChange={(e) => setSelectedValue(e.target.value)}
                  style={{ width: "240px" }}
                >
                  <option value="" selected="selected" hidden="hidden">
                    Hour per Person
                  </option>
                  <option value="1">1hr</option>
                  <option value="2">2hr</option>
                  <option value="3">3hr</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col pb-8 text-gray-400">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center pb-2">
                  <input
                    type="checkbox"
                    id="scales"
                    name="scales"
                    checked={isChecked}
                    onChange={handleChecked}
                  />
                  <label for="scales" className="pl-2">
                    Budget resets every month
                  </label>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div>
                    <input
                      type="checkbox"
                      id="scales"
                      name="scales"
                      checked={isChecked1}
                      onChange={handleChecked1}
                    />
                    <label for="scales" className="pl-2">
                      Send email alerts if project exceeds
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      id="price"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="border pr-2 pl-2 pt-1 pb-1 rounded-md ml-3"
                      style={{ width: "60px" }}

                      // placeholder="80.00"
                    ></input>
                    <label htmlFor="price"> % of budget</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center w-full space-x-36">
              <div
                onClick={handleBackClick}
                className="flex flex-row items-center justify-center text-gray-400 cursor-pointer"
              >
                <span>
                  <MdKeyboardArrowLeft />{" "}
                </span>
                Back
              </div>
              <button
                className="text-white bg-blue-500 pt-2 pb-2 pr-8 pl-8 rounded-md"
                onClick={handleClick}
                type="submit"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
