import React from "react";
const Categories: React.FC = () => {
  return (
    <div className="w-full h-auto my-3 px-0 md:px-5 py-1 md:py-3 flex md:flex-row bg-purple-300">
      <div className="mx-0 md:mx-3 w-1/5 h-40 md:h-64 p-1 rounded items-center flex flex-col bg-white">
        <img src="/img/2.png" alt="category" className="m-auto w-full h-52 object-contain" />
        <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">Groceries</p>
      </div>
      <div className="mx-0 md:mx-3 w-1/5 h-40 md:h-64 p-1 rounded items-center flex flex-col bg-white">
        <img src="/img/3.png" alt="category" className="m-auto w-full h-52 object-contain" />
        <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">Groceries</p>
      </div>
      <div className="mx-0 md:mx-3 w-1/5 h-40 md:h-64 p-1 rounded items-center flex flex-col bg-white">
        <img src="/img/4.png" alt="category" className="m-auto w-full h-52 object-contain" />
        <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">Groceries</p>
      </div>
      <div className="mx-0 md:mx-3 w-1/5 h-40 md:h-64 p-1 rounded items-center flex flex-col bg-white">
        <img src="/img/5.png" alt="category" className="m-auto w-full h-52 object-contain" />
        <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">Groceries</p>
      </div>
      <div className="mx-0 md:mx-3 w-1/5 h-40 md:h-64 p-1 rounded items-center flex flex-col bg-white">
        <img src="/img/6.png" alt="category" className="m-auto w-full h-52 object-contain" />
        <p className="text-sm md:text-base text-slate-8 text-center font-roboto ">Groceries</p>
      </div>
    </div>
  );
};

export default Categories;
