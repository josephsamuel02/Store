import React from "react";
import ROUTES from "../../utils/Routes";
interface AppComponent {
  Products: any;
}
const TopeSale: React.FC<AppComponent> = ({ Products }) => {
  const priceFormat = new Intl.NumberFormat("en-US");
  return (
    <div className="my-8 w-full h-auto">
      <div className="w-full h-auto p-0 flex flex-col bg-[#7726ad]">
        <p className=" text-3xl md:text-6xl py-4 text-white text-center font-RubikDistressed ">
          Top Sales
        </p>
      </div>
      <div className="w-full h-auto my-1 px-0 md:px-5 py-1 md:py-3 grid grid-flow-row grid-cols-3 md:grid-cols-4 bg-[#f0eaf52a] ">
        {Products &&
          Products.map((i: any, index: number) => (
            <div
              className="w-32 md:w-[180px] h-[230px] md:h-[270px]  mx-1 md:mx-auto my-6 md:my-10 p-1 rounded-xl items-center flex flex-col bg-white cursor-pointer shadow-lg hover:shadow-xl"
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
                <p className="w-full px-2 text-xs md:text-sm truncate  text-slate-8 text-center font-bold font-nunito ">
                  {i.name}
                </p>

                <h2 className=" text-base py-1 text-black flex flex-col md:flex-row items-center">
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
