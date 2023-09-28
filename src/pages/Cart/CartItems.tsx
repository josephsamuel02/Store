import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import ROUTES from "../../utils/Routes";
const CartItems: React.FC = () => {
  return (
    <div className="w-11/12 md:w-10/12 md:p-6 h-auto mx-auto my-4 p-4 flex flex-col bg-white ">
      <h3 className="text-2xl  md:text-3xl p-4 text-black font-bold font-dayone ">Carts</h3>
      <>
        <div className="w-full h-auto my-2 flex flex-col bg-white rounded-md shadow-lg">
          <div className="w-full h-auto flex flex-row">
            <img src="/img/2.png" alt="" className="w-32 h-32  mx-auto object-contain" />

            <div className="w-4/6 flex my-auto flex-col md:flex-row ">
              <h3 className="text-md  md:text-lg p-2 text-black font-roboto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </h3>
              <div className="w-64 h-auto flex flex-col ">
                <h3 className="text-2xl py-2 text-black font-dayone">₦ 27,999 </h3>
                <div className="w-full h-auto flex flex-row py-6 ">
                  <input
                    type="button"
                    value="-"
                    className="mx-3 w-7 h-7 bg-Storepurple rounded shadow font-roboto font-bold text-white"
                  />
                  <p className="text-base text-black font-roboto">1 </p>

                  <input
                    type="button"
                    value="+"
                    className="mx-3 w-7 h-7 bg-Storepurple rounded shadow font-roboto font-bold text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-36 m-2 h-auto px-4 py-2 flex flex-row cursor-pointer items-center rounded-md hover:bg-slate-200 ">
            <span>
              <RiDeleteBin6Line size={24} className="text-red-600" />
            </span>
            <span className="text-xl px-3 text-red-600 ">Remove </span>
          </div>
        </div>
        <div className="w-full h-auto my-2 flex flex-col bg-white rounded-md shadow-lg">
          <div className="w-full h-auto flex flex-row">
            <img src="/img/2.png" alt="" className="w-32 h-32  mx-auto object-contain" />

            <div className="w-4/6 flex my-auto flex-col md:flex-row ">
              <h3 className="text-md  md:text-lg p-2 text-black font-roboto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </h3>
              <div className="w-64 h-auto flex flex-col ">
                <h3 className="text-2xl py-2 text-black font-dayone">₦ 27,999 </h3>
                <div className="w-full h-auto flex flex-row py-6 ">
                  <input
                    type="button"
                    value="-"
                    className="mx-3 w-7 h-7 bg-Storepurple rounded shadow font-roboto font-bold text-white"
                  />
                  <p className="text-base text-black font-roboto">1 </p>

                  <input
                    type="button"
                    value="+"
                    className="mx-3 w-7 h-7 bg-Storepurple rounded shadow font-roboto font-bold text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-36 m-2 h-auto px-4 py-2 flex flex-row cursor-pointer items-center rounded-md hover:bg-slate-200 ">
            <span>
              <RiDeleteBin6Line size={24} className="text-red-600" />
            </span>
            <span className="text-xl px-3 text-red-600 ">Remove </span>
          </div>
        </div>
      </>

      <div className="mx-auto p-6 py-1 w-11/12 md:w-3/5 h-auto bg-white rounded-md">
        <h3 className="text-xl py-3 text-slate-900 font-bold">Notice</h3>
        <p className="text-md md:text-md text-slate-800 font-roboto font-thin">
          All products will be sent via a delivery agent, delivery cost will be coved by buyer.
          delivery cost can also be negotiated between buyer and seller.
        </p>
      </div>

      <div className="w-full h-auto my-6 flex flex-col bg-white">
        <div className=" flex py-3 flex-row ">
          <h3 className="text-lg text-black px-3 font-roboto font-bold ">Subtotal:</h3>
          <h3 className="text-xl text-black font-dayone">₦ 27,999 </h3>
        </div>
        <p className="w-2/5 h-auto py-3 text-lg text-center text-white font-bold cursor-pointer rounded bg-Storepurple">
          Checkout
        </p>
      </div>

      <div className="w-full h-auto mt-14 border-2 border-slate-300 rounded-sm">
        <h3 className="text-xl   px-4 py-2 text-black  font-dayone  border-b-2 border-slate-300">
          Previous orders
        </h3>

        <div className="mx-4 w-9/12 h-auto my-2 flex flex-col border-b-2 border-slate-300 bg-white  ">
          <div className="w-full h-auto flex flex-row">
            <img src="/img/2.png" alt="" className="w-20 h-20  mx-auto object-contain" />

            <div className="w-4/6 flex my-auto flex-col md:flex-row ">
              <h3 className="text-sm truncate  p-2 text-black font-roboto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </h3>
              <div className="w-64 h-auto flex flex-col ">
                <h3 className="text-lg py-2 text-slate-800 font-dayone">₦ 27,999 </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 w-9/12 h-auto my-2 flex flex-col border-b-2 border-slate-300 bg-white  ">
          <div className="w-full h-auto flex flex-row">
            <img src="/img/2.png" alt="" className="w-20 h-20  mx-auto object-contain" />

            <div className="w-4/6 flex my-auto flex-col md:flex-row ">
              <h3 className="text-sm truncate  p-2 text-black font-roboto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </h3>
              <div className="w-64 h-auto flex flex-col ">
                <h3 className="text-lg py-2 text-slate-800 font-dayone">₦ 27,999 </h3>
              </div>
            </div>
          </div>
        </div>
        <a
          className="text-xl   px-6 md:px-12 py-2 text-Storepurple  font-roboto "
          href={ROUTES.ORDERS}
        >
          <span className="underline">More</span>
          ...
        </a>
      </div>
    </div>
  );
};

export default CartItems;
