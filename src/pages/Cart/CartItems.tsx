import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import ROUTES from "../../utils/Routes";

interface AppComponent {
  cartItems: any;
}

import { useDispatch } from "react-redux";
import { deleteCartItem, updateProductQuantity } from "../../store/Cart";

const CartItems: React.FC<AppComponent> = ({ cartItems }) => {
  const token = localStorage.getItem("one_store_login");

  const dispatch = useDispatch();
  // const Order = useSelector((state: any) => state.Order.allOrders);
  const userId = token;
  const cartId = cartItems.id;
  const priceFormat = new Intl.NumberFormat("en-US");
  const [totalPrice, setTotalPrice] = useState(0);

  const cartTotal = () => {
    cartItems.map((i: any, n) => {
      setTotalPrice((prev: any) => {
        return totalPrice + i.inStock * i.price;
      });
    });
  };

  useEffect(() => {
    cartTotal();
    console.log(totalPrice);
  }, []);

  return (
    <div className="w-11/12 md:w-10/12 md:p-6 h-auto mx-auto my-4 p-4 flex flex-col bg-white ">
      <h3 className="text-2xl  md:text-3xl p-4 text-black font-bold font-dayone ">Carts</h3>
      {cartItems &&
        cartItems.map((i: any) => (
          <div
            className="w-full h-auto my-2 flex flex-col bg-white rounded-md shadow-lg"
            key={i.id}
          >
            <div className="w-full h-auto flex flex-row">
              <img src={i.image} alt={i.name} className="w-32 h-32  mx-auto object-contain" />

              <div className="w-4/6 flex my-auto flex-col md:flex-row ">
                <h3 className="text-md  md:text-lg p-2 text-black font-roboto ">{i.name}</h3>
                <div className="w-64 h-auto flex flex-col ">
                  <h3 className="text-2xl py-2 text-black font-dayone">
                    ₦{priceFormat.format(i.price * i.inStock)}
                  </h3>
                  <div className="w-full h-auto flex flex-row py-6 ">
                    <input
                      className="mx-3 w-7 h-7 bg-Storepurple rounded shadow font-roboto font-bold text-white"
                      type="button"
                      value="-"
                      onClick={() => {
                        const q = i.inStock - 1;
                        i.inStock > 1 &&
                          dispatch(
                            updateProductQuantity({
                              userId: userId,
                              productId: i.productId,
                              quantity: q,
                            })
                          );
                      }}
                    />
                    <p className="text-base text-black font-roboto">{i.inStock}</p>

                    <input
                      className="mx-3 w-7 h-7 bg-Storepurple rounded shadow font-roboto font-bold text-white"
                      type="button"
                      value="+"
                      onClick={() => {
                        const q = i.inStock + 1;
                        dispatch(
                          updateProductQuantity({
                            userId: userId,
                            productId: i.productId,
                            quantity: q,
                          })
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-36 m-2 h-auto px-4 py-2 flex flex-row cursor-pointer items-center rounded-md hover:bg-slate-200 "
              onClick={() => {
                dispatch(
                  deleteCartItem({
                    cartId: cartId,
                    userId: userId,
                    productId: i.productId,
                  })
                );
              }}
            >
              <span>
                <RiDeleteBin6Line size={24} className="text-red-600" />
              </span>
              <span className="text-xl px-3 text-red-600 ">Remove </span>
            </div>
          </div>
        ))}
      {/* {totalPrice > 0 && (
        <div className="mx-auto p-6 my-3 w-11/12 md:w-full h-auto bg-white rounded-lg border-slate-300 border">
          <h3 className="text-xl py-3 text-slate-900 font-bold">
            TOTAL: ₦{priceFormat.format(totalPrice)}
          </h3>
        </div>
      )} */}
      <div className="mx-auto p-6 py-1 w-11/12 md:w-3/5 h-auto bg-white rounded-md">
        <h3 className="text-xl py-3 text-slate-900 font-bold">Notice</h3>
        <p className="text-md md:text-md text-slate-800 font-roboto font-thin">
          All products will be sent via a delivery agent, delivery cost will be coved by buyer.
          delivery cost can also be negotiated between buyer and delivery agent.
        </p>
      </div>

      {cartItems ? (
        <div className="w-full h-auto my-6 flex flex-col bg-white">
          <div className=" flex py-3 flex-row ">
            <h3 className="text-lg text-black px-3 font-roboto font-bold ">Total:</h3>
            <h3 className="text-xl text-black font-dayone">
              ₦{priceFormat.format(totalPrice)}
            </h3>
          </div>
          <a
            className="w-2/5 h-auto py-3 text-lg text-center text-white font-bold cursor-pointer rounded bg-Storepurple hover:bg-purple-800 "
            href={ROUTES.CHECKOUT}
          >
            Checkout
          </a>
        </div>
      ) : null}

      <div className="w-full h-auto mt-14 border-2 border-slate-300 rounded-sm">
        <h3 className="text-xl   px-4 py-2 text-black  font-dayone  border-b-2 border-slate-300">
          Previous orders
        </h3>

        {cartItems &&
          cartItems.map((i: any, index: number) => (
            <div
              className="mx-4 w-9/12 h-auto my-2 flex flex-col border-b-2 border-slate-300 bg-white  "
              key={index}
            >
              <div className="w-full h-auto flex flex-row">
                <img src={i.image} alt="" className="w-20 h-20  mx-auto object-contain" />

                <div className="w-4/6 flex my-auto flex-col md:flex-row ">
                  <h3 className="text-sm truncate  p-2 text-black font-roboto ">{i.name}</h3>
                  <div className="w-64 h-auto flex flex-col ">
                    <h3 className="text-lg py-2 text-slate-800 font-dayone">
                      ₦{priceFormat.format(i.price)}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}

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
