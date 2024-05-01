/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import ROUTES from "../utils/Routes";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { db } from "../DB/firebase";
import { MdOutlineLocalGroceryStore, MdPersonOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DefaultNav: React.FC = () => {
  const token = localStorage.getItem("one_store_login");
  const [Cart, setCart] = useState([]);
  const [User, setUser] = useState<any>(false);

  const [Products, setProducts] = useState([]);
  const Navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      await getDocs(collection(db, "user")).then((querySnapshot) => {
        const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        if (newData.Products) {
          const user = newData.Products.map((item: any) => {
            return item.id == token;
          });
          setUser(user);
          console.log(newData);
          console.log(user);
        } else {
          setCart(null);
        }
      });

      await getDocs(collection(db, "cart")).then((querySnapshot) => {
        const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        if (newData.Products) {
          const cart = newData.Products.map((item: any) => {
            return item.cartId == token;
          });
          setCart(cart);
          console.log(newData);
          console.log(cart.Products[0]);
        } else {
          setCart(null);
        }
      });
    } catch (error) {
      console.error(" Unable to login", error);
    }
  };

  const [searchResult, setSearchResult] = useState<any>([{ name: "computer" }]);

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
    const docRef = doc(db, "user", token);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          // Document found, you can access its data

          const user = docSnap.data();

          setUser(true);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  }, []);

  const searchProduct = (word: any) => {
    const result = Products.filter((item: any) => {
      const lower = item.name.toLowerCase();
      if (lower.includes(word)) {
        return item;
      }
    });
    setSearchResult(result);
  };

  return (
    <>
      <div className="fixed top-0 w-full h-auto px-3 md:px-5 py-2 md:py-3 bg-white flex flex-row items-center shadow-lg">
        <a className="w-20 md:w-1/5 md:mx-2 md:px-4 flex items-center" href="/">
          <img
            src="/img/OneStore logo.svg"
            alt=""
            className="w-auto h-auto mx-1 md:mx-2 object-cover"
          />
        </a>
        <div className="w-2/3 md:w-2/3 mx-0 md:mx-auto px-auto flex flex-row items-center">
          <input
            type="text"
            className="w-3/5 md:w-96 h-8 md:h-12 mx-4 mr-0 py-0 px-3 text-lg font-roboto outline-none rounded text-black border-2 border-gray-300 "
            placeholder="search"
            onChange={(e) => searchProduct(e.target.value)}
          />
          <input
            type="button"
            value="Search"
            className="  h-8 md:h-12 mx-0 px-2 md:px-7 text-xs md:text-lg font-roboto text-white bg-Storepurple rounded-sm "
          />
        </div>

        {User ? (
          <div className="w-1/6 mx-auto  md:mx-4 px-1 pt-2 flex flex-row ">
            <a className="w-auto mx-auto cursor-pointer" href={ROUTES.CART}>
              <MdOutlineLocalGroceryStore size={32} className="mx-auto text-slate-700" />
              {Cart && Cart.length > 0 && (
                <div
                  className=" relative top w-5 h-5 items-center bg-red-600 rounded-full"
                  style={{ top: "-70%", right: "-65%" }}
                >
                  <p className=" text-center  text-sm font-roboto text-white ">
                    {Cart.products.length}
                  </p>
                </div>
              )}
            </a>
            <a
              className="w-auto mx-auto flex flex-col items-center cursor-pointer"
              href={ROUTES.ADMIN_PROFILE}
            >
              <h1 className="w-auto mx-auto flex flex-row">
                <MdPersonOutline size={32} className="text-slate-700" />
              </h1>
            </a>
          </div>
        ) : (
          <div className="w-2/6 md:1/5 mx-0 md:mx-4 flex flex-row items-center">
            <a
              className=" md:h-34 mr-1 md:mx-5 px-3 md:px-7 py-1 md:py-2 text-sm md:text-lg font-roboto text-white bg-Storepurple rounded "
              href={ROUTES.LOGIN}
            >
              Login
            </a>
            <a
              className=" md:h-34 mr-1 md:mx-5 px-3 md:px-7 py-1 md:py-2 text-sm md:text-lg font-roboto text-white bg-Storepurple rounded "
              href={ROUTES.SIGNUP}
            >
              Signup
            </a>
          </div>
        )}
      </div>
      {/* 
      <div className="fixed top-16 left-0 right-0 w-3/6 h-auto mx-auto px-3 py-3 bg-white flex flex-col shadow-lg">
        {searchResult &&
          searchResult.map((n: any) => {
            <a
              className="mx-2 p-2 w-auto text-md font-roboto text-black list-none border-b-2 z-20"
              href={`${ROUTES.PRODUCT}?${2}`}
              key={n}
            >
              {searchResult[0].name}
            </a>;
          })}
      </div> */}
    </>
  );
};

export default DefaultNav;
