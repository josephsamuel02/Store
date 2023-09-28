import React from "react";
import DefaultNav from "../../components/DefaultNav";
import CartItems from "./CartItems";
import Footer from "../../components/Footer";

const Cart: React.FC = () => {
  return (
    <div className="w-full h-full pt-16 md:pt-20  bg-purple-100">
      <DefaultNav />
      <CartItems />
      <Footer />
    </div>
  );
};

export default Cart;
