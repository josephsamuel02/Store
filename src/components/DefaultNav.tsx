import React, { useState } from "react";
import { MdOutlineLocalGroceryStore, MdPersonOutline, MdStarBorder } from "react-icons/md";

const DefaultNav: React.FC = () => {
  const [logedin, setLogedin] = useState<boolean>(true);

  return (
    <div className="w-full h-auto px-3 md:px-5 py-3 md:py-6 bg-white shadow-md flex flex-row items-center">
      <div className="w-1/5 mx-auto flex items-center">
        {/* <img src="../../assets/react.svg" alt="" className="w-auto h-auto mx-10" /> */}

        <MdStarBorder size={37} className="mx-auto text-Storepurple" />
      </div>
      <div className="w-2/3   mx-0 md:mx-auto px-auto flex flex-row items-center ">
        <input
          type="text"
          className="w-3/5 md:w-96 h-8 md:h-12 mx-0 py-0 px-3 text-lg font-roboto outline-none rounded text-black border-2 border-gray-400 "
        />
        <input
          type="button"
          value="Search"
          className="  h-8 md:h-12 mx-0 px-3 md:px-7 text-sm md:text-lg font-dayone text-white bg-Storepurple rounded-sm "
        />
      </div>

      {!logedin ? (
        <div className="w-1/5 mx-auto md:mx-4 px-1 flex flex-row ">
          <h1 className="w-auto mx-auto cursor-pointer">
            <MdOutlineLocalGroceryStore size={42} className="mx-auto text-black" />
            <div
              className=" relative top w-5 h-5 items-center bg-red-700 rounded-full"
              style={{ top: "-70%", right: "-65%" }}
            >
              <p className=" text-center  text-sm font-roboto text-white ">5</p>
            </div>
          </h1>
          <div className="w-auto mx-auto flex flex-col items-center cursor-pointer">
            <h1 className="w-auto mx-auto flex flex-row">
              <MdPersonOutline size={42} className=" text-black" />
            </h1>
          </div>
        </div>
      ) : (
        <div className="w-2/6 md:1/5 mx-0 md:mx-4 flex flex-row items-center">
          <input
            type="button"
            value="Login"
            className=" md:h-34 mr-1 md:mx-5 px-3 md:px-7 py-1 md:py-2 text-sm md:text-lg font-dayone text-white bg-Storepurple rounded "
          />
          <input
            type="button"
            value="Signup"
            className=" md:h-34 mr-1 md:mx-5 px-3 md:px-7 py-1 md:py-2 text-sm md:text-lg font-dayone text-white bg-Storepurple rounded "
          />
        </div>
      )}
    </div>
  );
};

export default DefaultNav;
