import React, { useEffect, useState } from "react";
import ROUTES from "../../utils/Routes";
import OrdersMenu from "../components/OrdersMenu";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../DB/firebase";

const Orders: React.FC = () => {
  const [orderPage, setOrderPage] = useState<any>(1);
  const [Orders, setOrders] = useState<any>();
  const priceFormat = new Intl.NumberFormat("en-US");

  const fetchOrders = async () => {
    await getDocs(collection(db, "order")).then((querySnapshot) => {
      const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setOrders(newData);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <OrdersMenu setOrderPage={setOrderPage} orderPage={orderPage} />
      <div className="mx-auto w-full md:w-5/6 h-screen bg-white overflow-y-scroll scrollbar-hide">
        <div className="w-full mx-auto p-2 mt-28 bg-purple-50 h-full grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-3">
          {Orders &&
            Orders.map(
              (i: any, index: number) =>
                i.status == orderPage && (
                  <a
                    className="w-72 md:w-76 h-40 mx-auto p-1 flex flex-col items-center rounded-md shadow-md hover:shadow-lg bg-white"
                    href={`${ROUTES.ADMIN_ORDER_DETAILS}?/${index}`}
                    key={index}
                  >
                    <div className="my-auto w-full flex flex-row">
                      <img
                        src="/img/shopping-cart.png"
                        alt=""
                        className="m-auto w-16 h-16 object-contain rounded"
                      />
                      <div className="mx-2 w-4/6 px-2  my-auto flex flex-col">
                        <p className="mx-1  py-1 truncate text-sm font-roboto font-semibold text-slate-700">
                          Customer:
                          <span className="px-1 font-roboto font-normal text-sm text-slate-800">
                            {i.name}
                          </span>
                        </p>
                        <p className="mx-1  py-1 truncate text-sm font-roboto font-semibold text-slate-700">
                          Order Qt:
                          <span className=" mx-2 px-1.5 py-0.5 bg-red-500 text-xs  text-white font-normal rounded-full">
                            {i.orders.length}
                          </span>
                        </p>
                        <p className="mx-1  py-1 truncate text-sm font-roboto font-semibold text-slate-700">
                          Total price:
                          <span className="px-1 font-roboto font-normal text-sm text-slate-800">
                            ₦{priceFormat.format(i.totalPrice)}
                          </span>
                        </p>
                        <p className="mx-1  py-1 truncate text-sm font-roboto font-semibold text-slate-700">
                          Date:
                          <span className="px-1 font-roboto font-normal text-sm text-slate-800">
                            {i.date}
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr className="w-full pb-2 text-gray-600" />
                    <div className="w-full h-auto flex flex-row items-center">
                      <p className="mx-auto text-sm font-roboto text-slate-800">
                        ID: <span className=" font-roboto">{i.id}</span>
                      </p>
                      <p className="mx-auto text-sm font-roboto text-slate-800">
                        Status:
                        {i.status == 1 && (
                          <span className=" px-1 font-roboto text-orange-600">Pending</span>
                        )}
                        {i.status == 2 && (
                          <span className="px-1 font-roboto text-purple-600">Confirmed</span>
                        )}
                        {i.status == 3 && (
                          <span className="px-1 font-roboto text-blue-600">Shipped</span>
                        )}
                        {i.status == 4 && (
                          <span className="px-1 font-roboto text-green-500">complete</span>
                        )}
                      </p>
                    </div>
                  </a>
                )
            )}
        </div>
      </div>
    </>
  );
};

export default Orders;
