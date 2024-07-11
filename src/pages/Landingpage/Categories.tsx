import React from "react";
import ROUTES from "../../utils/Routes";
const Categories: React.FC = () => {
  const Menu = [
    {
      name: "Computing",
      img: "/img/n.png",
      url: "computers",
    },
    {
      name: "Electronics",
      img: "/img/i.png",
      url: "electronics",
    },
    {
      name: "Groceries",
      img: "/img/j.png",
      url: "groceries",
    },
    {
      name: "Phone & tablets",
      img: "/img/e.png",
      url: "phone",
    },
    {
      name: "Accessories",
      img: "/img/q.jpg",
      url: "accessories",
    },
    { name: "Body care and hygiene", img: "/img/c.png", url: "baby" },
    // { name: "Cosmetics", img: "/img/c.png", url: "cosmetics" },
    // { name: "Wines and liquor", img: "/img/c.png", url: "wine" },
  ];

  return (
    <div className="w-full h-auto md:p-2 grid grid-cols-3 md:grid md:grid-cols-6  bg-[#4303a8] items-center ">
      {Menu.map((i, index) => (
        <a
          className=" w-28 h-auto md:w-44 md:h-44  mx-auto  my-4 items-center flex flex-col bg-white cursor-pointer rounded"
          key={index}
          href={`${ROUTES.CATEGORY}?category=${i.url}`}
        >
          <img
            src={i.img}
            alt={i.name}
            className="mx-auto w-full md:w-44 h-24 md:h-32 object-contain "
          />
          <p className="text-xs py-2 md:text-base text-slate-8 text-center font-nunito font-bold ">
            {i.name}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Categories;
