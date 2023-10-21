import React from "react";
import ROUTES from "../../utils/Routes";
interface AppComponent {
  Products: any[];
}
const NewProducts: React.FC<AppComponent> = ({ Products }) => {
  return (
    <div className="my-8 w-full h-auto">
      <div className="w-full h-auto p-0 flex flex-col bg-red-700">
        <p className=" text-4xl text-white text-center font-RubikDistressed ">
          Hot New products
        </p>
      </div>
      <div className="w-full h-auto my-1 px-0 md:px-5 py-1 md:py-3 flex md:flex-row bg-purple-100 ">
        {Products &&
          Products.slice(0, 6).map((i, index) => (
            <div
              className="mx-0 md:mx-3 w-1/6 h-auto md:h-64 p-1 rounded items-center flex flex-col bg-white cursor-pointer"
              key={index}
            >
              {" "}
              <a
                className="w-full h-auto mx-auto items-center flex flex-col"
                href={`${ROUTES.PRODUCT}?id=${i.id}`}
              >
                <img
                  src={i.image}
                  alt="category"
                  className="m-auto w-full h-44 object-contain"
                />
                <p className="text-sm md:text-base  text-slate-8 text-center font-roboto ">
                  {i.name}
                </p>

                <h2 className="font-bold text-base py-1 text-black flex flex-col md:flex-row items-center">
                  ₦{i.price}
                </h2>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewProducts;
