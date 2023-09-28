import React from "react";
import DefaultNav from "../../components/DefaultNav";
import Banner from "./Banner";
import Categories from "./Categories";
import TopeSale from "./TopSale";
import FlashSales from "./FlashSales";
import NewProducts from "./NewProducts";
import Footer from "../../components/Footer";
const Index: React.FC = () => {
  return (
    <div className="w-full pt-16 md:pt-24">
      <DefaultNav />
      <Banner />
      <Categories />
      <TopeSale />
      <FlashSales />
      <NewProducts />
      <Footer />
    </div>
  );
};

export default Index;
