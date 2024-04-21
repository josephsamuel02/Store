import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Footer from "../../components/Footer";
import DefaultNav from "../../components/DefaultNav";
import { ToastContainer, toast } from "react-toastify";
import { updateUser } from "../../store/authSlice";
import "react-toastify/dist/ReactToastify.css";
import delay from "delay";
import { useDispatch, useSelector } from "react-redux";

const Profile: React.FC = () => {
  const updatedUser = useSelector((state: any) => state.auth.userInfo);
  const dispatch = useDispatch<any>();
  const [edit, setEdit] = useState<any>(false);

  useEffect(() => {});

  const [userInfo, setUserInfo] = useState<any>({
    surname: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    state: "",
    lga: "",
  });

  const submit = async (e: any) => {
    e.preventDefault();
    dispatch(updateUser(userInfo));

    if (updatedUser.status == 200) {
      toast.success(updatedUser.message);
      await delay(1300);
      window.location.assign("/profile");
    } else {
      toast.error(updatedUser.message);
    }
  };

  return (
    <>
      <DefaultNav />

      <div className="mx-auto w-full md:w-5/6 h-full mt-20 bg-white overflow-y-scroll scrollbar-hide items-center">
        <div className="mx-auto w-full md:w-96 p-2 mt-16 h-full flex flex-col items-center rounded-md md:shadow-lg">
          <h3 className=" mx-auto text-3xl text-purple-800 font-dayone"> Profile</h3>
          {edit ? (
            <form
              action=""
              onSubmit={submit}
              className="w-4/5 mx-auto md:px-2 md:mx-4 my-1 py-1 flex flex-col items-center"
            >
              <div className="w-full mx-auto  my-1 py-1 flex flex-col items-center ">
                <div className="w-full mx-auto my-1 py-1 flex flex-col">
                  <label className="text-lg text-gray-700 font-nunito"> Surname:</label>
                  <input
                    type="text"
                    placeholder={updatedUser.surname}
                    onChange={(e) =>
                      setUserInfo((prev: any) => ({ ...prev, surname: e.target.value }))
                    }
                    className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                  />
                </div>
                <div className="w-full mx-auto my-1 py-1 flex flex-col">
                  <label className="text-lg text-gray-700 font-nunito"> Middle name:</label>
                  <input
                    type="text"
                    placeholder={updatedUser.name}
                    onChange={(e) =>
                      setUserInfo((prev: any) => ({ ...prev, name: e.target.value }))
                    }
                    className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                  />
                </div>
                <div className="w-full mx-auto my-1 py-1 flex flex-col">
                  <label className="text-lg text-gray-700 font-nunito"> Email:</label>
                  <input
                    type="email"
                    placeholder={updatedUser.email}
                    onChange={(e) =>
                      setUserInfo((prev: any) => ({ ...prev, email: e.target.value }))
                    }
                    className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                  />
                </div>
                <div className="w-full mx-auto my-1 py-1 flex flex-col">
                  <label className="text-lg text-gray-700 font-nunito"> Phone:</label>
                  <input
                    type="tel"
                    pattern="[0-9]{11}"
                    minLength={11}
                    maxLength={11}
                    placeholder={updatedUser.phone}
                    onChange={(e) =>
                      setUserInfo((prev: any) => ({ ...prev, phone: e.target.value }))
                    }
                    className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                  />
                </div>

                <div className="w-full mx-auto my-1 py-1 flex flex-col">
                  <label className="text-lg text-gray-700 font-nunito"> State:</label>
                  <input
                    type="text"
                    placeholder={updatedUser.state}
                    onChange={(e) =>
                      setUserInfo((prev: any) => ({ ...prev, state: e.target.value }))
                    }
                    className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                  />
                </div>

                <div className="w-full mx-auto my-1 py-1 flex flex-col">
                  <label className="text-lg text-gray-700 font-nunito"> LGA:</label>
                  <input
                    type="text"
                    placeholder={updatedUser.lga}
                    onChange={(e) =>
                      setUserInfo((prev: any) => ({ ...prev, lga: e.target.value }))
                    }
                    className=" mx-auto w-full h-10 px-3 text-nunito text-lg text-slate-700 border-2 outline-none border-slate-300 rounded shadow-sm"
                  />
                </div>

                <div className="w-full mx-auto my-1 py-1 flex flex-col">
                  <button
                    type="submit"
                    className=" mx-auto w-full py-2 text-center text-nunito text-2xl text-white bg-purple-700 hover:bg-purple-800 rounded cursor-pointer"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-4/5 mx-auto md:px-2 md:mx-4 my-1 py-1 flex flex-col items-center ">
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> User name:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">
                  {`${updatedUser.surname} ${updatedUser.name}`}
                </p>
              </div>
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Email:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">{updatedUser.email}</p>
              </div>
              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> Phone:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">{updatedUser.phone}</p>
              </div>

              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> State:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">{updatedUser.state}</p>
              </div>

              <div className="w-full mx-auto my-1 py-1 flex flex-col">
                <label className="text-lg text-gray-700 font-nunito"> LGA:</label>
                <p className=" mx-0text-nunito text-lg text-gray-700">{updatedUser.lga}</p>
              </div>
              {updatedUser.role == "admin" && (
                <div className="w-full mx-auto my-1 py-1 flex flex-col">
                  <label className="text-lg text-gray-700 font-nunito"> Role:</label>
                  <p className=" mx-0text-nunito text-lg text-gray-700">{updatedUser.role}</p>
                </div>
              )}
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
      <ToastContainer />
    </>
  );
};

export default Profile;
