import React from "react";
import DefaultNav from "../../components/DefaultNav";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const AdminOrderDetails: React.FC = () => {
  const location = useLocation();
  const orderIndex = new URLSearchParams(location.search).get("order_index");
  const Order = useSelector((state: any) => state.Order.Orders[Number(orderIndex)]);
  return (
    <div className="w-full h-screen bg-white overflow-y-scroll scrollbar-hide">
      <DefaultNav />
      <div className="w-full md:w-11/12 p-4 mx-auto mt-12 md:mt-28 h-full flex flex-col">
        <h3 className="mx-6 mb-4 text-2xl md:text-3xl text-slate-800 font-dayone">
          Order Details
        </h3>

        <div className="w-full  flex flex-col border-2">
          <h3 className="mx-6 py-2 text-lg md:text-xl text-slate-800 font-roboto font-bold">
            Customer Name: <span className="px-2 font-normal">{Order.userName}</span>
          </h3>
          <h3 className="mx-6 py-2 text-lg md:text-xl text-slate-800 font-roboto font-bold">
            Customer Phone:{" "}
            {Order.contacts.map((i: string, index: number) => (
              <span className="px-2 font-normal" key={index}>
                {i},
              </span>
            ))}
          </h3>
          <h3 className="mx-6 py-2 text-lg md:text-xl text-slate-800 font-roboto font-bold">
            Order ID: <span className="px-2 font-normal">{Order.id}</span>
          </h3>
          <h3 className="mx-6 py-2 text-lg md:text-xl text-slate-800 font-roboto font-bold">
            Delivery address:
            <span className="px-2 font-normal">{Order.DeliveryAddress}</span>
          </h3>
          <h3 className="mx-6 py-2 text-lg md:text-xl text-slate-800 font-roboto font-bold">
            Total price:
            <span className="px-2 font-normal"> ₦{Order.totalPrice}</span>
          </h3>
          <h3 className="mx-6 py-2 text-lg md:text-xl text-slate-800 font-roboto font-bold items-center flex flex-row flex-wrap">
            Status:
            {Order.status > 0 && (
              <span className=" mx-2 my-1 px-4 py-1 text-sm md:text-base text-black hover:text-white font-normal bg-slate-300 hover:bg-slate-700 shadow-md rounded cursor-pointer">
                Pending
              </span>
            )}
            {Order.status > 1 && (
              <span className=" mx-2 my-1 px-4 py-1 text-sm md:text-base  text-white font-normal bg-purple-500 hover:bg-purple-700 shadow-md rounded cursor-pointer">
                Confirmed
              </span>
            )}
            {Order.status > 2 && (
              <span className=" mx-2 my-1 px-4 py-1 text-sm md:text-base  text-white font-normal bg-blue-500 hover:bg-blue-700 shadow-md rounded cursor-pointer">
                Shipped
              </span>
            )}
            {Order.status > 3 && (
              <span className=" mx-2 my-1 px-4 py-1 text-sm md:text-base  text-white font-normal bg-green-500 hover:bg-green-700 shadow-md rounded cursor-pointer">
                Complete
              </span>
            )}
          </h3>
          <h3 className="mx-6 py-2 text-lg md:text-xl text-slate-800 font-roboto font-bold">
            Date:
            <span className="px-2 font-normal">{Order.date}</span>
          </h3>
          <div className="w-full flex my-4 px-3 flex-col border-2 ">
            <h3 className="mx-6 my-2 text-xl text-slate-800 font-dayone">
              Products:
              <span className=" mx-2 px-2 py-1 w-2 h-2 bg-red-500 text-base  text-white font-normal rounded-full">
                {Order.orders.length}
              </span>
            </h3>

            {Order.orders.map((i: any, index: number) => (
              <div
                className="w-full h-auto mx-auto my-3 py-6 flex flex-col md:flex-row  first-line: border-2 hover:shadow-lg bg-white"
                key={index}
              >
                <div className="mx-auto w-3/5 md:w-2/5  flex flex-col md:flex-row">
                  <img src={i.image} alt="" className="w-full h-52 object-contain rounded" />
                </div>

                <div className="p-2 md:w-4/5 h-auto flex flex-col">
                  <p className="mx-3 py-3 text-lg font-roboto font-bold text-slate-800">
                    Product Name:
                    <span className="pl-2 font-roboto text-base font-normal">{i.name}</span>
                  </p>
                  <p className="mx-3 py-3 text-lg font-roboto font-bold text-slate-800">
                    Price:
                    <span className="pl-2 font-roboto text-xl font-normal">₦ {i.price}</span>
                  </p>
                  <p className="mx-3 py-3 text-lg font-roboto font-bold text-slate-800">
                    Quantity:
                    <span className="pl-2 font-roboto text-xl font-normal">{i.quantity}</span>
                  </p>
                  <p className="mx-3 py-3 text-lg font-roboto font-bold text-slate-800">
                    Product Details:
                    <span className=" pl-2 font-roboto text-base font-normal">
                      {i.productDetails}
                    </span>
                  </p>

                  <ul className="mx-3 py-3 text-sm font-roboto text-slate-800 list-disc">
                    <h3 className=" py-2 text-lg text-slate-800 font-roboto font-bold">
                      Description & features
                    </h3>

                    {i.keyFeatures.map((i: string, index: number) => (
                      <li className="py-1 font-roboto text-base" key={index}>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
