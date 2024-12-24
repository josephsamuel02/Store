import { useEffect, useState } from "react";
import DefaultNav from "../../components/DefaultNav";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { db } from "../../DB/firebase";
import { doc, getDoc } from "firebase/firestore";

const Product = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState();

  const getProductById = async () => {
    try {
      const Ref = await getDoc(doc(db, "products", id));

      if (Ref.exists()) {
        setSingleProduct(Ref.data());
        // console.log(Ref.data());
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="w-full h-full pt-16 md:pt-24  bg-purple-100">
      <DefaultNav />
      <ProductCard singleProduct={singleProduct} />
      <ProductDetails singleProduct={singleProduct} />

      <Footer />
    </div>
  );
};

export default Product;
