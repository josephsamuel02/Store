import React from "react";
import { useDispatch } from "react-redux";
import { add_cart_items } from "../../store/Cart";
import ROUTES from "../../utils/Routes";
interface AppComponent {
  categoryProducts: any;
}

const NewProducts: React.FC<AppComponent> = ({ categoryProducts }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full h-auto p-0 flex flex-col bg-blue-600">
        <p className=" text-5xl text-white text-center font-RubikDistressed ">New Stocks</p>
      </div>
      <div className="w-full h-auto md:p-2 grid grid-cols-3 md:grid md:grid-cols-6  bg-purple-100 items-center ">
        {categoryProducts &&
          categoryProducts.slice(3, 9).map((i: any, index: any) => (
            <div
              className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded"
              key={index}
            >
              <a
                className="w-full h-auto mx-auto items-center flex flex-col"
                href={`${ROUTES.PRODUCT}?id=${i.id}`}
              >
                <img
                  src={i.image}
                  alt=""
                  className="mx-auto w-full md:w-48 h-24 md:h-52 object-contain "
                />
                <p className=" line-clamp-1 p-1 text-xs md:text-md  text-gray-800">{i.name}</p>
                <p className=" pb-1 text-sm font-bold  text-gray-800">₦{i.price}</p>
              </a>
              <p
                className=" w-full mx-0.5 py-1 text-center text-sm md:text-base text-white bg-Storepurple hover:bg-purple-800 rounded"
                onClick={() =>
                  dispatch(
                    add_cart_items({
                      id: "3525",
                      image: "/img/7.png",
                      name: "Laptop",
                      price: "24577",
                      category: "Phone & tablets",
                      quantity: 1,
                    })
                  )
                }
              >
                Add to cart
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewProducts;
