import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./utils/Routes";
import Index from "./pages/Landingpage/Index";
import Category from "./pages/Category.tsx";
import Product from "./pages/Product.tsx/index.tsx";
import Cart from "./pages/Cart/index.tsx";
import Login from "./pages/Login/LogInPage.tsx";
import SignUp from "./pages/SignUp/SignUpPage.tsx";
import Page404 from "./pages/404_Page.tsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.tsx";
import Orders from "./pages/Order/index.tsx";
import Checkout from "./pages/Checkout/index.tsx";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index path={ROUTES.LANDINGPAGE} element={<Index />} />
        <Route index path={ROUTES.CATEGORY} element={<Category />} />
        <Route index path={ROUTES.PRODUCT} element={<Product />} />
        <Route index path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.ORDERS} element={<Orders />} />
        <Route path={ROUTES.CHECKOUT} element={<Checkout />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
