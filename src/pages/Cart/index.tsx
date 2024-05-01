import React, { useEffect, useState } from "react";
import DefaultNav from "../../components/DefaultNav";
import CartItems from "./CartItems";
import Footer from "../../components/Footer";
import { getDocs, collection, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../DB/firebase";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const token = localStorage.getItem("one_store_login");
  const Navigate = useNavigate();
  const [Cart, setCart] = useState<any>("");
  const [totalPrice, setTotalPrice] = useState(0);

  const getCart = async () => {
    try {
      const targetRef = collection(db, "cart");
      const q = query(targetRef, where("cartId", "==", token));

      await getDocs(q).then((querySnapshot) => {
        const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        if (newData) {
          setCart(newData);
          console.log(newData);
        }
        let t = 0;

        for (let i = 0; i < newData.length; i++) {
          const productTotal = newData[i].inStock * newData[i].price;
          t += productTotal;
        }
        setTotalPrice(t);
      });
    } catch (error) {
      toast.warning(" Unable to login");
    }
  };

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    getCart();
  }, []);

  return (
    <div className="w-full h-full pt-16 md:pt-20  bg-purple-100">
      <DefaultNav />
      {token && <CartItems cartItems={Cart} totalPrice={totalPrice} />}
      <Footer />
    </div>
  );
};

export default Cart;
