import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import ROUTES from "../../utils/Routes";
import DefaultNav from "../../components/DefaultNav";
import { logIn } from "../../store/authSlice";
import { persistor } from "../../store/store";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import delay from "delay";

const Login: React.FC = () => {
  const signUpStatus = useSelector((state: any) => state.auth.userInfo);
  const dispatch = useDispatch<any>();

  const [userInfo, setUserInfo] = useState<any>({
    email: "",
    password: "",
  });

  const submit = async (e: any) => {
    e.preventDefault();

    dispatch(logIn(userInfo));
    console.log(userInfo);
    if (signUpStatus.status == 200) {
      toast.success(signUpStatus.message);
      await delay(1300);
      window.location.assign("/");
    } else {
      toast.error(signUpStatus.message);
      null;
    }
  };
  // const handleLogout = () => {
  //   persistor.purge();
  //   window.location.replace("/login");
  // };

  return (
    <div className="w-full h-full pt-16 md:pt-24 bg-purple-100">
      <DefaultNav />
      <div className="w-full h-auto md:pb-12 mt-10 flex flex-col md:flex-row items-center  ">
        <div className=" mx-auto py-2 h-auto w-auto md:w-1/2">
          <form
            action=""
            onSubmit={submit}
            className="mx-auto p-10 md:w-96  flex flex-col bg-white rounded-md items-center"
          >
            <div className=" w-full flex h-auto">
              <p className="text-3xl mx-1 font-bold text-slate-800 text-left ">Login</p>
            </div>
            <input
              required
              type="email"
              placeholder="email"
              className=" w-full my-3  h-auto py-2 px-4 text-lg text-slate-800 rounded-md outline-none border-2 border-blue-600  focus:border-purple-700"
              onChange={(e) =>
                setUserInfo((prev: any) => ({ ...prev, email: e.target.value }))
              }
            />
            <input
              required
              type="password"
              placeholder="password"
              className="w-full my-3 h-auto py-2 px-4 text-lg text-slate-800 rounded-md outline-none border-2 border-blue-600 focus:border-purple-700"
              onChange={(e) =>
                setUserInfo((prev: any) => ({ ...prev, password: e.target.value }))
              }
            />
            <div className=" mx-3 w-auto h-auto flex flex-row items-center">
              <input type="checkbox" name="remember me" id="" className="my-3 h-auto" />
              <p className="px-1 text-base text-slate-900">Remember me</p>
            </div>
            <button
              type="submit"
              className="w-full mx-auto px-6 py-2 my-4 text-center text-white  text-xl font-nunito  rounded bg-Storepurple hover:bg-purple-500 bg-gradient-to-r from-purple-500 hover:from-Storepurple transition-colors shadow-md"
            >
              Login
            </button>

            <p className="mx-auto  text-base text-thin text-slate-700">
              <a
                href={ROUTES.FORGOTPASSWORD}
                className="mx-auto text-base underline text-blue-600"
              >
                Forgot password
              </a>
            </p>

            <p className="mx-auto my-3 text-base text-thin text-slate-700">
              Don't have an account?
              <a href={ROUTES.SIGNUP} className="mx-auto text-base  text-blue-800">
                Sign Up
              </a>
            </p>
          </form>
        </div>

        <div className=" m-auto pb-28 mx-auto h-auto w-1/2 items-center ">
          <img
            src="img/undraw_login_re_4vu2.svg"
            alt=""
            className=" m-auto mx-auto md:mx-1  w-full md:w-9/12 "
          />
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Login;
