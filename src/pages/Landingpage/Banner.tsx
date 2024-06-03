import React from "react";
import { FaHeadphones, FaWineBottle } from "react-icons/fa6";
import { GiLipstick, GiLiquidSoap } from "react-icons/gi";
import { LuApple, LuBaby, LuRadioReceiver, LuShirt } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgGym } from "react-icons/cg";
import ROUTES from "../../utils/Routes";
import { Carousel } from "@material-tailwind/react";

const Banner: React.FC = () => {
  const Menu = [
    {
      name: "Computers",
      url: "computers",
      icon: <HiOutlineDesktopComputer size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Electronics",
      url: "electronics",
      icon: <LuRadioReceiver size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Grocery",
      url: "groceries",
      icon: <AiOutlineShopping size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: " Phone & tablets",
      url: "phones",
      icon: <BsPhone size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Accessories",
      url: "accessories",
      icon: <FaHeadphones size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Fashion",
      url: "fashion",
      icon: <LuShirt size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Sport",
      url: "sport",
      icon: <CgGym size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Food",
      url: "food",
      icon: <LuApple size={24} className="mx-2 text-Storepurple" />,
    },
    {
      name: "Body care and hygiene",
      icon: <GiLiquidSoap size={24} className="mx-2 text-Storepurple" />,
      url: "body_care",
    },
    {
      name: "Baby",
      icon: <LuBaby size={24} className="mx-2 text-Storepurple" />,
      url: "baby",
    },

    {
      name: "Cosmetics",
      icon: <GiLipstick size={24} className="mx-2 text-Storepurple" />,
      url: "cosmetics",
    },
    {
      name: "Wines and liquor",
      icon: <FaWineBottle size={24} className="mx-2 text-Storepurple" />,
      url: "wine",
    },
  ];

  return (
    <div className="mx-auto w-10/12 h-10/12 flex flex-row">
      <div className="hidden lg:flex mx-auto w-1/6  pt-6 h-auto flex-col rounded shadow-lg bg-white ">
        {Menu.map((i, index) => (
          <a
            className="w-full h-auto px-2 py-2 flex flex-row items-center cursor-pointer"
            href={`${ROUTES.CATEGORY}?category=${i.url}`}
            key={index}
          >
            {i.icon}
            <p className=" px-1 text-sm text-slate-800 font-roboto font-thin">{i.name}</p>
          </a>
        ))}
      </div>

      <div className=" mx-auto w-full h-full md:w-4/5 ">
        <Carousel
          className="rounded-sm"
          autoplay={true}
          transition={{ duration: 2.5 }}
          loop={true}
        >
          <img src="/img/banner1.png" alt="image 1" className="h-full w-full object-cover" />
          <img src="/img/banner2.png" alt="image 2" className="h-full w-full object-cover" />
          <img src="/img/banner3.png" alt="image 3" className="h-full w-full object-cover" />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
