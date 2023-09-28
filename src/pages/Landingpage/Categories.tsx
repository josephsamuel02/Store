import React from "react";
const Categories: React.FC = () => {
  return (
    <div className="w-full h-auto md:p-2 grid grid-cols-3 md:grid md:grid-cols-6 bg-purple-200 items-center ">
      <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
        <img
          src="/img/2.png"
          alt="category"
          className="mx-auto w-full md:w-48 h-24 md:h-36 object-contain "
        />
        <p className="text-xs py-2 md:text-base text-slate-8 text-center font-nunito font-bold ">
          Electronics
        </p>
      </div>
      <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
        <img
          src="/img/3.png"
          alt="category"
          className="mx-auto w-full md:w-48 h-24 md:h-36 object-contain "
        />
        <p className="text-xs py-2 md:text-base text-slate-8 text-center font-nunito font-bold ">
          Computers & Hardware
        </p>
      </div>
      <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
        <img
          src="/img/4.png"
          alt="category"
          className="mx-auto w-full md:w-48 h-24 md:h-36 object-contain "
        />
        <p className="text-xs py-2 md:text-base text-slate-8 text-center font-nunito font-bold ">
          Phone & tablets
        </p>
      </div>
      <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
        <img
          src="/img/5.png"
          alt="category"
          className="mx-auto w-full md:w-48 h-24 md:h-36 object-contain "
        />
        <p className="text-xs py-2 md:text-base text-slate-8 text-center font-nunito font-bold ">
          Fashion
        </p>
      </div>
      <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
        <img
          src="/img/6.png"
          alt="category"
          className="mx-auto w-full md:w-48 h-24 md:h-36 object-contain "
        />
        <p className="text-xs py-2 md:text-base text-slate-8 text-center font-nunito font-bold ">
          Groceries
        </p>
      </div>
      <div className=" w-28 md:w-48 h-auto mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded">
        <img
          src="/img/5.png"
          alt="category"
          className="mx-auto w-full md:w-48 h-24 md:h-36 object-contain "
        />
        <p className="text-xs py-2 md:text-base text-slate-8 text-center font-nunito font-bold ">
          Groceries
        </p>
      </div>
    </div>
  );
};

export default Categories;
