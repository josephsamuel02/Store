import React from "react";
import DefaultNav from "../../components/DefaultNav";
import Orders from "./Orders";
import Store from "./Store";
import { useSelector } from "react-redux";
import Upload from "../Upload";
import SideNav, { MobileNav } from "../components/SideNav";

const Dashboard: React.FC = () => {
  const sidebarState = useSelector((state: any) => state.app.sidebarOpen);
  const page = useSelector((state: any) => state.app.navState);

  return (
    <div className="w-full h-full">
      <DefaultNav />

      <div className="w-full h-full flex flex-row">
        <SideNav page={page} />
        <MobileNav page={page} showSideNav={sidebarState} />
        {page == "orders" ? <Orders /> : " "}
        {page == "store" ? <Store /> : ""}
        {page == "upload" ? <Upload /> : ""}
      </div>
    </div>
  );
};

export default Dashboard;
