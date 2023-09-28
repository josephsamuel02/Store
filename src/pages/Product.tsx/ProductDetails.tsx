import React from "react";

const ProductDetails: React.FC = () => {
  return (
    <div className="mx-auto p-6 w-11/12 md:w-10/12 h-auto bg-white rounded-md">
      <h3 className="text-xl py-3 text-slate-900 font-bold">Product Details</h3>
      <p className="text-md md:text-lg text-slate-800 font-roboto font-thin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default ProductDetails;
