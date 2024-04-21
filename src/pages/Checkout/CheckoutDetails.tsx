import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderConfirmedCard from "../../components/OrderConfirmedCard";
import { usePaystackPayment } from "react-paystack";

const CheckoutDetails: React.FC = () => {
  const Cart = useSelector((state: any) => state.Cart.Cart);
  const priceFormat = new Intl.NumberFormat("en-US");
  const [showCard, setShowCard] = useState(false);
  const TOTAL = 300 * 100;
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: TOTAL, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_a507bd6845bb5cad347a591e06e88c6fde817cc1",
  };

  // you can call this function anything
  const onSuccess: any = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    // console.log(reference);
    setShowCard(true);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);

  return (
    <div className="mx-auto  w-full md:w-4/5 h-full bg-purple-100">
      <h3 className="text-2xl  md:text-3xl p-4 text-black font-dayone ">Check Out</h3>

      <div className="w-full px-2 h-full flex flex-col md:flex-row">
        <div className="mx-auto my-2 md:my-0 py-2 w-full md:w-2/5 h-full flex flex-col bg-white rounded">
          {Cart &&
            Cart.map((i: any, index: number) => (
              <div
                className="mx-auto  w-11/12 h-auto my-2 flex flex-col bg-white rounded-sm shadow-md"
                key={index}
              >
                <div className="w-full h-auto flex flex-row">
                  <img src={i.image} alt={i.name} className="w-20 h-20 object-contain" />

                  <div className=" w-10/12  flex my-auto flex-col px-2 ">
                    <h3 className="text-sm  truncate md:text-sm p-2 text-black font-roboto ">
                      {i.name} dU9 U u9euw 9 we 9w u 9euw -e9w ye e09yw e 0[w 9yeh 0[w 9ew 9e
                    </h3>

                    <h3 className="text-sm  md:text-sm font-bold  py-2 text-slate-800 font-roboto">
                      ₦{priceFormat.format(i.price)}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          <div className="mx-auto w-full  flex flex-row bg-white ">
            <h3 className=" mx-auto text-xl   p-4 text-black font-roboto font-bold ">Total</h3>
            <h4 className=" mx-auto text-xl   p-4 text-black font-roboto font-bold ">
              ₦ 35,346
            </h4>
          </div>
        </div>

        <div className="mx-auto md:mx-2 py-2 w-full md:w-3/5 h-auto bg-white ">
          <h3 className="text-xl md:text-2xl   p-4 text-black font-roboto font-bold ">
            Details
          </h3>
          <div className="mx-3  w-full    h-auto  ">
            <p className="text-lg p-1 text-black font-roboto font-bold ">
              Recepient: <span className="font-normal text-black">Dolapo Hassan</span>
            </p>
            <p className="text-lg  p-1 text-black font-roboto font-bold ">
              Order Id: <span className="font-normal text-black">666848m848</span>
            </p>

            <p className="text-lg  p-1 text-black font-roboto font-bold flex flex-row  items-center">
              Contacts numbers:
              <span className="mx-1 font-normal text-black">08065428635</span>
            </p>

            <p className="text-sm p-1 text-black font-roboto  flex flex-col ">
              Add alternative numbers:
              <textarea
                draggable={false}
                placeholder={"0802... "}
                className="  my-auto w-52 h-8 p-1  text-sm text-slate-800 font-normal focus:outline-none  resize-none no-scrollbar border-2 border-gray-300 rounded-md"
              ></textarea>
            </p>
            <p className="text-lg  p-1 text-black font-roboto font-bold flex flex-col">
              Delivery address:
              <textarea
                draggable={false}
                value={"2, adesanya street , obanla close ikeja "}
                className=" my-auto w-52 h-12 p-1  text-sm text-slate-800 font-normal focus:outline-none resize-none no-scrollbar border-2 border-gray-300 rounded-md"
              ></textarea>
            </p>
          </div>

          <div className="m-6 p-2  w-10/11    h-auto border-2 border-yellow-300 bg-yellow-50 rounded-md">
            <h3 className="text-xl   m-2 text-black font-roboto font-bold ">Note</h3>
            <p className="px-2 text-base font-roboto text-slate-900">
              Orders will be sent via a delivery agent, delivery cost will be coved by buyer.
              delivery cost can also be negotiated between buyer and delivery agent.
            </p>
          </div>

          <div className="mx-3  w-full    h-auto  ">
            <h3 className="text-lg   m-4 text-black font-roboto font-bold ">Payment Method</h3>
            <div
              className="m-3  w-1/2 h-auto  border-2 border-purple-400 bg-purple-100 hover:bg-purple-200 cursor-pointer  rounded"
              onClick={() => {
                initializePayment(onSuccess, onClose);
              }}
            >
              <h3 className="text-xl   p-4 text-black font-roboto font-bold ">Pay Online</h3>
            </div>
            <div className="m-3  w-1/2 h-auto  border-2 border-purple-400 bg-purple-100 hover:bg-purple-200 cursor-pointer  rounded">
              <h3 className="text-xl   p-4 text-black font-roboto font-bold ">
                Pay On Delivery
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* <PaystackHookExample /> */}
      <OrderConfirmedCard showCard={showCard} setShowCard={setShowCard} />
    </div>
  );
};

export default CheckoutDetails;
