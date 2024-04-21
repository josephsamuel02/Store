import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import Footer from "../../components/Footer";
import DefaultNav from "../../components/DefaultNav";

const AdminProfile: React.FC = () => {
  const [edit, setEdit] = useState<any>(false);
  return (
    <>
      <DefaultNav />

      <div className="mx-auto w-full md:w-5/6 h-full mt-20 bg-white overflow-y-scroll scrollbar-hide items-center">
        <div className="mx-auto w-full md:w-96 p-2 mt-16 h-full flex flex-col items-center rounded-md md:shadow-lg">
          <h3 className=" mx-auto text-3xl text-purple-800 font-dayone"> Profile</h3>
          {edit ? (
            <div className="w-4/5 mx-auto md:px-2 md:mx-4 my-1 py-1 flex flex-col items-center ">
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Surname:</label>
                <input
                  type="text"
                  onChange={(e) => {
                    null;
                  }}
                  className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                />
              </div>
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Middle name:</label>
                <input
                  type="text"
                  onChange={(e) => {
                    null;
                  }}
                  className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                />
              </div>
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Email:</label>
                <input
                  type="text"
                  onChange={(e) => {
                    null;
                  }}
                  className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                />
              </div>
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Phone:</label>
                <input
                  type="number"
                  onChange={(e) => {
                    null;
                  }}
                  className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                />
              </div>

              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> State:</label>
                <input
                  type="text"
                  onChange={(e) => {
                    null;
                  }}
                  className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                />
              </div>

              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> LGA:</label>
                <input
                  type="text"
                  onChange={(e) => {
                    null;
                  }}
                  className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                />
              </div>

              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <p
                  onChange={(e) => {
                    null;
                  }}
                  className=" mx-auto w-full py-2 text-center text-nunito text-2xl text-white bg-purple-700 hover:bg-purple-800 rounded cursor-pointer"
                >
                  Save
                </p>
              </div>
            </div>
          ) : (
            <div className="w-4/5 mx-auto md:px-2 md:mx-4 my-1 py-1 flex flex-col items-center ">
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> User name:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">Joseph Samuel</p>
              </div>
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Email:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">mrsamd02@gmail.com</p>
              </div>
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Phone:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">09073077717</p>
              </div>

              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> State:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">Lagos</p>
              </div>

              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> LGA:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">Ikeja LGA</p>
              </div>
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Role:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">Admin</p>
              </div>
            </div>
          )}
        </div>

        <div
          className="   mx-6 w-16 h-16 md:w-20  md:h-20  flex flex-col items-center bg-purple-700  hover:bg-purple-800 rounded-full cursor-pointer z-20"
          onClick={() => {
            setEdit(!edit);
          }}
        >
          <h2 className=" m-auto text-center text-nunito text-2xl text-white">
            <MdEdit color="white" size={32} />
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProfile;
