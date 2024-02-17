import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgList } from "react-icons/cg";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export const Form3 = () => {
  const [selectedView, setSelectedView] = useState("Board");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/form4`);
    const userInfoForm3 = {
      selectedView,
    };
    localStorage.setItem("userDataForm3", JSON.stringify(userInfoForm3));
  };

  const handleBackClick = () => {
    navigate(`/form2`);
    const userInfoForm3 = {
      selectedView,
    };
    localStorage.setItem("userDataForm3", JSON.stringify(userInfoForm3));
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <div className="relative border rounded-xl p-10 shadow-lg">
        <div className="absolute top-5 right-5 text-gray-400 text-xl">
          <RxCross2 />
        </div>
        <h1 className="text-2xl font-semibold pb-2"> Select a view</h1>
        <p className="text-gray-400">
          You can also customize this views in settings
        </p>
        <div className="flex flex-row items-center justify-center pb-48 pt-8">
          <div
            className="mr-4 lg:mr-10"
            onClick={() => setSelectedView("List")}
          >
            <div
              className={`border-2 rounded-md pt-6 pb-6 pl-12 pr-12 ${
                selectedView === "List" && "border-2 border-blue-500"
              }`}
            >
              <CgList className="text-8xl text-gray-400" />
            </div>

            <p
              className={`text-gray-400 ${
                selectedView === "List" && "text-slate-950"
              }`}
            >
              {" "}
              List
            </p>
          </div>
          <div onClick={() => setSelectedView("Board")}>
            <div
              className={`border-2 rounded-md pt-6 pb-6 pl-12 pr-12 ${
                selectedView === "Board" && "border-2 border-blue-500"
              }`}
            >
              <MdOutlineLeaderboard className="text-8xl text-gray-400" />
            </div>

            <p
              className={`text-gray-400 ${
                selectedView === "Board" && "text-slate-950"
              }`}
            >
              Board
            </p>
          </div>
        </div>
        <div className="flex  items-center w-full space-x-32">
          <div
            onClick={handleBackClick}
            className="flex flex-row items-center justify-center text-gray-400 cursor-pointer"
          >
            {/* <p className="text-gray-400">
              {" "} */}
            <span>
              <MdKeyboardArrowLeft />{" "}
            </span>
            Back
            {/* </p> */}
          </div>
          <button
            className="text-white bg-blue-500 pt-2 pb-2 pr-8 pl-8 rounded-md"
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
