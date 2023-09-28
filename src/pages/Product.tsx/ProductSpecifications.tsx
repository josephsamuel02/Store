import React from "react";

const ProductSpecification: React.FC = () => {
  return (
    <div className=" my-4 mx-auto py-6 px-6 md:px-12 w-11/12 md:w-10/12 h-auto bg-white rounded-md">
      <ul className="w-auto h-auto mx-1 md:mx-6 p-6 border-2 border-slate-300 rounded-md list-disc">
        <h3 className="text-lg md:text-xl pb-3 text-slate-900 font-bold border-b-2 border-slate-300 ">
          KEY FEATURES
        </h3>
        <li className="text-base md:text-lg text-black font-roboto font-bold p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </li>
        <li className="text-base md:text-lg text-black font-roboto font-bold p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </li>
        <li className="text-base md:text-lg text-black font-roboto font-bold p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </li>
      </ul>
    </div>
  );
};

export default ProductSpecification;
