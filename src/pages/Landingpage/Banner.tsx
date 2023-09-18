import React from "react";
import { MdAddHomeWork } from "react-icons/md";
import { FaComputer, FaHeadphones } from "react-icons/fa6";
import { LuApple, LuRadioReceiver, LuShirt } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgGym } from "react-icons/cg";
const Banner: React.FC = () => {
  return (
    <div className="w-full h-full py-2 flex bg-purple-300">
      <div className="mx-auto w-10/12 h-10/12   flex flex-row">
        <div className="hidden lg:flex mx-auto w-1/6  pt-6 h-auto flex-col  rounded  shadow-lg bg-white ">
          <div className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer">
            <HiOutlineDesktopComputer size={24} className="mx-2 text-Storepurple" />
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">Computers</p>
          </div>
          <div className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer">
            <LuRadioReceiver size={24} className="mx-2 text-Storepurple" />
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">Electronics</p>
          </div>
          <div className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer">
            <AiOutlineShopping size={24} className="mx-2 text-Storepurple" />
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">Grocery</p>
          </div>
          <div className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer">
            <BsPhone size={24} className="mx-2 text-Storepurple" />
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">
              Phone & tablets
            </p>
          </div>
          <div className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer">
            <FaHeadphones size={24} className="mx-2 text-Storepurple" />
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">Accessories</p>
          </div>
          <div className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer">
            <LuShirt size={24} className="mx-2 text-Storepurple" />
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">Fashion</p>
          </div>
          <div className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer">
            <CgGym size={24} className="mx-2 text-Storepurple" />
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">Sport</p>
          </div>
          <div className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer">
            <LuApple size={24} className="mx-2 text-Storepurple" />
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">Food</p>
          </div>
        </div>

        <div className=" mx-auto w-full md:w-4/5 h-full ">
          <img src="/img/banner.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
