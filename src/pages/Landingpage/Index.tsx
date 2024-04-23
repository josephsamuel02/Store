import React, { useEffect, useState } from "react";
import DefaultNav from "../../components/DefaultNav";
import Banner from "./Banner";
import Categories from "./Categories";
import TopeSale from "./TopSale";
import FlashSales from "./FlashSales";
import NewProducts from "./NewProducts";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../DB/firebase";

const Index: React.FC = () => {
  const token = localStorage.getItem("one_store_login");
  const userId: any = useSelector((state: any) => state.auth.userInfo.userId);
   // const Products = useSelector((state: any) => state.Products.productsByCategory.data);

  const [allProducts, setAllProducts] = useState();
 
  const priceFormat = new Intl.NumberFormat("en-US");
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
    <div className="w-full pt-16 md:pt-20">
      <DefaultNav />
      <Banner />
      <Categories />
      <TopeSale Products={allProducts} />
      {/* <FlashSales Products={allProducts} />
      <NewProducts Products={allProducts} /> */}
      <Footer />
    </div>
  );
};


export default Index;
