import React, { useEffect } from "react";
import DefaultNav from "../../components/DefaultNav";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import ProductSpecification from "./ProductSpecifications";
import SimilarProducts from "./SimilarProducts";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Product: React.FC = () => {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("id");
  const singleProduct = useSelector((state: any) => state.Products.singleProduct);
  const categoryProducts = useSelector((state: any) => state.Products.productsByCategory);
  useEffect(() => {
    // dispatchEvent(GetSingleProduct(productId))
  }, []);

  return (
    <div className="w-full h-full pt-16 md:pt-24  bg-purple-100">
      <DefaultNav />
      <ProductCard singleProduct={singleProduct} />
      <ProductDetails singleProduct={singleProduct} />
      <ProductSpecification singleProduct={singleProduct} />
      <SimilarProducts categoryProducts={categoryProducts} category={singleProduct.category} />
      <Footer />
    </div>
  );
};

export default Product;
