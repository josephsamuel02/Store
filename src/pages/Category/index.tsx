import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewProducts from "./NewProducts";
import NewDeals from "./NewDeals";
import Products from "./Products";
import DefaultNav from "../../components/DefaultNav";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../DB/firebase";

const Category: React.FC = () => {
  const location = useLocation();
  const category: any = new URLSearchParams(location.search).get("category");

  const dispatch = useDispatch();
  // const productId: any = new URLSearchParams(location.search).get("id");

  const [categoryProducts, setCategoryProducts] = useState<any>([]);
  const getProductsByCategory = async () => {
    const collectionRef = collection(db, "products");
    const queryRef = query(collectionRef, where("category", "==", category));

    try {
      const querySnapshot = await getDocs(queryRef);
      querySnapshot.forEach((doc) => {
        setCategoryProducts((prev: any) => [...prev, doc.data()]);
      });
    } catch (error) {
      toast.error("unable to get data");
    }
  };

  useEffect(() => {
    getProductsByCategory();
  }, []);

  return (
    <div className="w-full h-full px-1 pt-16 md:pt-24 bg-purple-100">
      <DefaultNav />
      <Products category={category} categoryProducts={categoryProducts} />
      {/*  <NewProducts categoryProducts={categoryProducts} />
      <NewDeals categoryProducts={categoryProducts} /> */}
      <Footer />
    </div>
  );
};

export default Category;
