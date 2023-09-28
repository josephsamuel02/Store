import React from "react";
import DefaultNav from "../../components/DefaultNav";
import Footer from "../../components/Footer";
import OrderItems from "./OrderItems";

const Orders: React.FC = () => {
  return (
    <div className="w-full h-full pt-16 md:pt-20  bg-purple-100">
      <DefaultNav />
      <OrderItems />
      <Footer />
    </div>
  );
};

export default Orders;
