import React from "react";
import ROUTES from "../../utils/Routes";
import { useDispatch } from "react-redux";
import { add_cart_items } from "../../store/Cart";
interface AppComponent {
  category: any | string;
  categoryProducts: any;
}
const Products: React.FC<AppComponent> = ({ category, categoryProducts }) => {
  const priceFormat = new Intl.NumberFormat("en-US");
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full md:p-1 bg-white">
      <h1 className="p-4 text-xl md:text-2xl text-gray-800 font-dayone">{category}</h1>

      <div className="w-full h-auto md:p-2 grid grid-cols-3 md:grid md:grid-cols-6  bg-purple-100 items-center ">
        {categoryProducts &&
          categoryProducts.slice(0, 6).map((i: any, index: any) => (
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
                <p className=" pb-1 text-sm font-bold  text-gray-800">
                  ₦{priceFormat.format(i.price)}
                </p>
              </a>
              <p
                className=" w-full mx-0.5 py-1 text-center text-sm md:text-base text-white bg-Storepurple hover:bg-purple-800 rounded"
                onClick={() =>
                  dispatch(
                    add_cart_items({
                      id: i.id,
                      image: i.image,
                      name: i.name,
                      price: i.price,
                      category: i.category,
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

export default Products;
