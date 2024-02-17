import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CgTally } from "react-icons/cg";
import { LuUserCircle2 } from "react-icons/lu";
import { PiUsersLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export const Form4 = () => {
  const [selectedProject, setSelectedProject] = useState("Only Admin's");

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(`/form3`);
    const userInfoForm4 = {
      selectedProject,
    };
    localStorage.setItem("userDataForm4", JSON.stringify(userInfoForm4));
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <div className="relative border rounded-xl p-10 shadow-lg">
        <div className="absolute top-5 right-5 text-gray-400 text-xl">
          <RxCross2 />
        </div>
        <h1 className="text-2xl font-semibold pb-2 pt-8">
          {" "}
          Who can manage projects
        </h1>
        <p className="text-gray-400 pb-10">
          Don't panic -- You can also customize this permissions in settings
        </p>
        <div className="flex flex-col items-center justify-center gap-4 pb-12">
          <div
            className={`flex flex-row items-center justify-center border-2 pt-2 pb-2 pl-6 pr-14 w-4/5 gap-4 rounded-md ${
              selectedProject === "Everyone" && "border-2 border-blue-500"
            }`}
            onClick={() => setSelectedProject("Everyone")}
          >
            <div className="text-4xl text-gray-400 ">
              <CgTally />
            </div>
            {/* <div className="flex flex-col items-start justify-start"> */}

            <div className="flex flex-col items-start">
              <h2 className="text-lg">Everyone</h2>

              <p className="text-gray-400 text-left">
                All users can now to see it, but guests cannot access the
                projects.
              </p>
            </div>
            {/* </div> */}
          </div>
          <div
            className={`flex flex-row items-start justify-start border-2 pt-4 pb-4 pl-6 pr-14 rounded-md w-4/5 ${
              selectedProject === "Only Admin's" && "border-2 border-blue-500"
            }`}
            onClick={() => setSelectedProject("Only Admin's")}
          >
            <div className="text-4xl text-gray-400 pr-4">
              <LuUserCircle2 />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-lg">Only Admin's</h2>
              <p className="text-gray-400">
                Only admins can manage everything.
              </p>
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-center border-2 pt-2 pb-2 pl-6 pr-14 w-4/5 gap-4 rounded-md ${
              selectedProject === "Only to Specific people" &&
              "border-2 border-blue-500"
            }`}
            onClick={() => setSelectedProject("Only to Specific people")}
          >
            <div className="text-4xl text-gray-400">
              <PiUsersLight />
            </div>
            {/* <div className="flex flex-col items-start justify-start"> */}

            <div className="flex flex-col items-start">
              <h2 className="text-lg">Only to Specific people</h2>
              <p className="text-gray-400">
                Only some specific people can able to see it
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="flex  items-center w-full space-x-52">
          <div
            onClick={handleBackClick}
            className="flex flex-row items-center justify-center text-gray-400 cursor-pointer"
          >
            {/* <p> */}{" "}
            <span>
              <MdKeyboardArrowLeft />{" "}
            </span>
            Back
            {/* </p> */}
          </div>
          <button className="text-white bg-blue-500 pt-2 pb-2 pr-8 pl-8 rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
