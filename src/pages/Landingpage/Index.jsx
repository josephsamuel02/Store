/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import DefaultNav from "../../components/DefaultNav";
import Banner from "./Banner";
import Categories from "./Categories";
import TopeSale from "./TopSale";
import Footer from "../../components/Footer";
import Electronics from "./Electronics";
import Accessories from "./Accessories";
import Baby from "./Baby";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../../Redux/FetchProducts";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../DB/firebase";

const Index = () => {
  const ProductsData = useSelector((state) => state.Products.products);
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);

  // const fetchPost = async () => {
  //   await getDocs(collection(db, "products")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     setAllProducts(newData);
  //     console.log(newData);
  //   });
  // };
  useEffect(() => {
    dispatch(GetProducts());
    // fetchPost();
    setAllProducts(ProductsData);
  }, []);

  useEffect(() => {
    setAllProducts(ProductsData);
  }, [ProductsData]);

  return (
    <div className="w-full pt-24 md:pt-24 ">
      <DefaultNav />
      <Banner />
      <Categories />
      <TopeSale Products={allProducts} />
      <Baby Products={allProducts} />
      <Accessories Products={allProducts} />
      <Electronics Products={allProducts} />
      <Footer />
    </div>
  );
};

export default Index;