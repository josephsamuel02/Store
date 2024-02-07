import React from "react";
import { FaHeadphones } from "react-icons/fa6";
import { LuApple, LuRadioReceiver, LuShirt } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgGym } from "react-icons/cg";
import ROUTES from "../../utils/Routes";
import SimpleImageSlider from "react-simple-image-slider";

const Banner: React.FC = () => {
  const Menu = [
    {
      name: "Computers",
      icon: <HiOutlineDesktopComputer size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Electronics",
      icon: <LuRadioReceiver size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Grocery",
      icon: <AiOutlineShopping size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: " Phone & tablets",
      icon: <BsPhone size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Accessories",
      icon: <FaHeadphones size={24} className="mx-2 text-Storepurple" />,
    },
    { name: "Fashion", icon: <LuShirt size={24} className="mx-2 text-Storepurple" /> },
    { name: "Sport", icon: <CgGym size={24} className="mx-2 text-Storepurple" /> },
    { name: "Food", icon: <LuApple size={24} className="mx-2 text-Storepurple" /> },
  ];
  const images = [{ url: "/img/banner.png" }, { url: "https://placehold.co/600x400" }];
  return (
    <div className="w-full h-full py-2 flex bg-purple-200">
      <div className="mx-auto w-10/12 h-10/12   flex flex-row">
        <div className="hidden lg:flex mx-auto w-1/6  pt-6 h-auto flex-col  rounded  shadow-lg bg-white ">
          {Menu.map((i, index) => (
            <a
              className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer"
              href={`${ROUTES.CATEGORY}?category=${i.name}`}
              key={index}
            >
              {i.icon}
              <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">{i.name}</p>
            </a>
          ))}
        </div>

        <div className=" mx-auto w-full md:w-4/5 h-full ">
          <img
            src="/img/banner.png"
            alt=""
            className=" flex md:hidden w-full h-full object-cover"
          />
          <div className="hidden md:flex w-auto h-auto z-0">
            <SimpleImageSlider
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={false}
              autoPlay={true}
              slideDuration={3}
              autoPlayDelay={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
