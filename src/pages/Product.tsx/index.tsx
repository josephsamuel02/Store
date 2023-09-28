import React from "react";
import DefaultNav from "../../components/DefaultNav";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import ProductSpecification from "./ProductSpecifications";
import SimilarProducts from "./SimilarProducts";
import Footer from "../../components/Footer";

const Product: React.FC = () => {
  return (
    <div className="w-full h-full pt-16 md:pt-24  bg-purple-100">
      <DefaultNav />
      <ProductCard />
      <ProductDetails />
      <ProductSpecification />
      <SimilarProducts />
      <Footer />
    </div>
  );
};

export default Product;
