import { Route, Routes } from "react-router-dom";
import ROUTES from "./utils/Routes";
import Index from "./pages/Landingpage/Index";
import Category from "./pages/Category/index";
import Product from "./pages/Product/index";
import Cart from "./pages/Cart/index";
import Login from "./pages/Login/LogInPage";
import SignUp from "./pages/SignUp/SignUpPage";
import Page404 from "./pages/404_Page";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Orders from "./pages/Order/index";
import Checkout from "./pages/Checkout/index";
import Profile from "./pages/Profile/index";

import Dashboard from "./Admin/Dashboard/index";
import AdminOrderDetails from "./Admin/OrderDetails/OrderDetails";
import Edit from "./Admin/EditProduct/index";
import AdminLogin from "./Admin/Login/LogInPage";
import AdminProfile from "./Admin/Profile/index";
import AdminUpload from "./Admin/Upload/index";
import AdminProductDetails from "./Admin/ProductDetails/index";
import About from "./pages/About";
import { useDispatch } from "react-redux";
import { logout } from "./Redux/AuthSlice";
import { clearUserData } from "./Redux/User";
const checkTokenExpiry = () => {
  const expiryDate = localStorage.getItem("login_expiry_date");

  if (expiryDate) {
    const expiryTime = parseInt(expiryDate, 10);
    const currentTime = Date.now();

    if (currentTime > expiryTime) {
      // Token is expired
      return true;
    }
  }

  return false; // Token is valid or not present
};

const App = () => {
  const dispatch = useDispatch();

  // Check if the token has expired and clear the state if necessary
  if (checkTokenExpiry()) {
    dispatch(clearUserData());
    dispatch(logout());
    localStorage.removeItem("login_expiry_date");
    localStorage.removeItem("one_store_login");
  }

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
        <Route path={ROUTES.ABOUTUS} element={<About />} />

        {/* ADmin */}

        <Route index path={ROUTES.ADMIN_LANDINGPAGE} element={<Dashboard />} />
        <Route
          index
          path={`${ROUTES.ADMIN_ORDER_DETAILS}/:id`}
          element={<AdminOrderDetails />}
        />
        <Route index path="/admin/product_details/:id" element={<AdminProductDetails />} />
        <Route index path={ROUTES.ADMIN_UPLOAD_PRODUCTS} element={<AdminUpload />} />
        <Route path={`${ROUTES.ADMIN_EDIT_PRODUCT}/:id`} element={<Edit />} />
        <Route path={ROUTES.ADMIN_LOGIN} element={<AdminLogin />} />
        <Route path={ROUTES.ADMIN_PROFILE} element={<AdminProfile />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;