import React from "react";
import DefaultNav from "../../components/DefaultNav";
import Footer from "../../components/Footer";
import OrderItems from "./OrderItems";
import { useSelector } from "react-redux";

const Orders: React.FC = () => {
  const Order = useSelector((state: any) => state.Order.allOrders);
  return (
    <div className="w-full h-full pt-16 md:pt-20 bg-purple-100">
      <DefaultNav />
      <OrderItems Order={Order} />
      <Footer />
    </div>
  );
};

export default Orders;
