/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import DefaultNav from "../../components/DefaultNav";
import Banner from "./Banner";
import Categories from "./Categories";
import TopeSale from "./TopSale";
import Footer from "../../components/Footer";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../DB/firebase";
import Electronics from "./Electronics";
import Accessories from "./Accessories";
import Baby from "./Baby";

const Index: React.FC = () => {
  // const Products = useSelector((state: any) => state.Products.productsByCategory.data);

  const [allProducts, setAllProducts] = useState<any>("");

  const fetchPost = async () => {
    await getDocs(collection(db, "products")).then((querySnapshot) => {
      const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setAllProducts(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="w-full pt-24 md:pt-24 ">
      <DefaultNav />
      <Banner />
      <Categories />
      <TopeSale Products={allProducts} />
      <Accessories Products={allProducts} />
      <Baby Products={allProducts} />
      <Electronics Products={allProducts} />
      <Footer />
    </div>
  );
};

export default Index;
