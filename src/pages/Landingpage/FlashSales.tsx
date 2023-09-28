import React from "react";
const FlashSales: React.FC = () => {
  return (
    <div className="my-8 w-full h-auto">
      <div className="w-full h-auto p-0 flex flex-col bg-blue-600">
        <p className=" text-4xl text-white text-center font-RubikDistressed ">
          Flash Sales up to 10% off
        </p>
      </div>
      <div className="w-full h-auto my-1 px-0 md:px-5 py-1 md:py-3 flex md:flex-row bg-purple-100 ">
        <div className="mx-0 md:mx-3 w-1/6 h-auto md:h-64 p-1 rounded items-center flex flex-col bg-white cursor-pointer">
          <img src="/img/2.png" alt="category" className="m-auto w-full h-44 object-contain" />
          <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">
            Groceries
          </p>

          <h2 className="font-bold text-base py-1 text-black flex flex-col md:flex-row items-center">
            N10,000
          </h2>
        </div>
        <div className="mx-0 md:mx-3 w-1/6 h-auto md:h-64 p-1 rounded items-center flex flex-col bg-white cursor-pointer">
          <img src="/img/3.png" alt="category" className="m-auto w-full h-44 object-contain" />
          <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">
            Groceries
          </p>
          <h2 className="font-bold text-base py-1 text-black flex flex-col md:flex-row items-center">
            N10,000
          </h2>
        </div>
        <div className="mx-0 md:mx-3 w-1/6 h-auto md:h-64 p-1 rounded items-center flex flex-col bg-white cursor-pointer">
          <img src="/img/4.png" alt="category" className="m-auto w-full h-44 object-contain" />
          <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">
            Groceries
          </p>
          <h2 className="font-bold text-base py-1 text-black flex flex-col md:flex-row items-center">
            N10,000
          </h2>
        </div>
        <div className="mx-0 md:mx-3 w-1/6 h-auto md:h-64 p-1 rounded items-center flex flex-col bg-white cursor-pointer">
          <img src="/img/5.png" alt="category" className="m-auto w-full h-44 object-contain" />
          <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">
            Groceries
          </p>
          <h2 className="font-bold text-base py-1 text-black flex flex-col md:flex-row items-center">
            N10,000
          </h2>
        </div>
        <div className="mx-0 md:mx-3 w-1/6 h-auto md:h-64 p-1 rounded items-center flex flex-col bg-white cursor-pointer">
          <img src="/img/6.png" alt="category" className="m-auto w-full h-44 object-contain" />
          <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">
            Groceries
          </p>
          <h2 className="font-bold text-base py-1 text-black flex flex-col md:flex-row items-center">
            N10,000
          </h2>
        </div>
        <div className="mx-0 md:mx-3 w-1/6 h-auto md:h-64 p-1 rounded items-center flex flex-col bg-white cursor-pointer">
          <img src="/img/6.png" alt="category" className="m-auto w-full h-44 object-contain" />
          <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">
            Groceries
          </p>
          <h2 className="font-bold text-base py-1 text-black flex flex-col md:flex-row items-center">
            N10,000
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
