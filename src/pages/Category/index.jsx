import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Products from "./Products";
import DefaultNav from "../../components/DefaultNav";
import Footer from "../../components/Footer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../DB/firebase";

const Category = () => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  const [categoryProducts, setCategoryProducts] = useState([]);
  const getProductsByCategory = async () => {
    const collectionRef = collection(db, "products");
    const queryRef = query(collectionRef, where("category", "==", category));

    try {
      const querySnapshot = await getDocs(queryRef);
      querySnapshot.forEach((doc) => {
        setCategoryProducts((prev) => [...prev, { id: doc.id, ...doc.data() }]);
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
      <Footer />
    </div>
  );
};

export default Category;
