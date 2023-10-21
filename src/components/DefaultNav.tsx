import React, { useEffect, useState } from "react";
import { MdOutlineLocalGroceryStore, MdPersonOutline } from "react-icons/md";
import ROUTES from "../utils/Routes";
import { useSelector, useDispatch } from "react-redux";
//import { getCart } from "../store/Cart";

const DefaultNav: React.FC = () => {
  const Cart = useSelector((state: any) => state.Cart.Cart);
  const [logedin, setLogedin] = useState<boolean>(false);

  // useEffect(() =>
  //   //getCart('userId')
  //   ,[]
  // );

  return (
    <div className="fixed top-0 w-full h-auto px-3 md:px-5 py-2 md:py-3 bg-white flex flex-row items-center shadow-lg">
      <a className="w-32 md:w-1/5 md:mx-2 md:px-4 flex items-center" href="/">
        <img src="img/OneStore logo.svg" alt="" className="w-auto h-auto mx-2" />
      </a>
      <div className="w-2/3 md:w-2/3 mx-0 md:mx-auto px-auto flex flex-row items-center ">
        <input
          type="text"
          className="w-3/5 md:w-96 h-8 md:h-12 mx-4 mr-0 py-0 px-3 text-lg font-roboto outline-none rounded text-black border-2 border-gray-300 "
        />
        <input
          type="button"
          value="Search"
          className="  h-8 md:h-12 mx-0 px-2 md:px-7 text-xs md:text-lg font-roboto text-white bg-Storepurple rounded-sm "
        />
      </div>

      {!logedin ? (
        <div className="w-1/6 mx-auto  md:mx-4 px-1 flex flex-row ">
          <a className="w-auto mx-auto cursor-pointer" href={ROUTES.CART}>
            <MdOutlineLocalGroceryStore size={32} className="mx-auto text-slate-700" />
            {Cart.length > 0 && (
              <div
                className=" relative top w-5 h-5 items-center bg-red-600 rounded-full"
                style={{ top: "-70%", right: "-65%" }}
              >
                <p className=" text-center  text-sm font-roboto text-white ">{Cart.length}</p>
              </div>
            )}
          </a>
          <div className="w-auto mx-auto flex flex-col items-center cursor-pointer">
            <h1 className="w-auto mx-auto flex flex-row">
              <MdPersonOutline size={32} className=" text-slate-700" />
            </h1>
          </div>
        </div>
      ) : (
        <div className="w-2/6 md:1/5 mx-0 md:mx-4 flex flex-row items-center">
          <a
            className=" md:h-34 mr-1 md:mx-5 px-3 md:px-7 py-1 md:py-2 text-sm md:text-lg font-roboto text-white bg-Storepurple rounded "
            href={ROUTES.LOGIN}
          >
            Login
          </a>
          <a
            className=" md:h-34 mr-1 md:mx-5 px-3 md:px-7 py-1 md:py-2 text-sm md:text-lg font-roboto text-white bg-Storepurple rounded "
            href={ROUTES.SIGNUP}
          >
            Signup
          </a>
        </div>
      )}
    </div>
  );
};

export default DefaultNav;
