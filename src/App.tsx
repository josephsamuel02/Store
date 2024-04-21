import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./utils/Routes";
import Index from "./pages/Landingpage/Index";
import Category from "./pages/Category/index.tsx";
import Product from "./pages/Product.tsx/index.tsx";
import Cart from "./pages/Cart/index.tsx";
import Login from "./pages/Login/LogInPage.tsx";
import SignUp from "./pages/SignUp/SignUpPage.tsx";
import Page404 from "./pages/404_Page.tsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.tsx";
import Orders from "./pages/Order/index.tsx";
import Checkout from "./pages/Checkout/index.tsx";
import Profile from "./pages/Profile/index.tsx";

import Dashboard from "./Admin/Dashboard/index.tsx";
import AdminOrderDetails from "./Admin/OrderDetails/OrderDetails.tsx";
import Edit from "./Admin/EditProduct/index.tsx";
import AdminLogin from "./Admin/Login/LogInPage.tsx";
import AdminProfile from "./Admin/Profile/index.tsx";
import AdminUpload from "./Admin/Upload/index.tsx";
import AdminProductDetails from "./Admin/ProductDetails/index.tsx";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index path={ROUTES.LANDINGPAGE} element={<Index />} />
        <Route index path={ROUTES.CATEGORY} element={<Category />} />
        <Route index path="/product/:id" element={<Product />} />
        <Route index path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.ORDERS} element={<Orders />} />
        <Route path={ROUTES.CHECKOUT} element={<Checkout />} />

        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword />} />

        {/* ADmin */}

        <Route index path={ROUTES.ADMIN_LANDINGPAGE} element={<Dashboard />} />
        <Route index path={ROUTES.ADMIN_ORDER_DETAILS} element={<AdminOrderDetails />} />
        <Route index path="/admin/product_details/:id" element={<AdminProductDetails />} />
        <Route index path={ROUTES.ADMIN_UPLOAD_PRODUCTS} element={<AdminUpload />} />
        <Route path={ROUTES.ADMIN_EDIT_PRODUCT} element={<Edit />} />
        <Route path={ROUTES.ADMIN_LOGIN} element={<AdminLogin />} />
        <Route path={ROUTES.ADMIN_PROFILE} element={<AdminProfile />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
