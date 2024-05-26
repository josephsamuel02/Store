import React from "react";
import ROUTES from "../../utils/Routes";
interface AppComponent {
  Products: any;
}
const TopeSale: React.FC<AppComponent> = ({ Products }) => {
  const priceFormat = new Intl.NumberFormat("en-US");
  return (
    <div className="my-8 w-full h-auto">
      <div className="w-full h-auto p-0 flex flex-col bg-Storepurple">
        <p className=" text-4xl text-white text-center font-RubikDistressed ">Top Sales</p>
      </div>
      <div className="w-full h-auto my-1 px-0 md:px-5 py-1 md:py-3 grid grid-flow-row grid-cols-3 md:grid-cols-4 bg-purple-100 ">
        {Products &&
          Products.map((i: any, index: number) => (
            <div
              className="md:w-52 mx-1 md:mx-auto my-6 md:my-10 h-auto md:h-64 p-1 rounded items-center flex flex-col bg-white cursor-pointer"
              key={index}
            >
              <a
                className="w-full h-auto mx-auto items-center flex flex-col"
                href={`${ROUTES.PRODUCT}/${i.id}`}
              >
                <img
                  src={i.image}
                  alt="category"
                  className="m-auto w-full h-44 object-contain"
                />
                <p className="w-full text-sm md:text-base truncate  text-slate-8 text-center font-roboto ">
                  {i.name}
                </p>

                <h2 className="font-bold text-base py-1 text-black flex flex-col md:flex-row items-center">
                  ₦{priceFormat.format(i.price)}
                  <span className="pl-2 text-slate-600 text-sm text-decoration-line: line-through font-normal  ">
                    {i.old_price != i.old_price && `₦${priceFormat.format(i.old_price)}`}
                  </span>
                </h2>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopeSale;
