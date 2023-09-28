import React from "react";
import ROUTES from "../../utils/Routes";

const Products: React.FC = () => {
  return (
    <div className="w-full h-full md:p-1 bg-white">
      <h1 className="p-4 text-xl md:text-2xl text-gray-800 font-dayone">Computers</h1>

      <div className="w-full h-auto md:p-2 grid grid-cols-3 md:grid md:grid-cols-6  bg-purple-100 items-center ">
        <a
          className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded"
          href={`${ROUTES.PRODUCT}?id=Acfs6hrR`}
        >
          <img
            src="/img/4.png"
            alt=""
            className="mx-auto w-full md:w-48 h-24 md:h-52 object-contain "
          />
          <p className=" line-clamp-1 p-1 text-sm md:text-lg  text-gray-800">
            Laptop intel i7 dual camera Laptop intel i7 dual camera
          </p>
          <p className=" pb-1 text-base font-bold  text-gray-800">₦10,000</p>
          <p className=" w-full mx-0.5 py-1 text-center text-sm md:text-base text-white bg-Storepurple hover:bg-purple-800 rounded">
            Add to cart
          </p>
        </a>
        <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
          <img
            src="/img/4.png"
            alt=""
            className="mx-auto w-full md:w-48 h-24 md:h-52 object-contain "
          />
          <p className=" line-clamp-1 p-1 text-sm md:text-lg  text-gray-800">
            Laptop intel i7 dual camera Laptop intel i7 dual camera
          </p>
          <p className=" pb-1 text-base font-bold  text-gray-800">₦10,000</p>
          <p className=" w-full mx-0.5 py-1 text-center text-sm md:text-base text-white bg-Storepurple hover:bg-purple-800 rounded">
            Add to cart
          </p>
        </div>
        <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
          <img
            src="/img/4.png"
            alt=""
            className="mx-auto w-full md:w-48 h-24 md:h-52 object-contain "
          />
          <p className=" line-clamp-1 p-1 text-sm md:text-lg  text-gray-800">
            Laptop intel i7 dual camera Laptop intel i7 dual camera
          </p>
          <p className=" pb-1 text-base font-bold  text-gray-800">₦10,000</p>
          <p className=" w-full mx-0.5 py-1 text-center text-sm md:text-base text-white bg-Storepurple hover:bg-purple-800 rounded">
            Add to cart
          </p>
        </div>
        <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
          <img
            src="/img/4.png"
            alt=""
            className="mx-auto w-full md:w-48 h-24 md:h-52 object-contain "
          />
          <p className=" line-clamp-1 p-1 text-sm md:text-lg  text-gray-800">
            Laptop intel i7 dual camera Laptop intel i7 dual camera
          </p>
          <p className=" pb-1 text-base font-bold  text-gray-800">₦10,000</p>
          <p className=" w-full mx-0.5 py-1 text-center text-sm md:text-base text-white bg-Storepurple hover:bg-purple-800 rounded">
            Add to cart
          </p>
        </div>
        <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
          <img
            src="/img/4.png"
            alt=""
            className="mx-auto w-full md:w-48 h-24 md:h-52 object-contain "
          />
          <p className=" line-clamp-1 p-1 text-sm md:text-lg  text-gray-800">
            Laptop intel i7 dual camera Laptop intel i7 dual camera
          </p>
          <p className=" pb-1 text-base font-bold  text-gray-800">₦10,000</p>
          <p className=" w-full mx-0.5 py-1 text-center text-sm md:text-base text-white bg-Storepurple hover:bg-purple-800 rounded">
            Add to cart
          </p>
        </div>
        <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
          <img
            src="/img/4.png"
            alt=""
            className="mx-auto w-full md:w-48 h-24 md:h-52 object-contain "
          />
          <p className=" line-clamp-1 p-1 text-sm md:text-lg  text-gray-800">
            Laptop intel i7 dual camera Laptop intel i7 dual camera
          </p>
          <p className=" pb-1 text-base font-bold  text-gray-800">₦10,000</p>
          <p className=" w-full mx-0.5 py-1 text-center text-sm md:text-base text-white bg-Storepurple hover:bg-purple-800 rounded">
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
