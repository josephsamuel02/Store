import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { add_cart_items } from "../../store/Cart";
import { useDispatch } from "react-redux";
interface AppComponent {
  singleProduct: any;
}

const ProductCard: React.FC<AppComponent> = ({ singleProduct }) => {
  const priceFormat = new Intl.NumberFormat("en-US");
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-11/12 md:w-10/12 h-auto mx-auto my-4 p-4 flex flex-col bg-white rounded-sm ">
      <div className="w-full h-auto mx-auto flex flex-col md:flex-row">
        <img
          src={singleProduct.image}
          alt={singleProduct.name}
          className="m-auto w-52 h-auto object-cover"
        />

        <div className="w-full md:w-2/5 mx-auto h-auto flex flex-col ">
          <h2 className="text-xl md:text-2xl py-1 md:py-12 text-gray-800 font-roboto break-words">
            {singleProduct.name}
          </h2>
          <h2 className="text-4xl py-3 text-gray-800 font-dayone   break-words">
            ₦{priceFormat.format(singleProduct.price)}
            <span className="pl-2 text-slate-600 text-xl text-decoration-line: line-through font-normal  ">
              ₦{priceFormat.format(singleProduct.price)}
            </span>
          </h2>

          <div className="w-full h-auto flex flex-row py-6 ">
            <p className="text-base text-black font-roboto">Quantity</p>
            <input
              className="mx-3 w-7 h-7 bg-Storepurple rounded shadow font-roboto font-bold text-white"
              type="button"
              value="-"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
            <p className="text-base text-black font-roboto">{quantity}</p>

            <input
              className="mx-3 w-7 h-7 bg-Storepurple rounded shadow font-roboto font-bold text-white"
              type="button"
              value="+"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>

          <p
            className="mx-auto my-6 px-4 w-full h-auto py-4 text-xl  text-white font-roboto flex flex-row items-center bg-Storepurple hover:bg-purple-700 rounded-md cursor-pointer"
            onClick={() =>
              dispatch(
                add_cart_items({
                  id: singleProduct.id,
                  image: singleProduct.image,
                  name: singleProduct.name,
                  price: singleProduct.price,
                  category: singleProduct.category,
                  quantity: quantity,
                })
              )
            }
          >
            <span className="px-4">
              <MdAddShoppingCart size={32} className="mx-auto  text-slate-50" />
            </span>

            <span className="mx-auto cursor-pointer">Add to cart</span>
          </p>
        </div>
      </div>

      <div className="w-full md:w-2/5 mx-auto md:mx-6 my-4 h-auto flex flex-col ">
        <div className="mx-auto w-full md:w-10/12 h-auto p-2 border-2 border-slate-300 rounded-md">
          <h3 className="text-xl py-3 text-slate-900 font-bold text-center border-b-2 border-slate-300">
            SELLER INFORMATION
          </h3>

          <p className=" p-3 text-2xl text-slate-900 font-bold">ONE-STOP Electronics</p>
          {/* <h3 className="text-lg py-3 text-gray-800 font-bold text-center">
            Seller Performance
          </h3> */}
          {/* <ul className="w-full h-auto">
            <li className="text-md text-gray-800 px-3 py-1">
              Customer Rating: <span className="font-bold text-green-700">Excellent</span>
            </li>
            <li className="text-md text-gray-800 px-3 py-1">
              Order Fulfillment Rate: 
              <span className="font-bold  text-green-700">Excellent</span>
            </li>
            <li className="text-md text-gray-800 px-3 py-1">
              Quality Score:<span className="font-bold  text-green-700">Excellent</span>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
