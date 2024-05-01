/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ROUTES from "../../utils/Routes";
import { MdCall, MdWhatsapp } from "react-icons/md";
interface appState {
  setShowCard: (value: any) => any;
}
const PayOfflineCard: React.FC<appState> = ({ setShowCard }) => {
  // const [placedOrder, setPlacedOrder] = useState(false);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-0 bg-transparent backdrop-blur-sm  rounded-md z-40 items-center  ">
        <div className=" relative top-16 mx-auto p-4  w-3/4 md:w-2/5 h-auto flex flex-col bg-white border-2 border-slate-200 rounded-lg items-center justify-center shadow-lg">
          <img src="/img/done-icon.svg" alt="" className="pt-5 mx-auto w-20 h-20" />
          <p className="mx-auto py-2 text-2xl text-center text-purple-600   ">
            Your order has been placed
          </p>
          <p className="mx-auto py-2 text-xl text-center text-slate-800  font-nunito ">
            Contact our vendor to make your payment
          </p>

          <div className="my-6 p-2 w-11/12 h-auto border-2 border-gray-300 bg-slate-50 rounded-md">
            <h3 className="text-xl m-2 text-black font-roboto font-bold ">Contacts</h3>
            <a
              href={ROUTES.CALLLINE}
              target="_blank"
              className=" mx-auto my-4 pl-3 py-2 w-4/5 flex flex-row  bg-green-700 hover:bg-green-600   rounded-full cursor-pointer"
            >
              <MdCall size={32} color="white" />
              <p className="px-2 py-1 text-lg   text-white font-roboto w-1/2">09073077717</p>
            </a>
            <a
              href={ROUTES.WHATSAPP}
              target="_blank"
              className=" mx-auto my-4 pl-3 py-2 w-4/5 flex flex-row  bg-white hover:bg-green-50 border  border-green-900 rounded-full cursor-pointer"
            >
              <MdWhatsapp size={32} color="green" />
              <p className="px-2 py-1 text-lg   text-green-800 font-roboto w-1/2">
                09073077717
              </p>
            </a>
          </div>

          <p
            className="w-3/5  mx-auto my-2 py-2 text-2xl text-center text-white bg-purple-600 hover:bg-purple-700  font-roboto rounded-full cursor-pointer"
            onClick={() => {
              setShowCard(false);
              window.location.replace(ROUTES.ORDERS);
            }}
          >
            OK
          </p>
        </div>

        {/* <div className=" relative top-60 mx-auto p-4  w-80 h-auto flex flex-col bg-white border-2 border-slate-200 rounded-lg items-center justify-center shadow-lg">
            <p
              className="w-3/5  mx-auto my-2 py-2 text-lg text-center text-white bg-purple-600 font-bold font-nunito rounded cursor-pointer"
              onClick={() => {
                setPlacedOrder(true);
              }}
            >
              Place Order
            </p>
          </div> */}
      </div>
    </>
  );
};

export default PayOfflineCard;
