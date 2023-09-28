import React, { useEffect } from "react";
//import { useLocation } from "react-router-dom";
import NewProducts from "./NewProducts";
import NewDeals from "./NewDeals";
import Products from "./Products";
import DefaultNav from "../../components/DefaultNav";
import Footer from "../../components/Footer";

const Category: React.FC = () => {
  // const location = useLocation();
  // const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    //     dispatchEvent(GetCategory(category))
  }, []);

  return (
    <div className="w-full h-full px-1 pt-16 md:pt-24 bg-purple-100">
      <DefaultNav />
      <Products />
      <NewProducts />
      <NewDeals />
      <Footer />
    </div>
  );
};

export default Category;
