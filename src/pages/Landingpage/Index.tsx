import React from "react";
import DefaultNav from "../../components/DefaultNav";
import Banner from "./Banner";
import Categories from "./Categories";
import TopeSale from "./TopSale";
import FlashSales from "./FlashSales";
import NewProducts from "./NewProducts";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
const Index: React.FC = () => {
  const Products = useSelector((state: any) => state.Products.allProducts);

  return (
    <div className="w-full pt-16 md:pt-20">
      <DefaultNav />
      <Banner />
      <Categories />
      <TopeSale Products={Products} />
      <FlashSales Products={Products} />
      <NewProducts Products={Products} />
      <Footer />
    </div>
  );
};

export default Index;
