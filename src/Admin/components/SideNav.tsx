import React from "react";
import { MdInbox, MdSlideshow, MdStore, MdUpload } from "react-icons/md";

interface AppState {
  page: string;
}

interface AppState2 {
  page: string;
  showSideNav: boolean;
}

const SideNav: React.FC<AppState> = ({ page }) => {
  return (
    <div className="hidden md:flex  w-1/5  mt-12 md:mt-36  h-auto border-r-2  ">
      <ul className="w-full mx-3 py-3  ">
        <li
          className="px-6 my-2 py-3 font-roboto text-lg text-slate-800 flex flex-row items-center shadow-lg rounded hover:shadow-lg hover:bg-purple-200 cursor-pointer"
          style={{
            backgroundColor: page == "orders" ? "rgb(192 132 252 )" : "white",
          }}
          // onClick={() => dispatch(navState("orders"))}
        >
          <MdInbox size="32" className="text-Storepurple mx-2" /> Orders
        </li>
        <li
          className="px-6 my-2 py-3 font-roboto text-lg text-slate-800 flex flex-row items-center shadow-lg rounded hover:shadow-lg hover:bg-purple-200 cursor-pointer"
          style={{
            backgroundColor: page == "store" ? "rgb(192 132 252 )" : "white",
          }}
          // onClick={() => dispatch(navState("store"))}
        >
          <MdStore size="32" className="text-Storepurple mx-2" /> Store
        </li>

        <li
          className="px-6 my-2 py-3 font-roboto text-lg text-slate-800 flex flex-row items-center shadow-lg rounded hover:shadow-lg hover:bg-purple-200 cursor-pointer"
          style={{
            backgroundColor: page == "upload" ? "rgb(192 132 252 )" : "white",
          }}
          // onClick={() => dispatch(navState("upload"))}
        >
          <MdUpload size="32" className="text-Storepurple mx-2" /> Upload
        </li>
      </ul>
    </div>
  );
};

const MobileNav: React.FC<AppState2> = ({ page, showSideNav }) => {
  return (
    <>
      <div
        className=" fixed top-0 left-0 flex flex-col md:hidden  w-2/5 h-full mt-24 shadow  bg-white z-30"
        style={{ visibility: showSideNav == true ? "visible" : "hidden" }}
      >
        <ul className="w-full px-2 py-3  h-full bg-white">
          <li
            className="px-2 my-2 py-2 font-roboto text-lg text-slate-800 flex flex-row items-center shadow-lg rounded hover:shadow-lg hover:bg-purple-200 cursor-pointer"
            style={{
              backgroundColor: page == "orders" ? "rgb(192 132 252 )" : "white",
            }}
            // onClick={() => dispatch(navState("orders"))}
          >
            <MdInbox size="27" className="text-Storepurple mx-2" /> Orders
          </li>
          <li
            className="px-2 my-2 py-2 font-roboto text-lg text-slate-800 flex flex-row items-center shadow-lg rounded hover:shadow-lg hover:bg-purple-200 cursor-pointer"
            style={{
              backgroundColor: page == "store" ? "rgb(192 132 252 )" : "white",
            }}
            // onClick={() => dispatch(navState("store"))}
          >
            <MdStore size="27" className="text-Storepurple mx-2" /> Store
          </li>

          <li
            className="px-6 my-2 py-3 font-roboto text-lg text-slate-800 flex flex-row items-center shadow-lg rounded hover:shadow-lg hover:bg-purple-200 cursor-pointer"
            style={{
              backgroundColor: page == "upload" ? "rgb(192 132 252 )" : "white",
            }}
            // onClick={() => dispatch(navState("upload"))}
          >
            <MdUpload size="32" className="text-Storepurple mx-2" /> Upload
          </li>
        </ul>
      </div>

      <div
        className=" md:hidden fixed bottom-8 left-8 flex flex-col w-16 h-16 rounded-full bg-purple-300 hover:bg-purple-400 shadow-md z-30"
        // onClick={() => dispatch(setSidebarOpen(!sidebarState))}
      >
        <MdSlideshow size="33" className=" m-auto text-purple-900 " />
      </div>
    </>
  );
};

export default SideNav;
export { MobileNav };
