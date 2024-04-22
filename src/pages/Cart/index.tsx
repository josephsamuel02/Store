import React, { useEffect, useState } from "react";
import DefaultNav from "../../components/DefaultNav";
import CartItems from "./CartItems";
import Footer from "../../components/Footer";
import { getDocs, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../DB/firebase";

const Cart: React.FC = () => {
  const token = localStorage.getItem("one_store_login");

  const [Cart, setCart] = useState([]);

  const getCart = async () => {
    try {
      await getDocs(collection(db, "cart")).then((querySnapshot) => {
        const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setCart(newData);
      });
    } catch (error) {
      toast.warning(" Unable to login, check credentials");
    }
  };

  useEffect(() => {
    if (!token) {
      window.location.replace("/login");
    }
    getCart();
  }, []);

  return (
    <div className="w-full h-full pt-16 md:pt-20  bg-purple-100">
      <DefaultNav />
      {token && <CartItems cartItems={Cart} />}
      <Footer />
    </div>
  );
};

export default Cart;
