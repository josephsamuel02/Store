/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, storage } from "../../DB/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Select from "react-select";
import delay from "delay";
import SuccessCard from "../Upload/successCard";
import ScaleLoader from "react-spinners/ScaleLoader";
import DefaultNav from "../components/DefaultNav";
const Edit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [Product, setProduct] = useState<any>();
  const [setImage] = useState<any>("");
  const [setImageFile] = useState<any>("");
  const [readyToUpload, setReadyToUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const [newValue, setNewValue] = useState<any>();
  const options: any = [
    { value: false, label: "No" },
    { value: true, label: "Yes" },
  ];

  const handleImageSelect = async (e: any) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));

    try {
      const imageRef = ref(storage, `/products_images/${e.target.files[0].name + v4()} `);

      await uploadBytes(imageRef, e.target.files[0])
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url: any) => {
            setNewValue((prev: any) => ({ ...prev, image: url }));
            toast.success("image uploaded");
            setImageFile(e.target.files[0]);
          });
        })
        .catch((error) => {
          toast.error("unable to upload images");
          console.log(error);
        });
    } catch (error) {
      toast.error("Unable to upload image to server");
    }
  };

  const UploadProduct = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const docRef = doc(db, "products", id!);

    // Data to update
    // const newData = {
    //   ...newValue,
    // };
    console.log(newValue);

    updateDoc(docRef, newValue)
      .then(async () => {
        toast.success("Document updated successfully!");
        delay(2000);
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Error updating document");
        console.log(error);
        delay(1300);
        window.location.reload();
      });
  };

  useEffect(() => {
    const docRef = doc(db, "products", id!);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          // Document found, you can access its data

          const data = docSnap.data();
          setProduct(data);
          setNewValue(data);
          console.log(data);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  }, []);

  return (
    <div className="mx-auto w-full md:w-5/6 h-full bg-white overflow-y-scroll scrollbar-hide items-center">
      <DefaultNav />
      {Product && (
        <div className="mx-auto w-full md:w-96 p-2 mt-16  h-full flex flex-col items-center">
          <h3 className="text-2xl text-gray-900 font-bold font-nunito"> Edit Product </h3>
          {newValue.image && (
            <div className="w-auto mx-auto md:mx-4 my-3 py-1 flex flex-col items-center">
              <img
                src={newValue.image}
                alt=""
                className="mx-auto w-48 md:w-72 h-auto object-cover rounded-sm"
              />
            </div>
          )}
          {!newValue.image && (
            <div className="w-auto mx-auto md:mx-4 my-3 py-1 flex flex-col items-center">
              <img
                src={Product.image}
                alt=""
                className="mx-auto w-60 h-48 object-cover border-2 border-slate-200 rounded"
              />
            </div>
          )}

          <div className="w-4/5 mx-auto md:px-2 md:mx-4 my-1 py-1 flex flex-col items-center ">
            <h2 className="text-lg text-gray-900 font-nunito"> category:{Product.category}</h2>

            <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
              <label className="text-lg text-gray-700 font-nunito"> Product image:</label>
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png image/svg"
                multiple={false}
                onChange={(e) => handleImageSelect(e)}
                className=" mx-auto w-full h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
              />
            </div>
            <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
              <label className="text-lg text-gray-700 font-nunito">Product name:</label>
              <textarea
                draggable={false}
                defaultValue={Product.name}
                onChange={(e: any) => setNewValue((prev: any) => ({ ...prev, name: e.value }))}
                className=" my-auto w-full h-16 p-1  text-sm text-slate-800 font-normal focus:outline-none resize-none no-scrollbar border-2 border-gray-300 rounded-md"
              ></textarea>
            </div>

            <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
              <label className="text-lg text-gray-700 font-nunito"> Product Details:</label>
              <textarea
                draggable={false}
                defaultValue={Product.productDetails}
                onChange={(e: any) =>
                  setNewValue((prev: any) => ({ ...prev, productDetails: e.value }))
                }
                className=" my-auto w-full h-20 p-1  text-sm text-slate-800 font-normal focus:outline-none resize-none no-scrollbar border-2 border-gray-300 rounded-md"
              ></textarea>
            </div>
            {/* <div className="w-full mx-auto my-3  flex flex-col">
            <label className="text-lg text-gray-700 font-nunito flex flex-row items-center">
              <ToolTip tipp="what are the key attributes of the product" /> Product Features:
            </label>
            <div className="w-auto mx-auto md:mx-4 my-3  flex flex-col ">
              <div className="w-full h-auto flex flex-col">
                <div>
                  {values &&
                    values.keyFeatures.map((features: any, i: number) => (
                      <div className=" flex flex-row items-center" key={i}>
                        <button
                          type="button"
                          onClick={() => {
                            values.features.splice(i, 1);
                          }}
                          className="m-0.5 p-0.5 w-5 h-5 mr-1 text-center font-bold  rounded-full bg-gray-200 text-red-600"
                        >
                          <MdClose size={15} />
                        </button>
                        <input
                          type="text"
                          name={`features[${i}]`}
                          defaultValue={features}
                          id={`features[${i}]`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // disabled={!editForm}
                          placeholder="Services offered"
                          className="w-64 h-auto p-1 my-1 text-nunito bg-white border-2 outline-none border-gray-300 rounded "
                        />
                      </div>
                    ))}
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        values.features.length < 5 ? values.features.push("") : null;
                      }}
                      className="mx-6 p-0.5 px-2 w-14 h-8 text-center text-nunito text-sm rounded-sm bg-purple-700 text-white"
                    >
                      Add
                    </button>
                  </>
                </div>

                {errors.features && touched.features ? (
                  <p className="py-0.5 text-sm text-red-600 font-roboto">{errors.features}</p>
                ) : null}
              </div>
            </div>
          </div> */}
            <div className="w-full mx-auto my-1 py-1 flex flex-col">
              <label className="text-lg text-gray-700 font-nunito"> Old price ₦:</label>

              <input
                type="tel"
                defaultValue={Product.old_price}
                onChange={(e: any) =>
                  setNewValue((prev: any) => ({ ...prev, old_price: e.value }))
                }
                className=" px-2 mx-1 w-44 h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
              />
            </div>
            <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
              <label className="text-lg text-gray-700 font-nunito">Price ₦ :</label>

              <input
                type="tel"
                defaultValue={Product.price}
                onChange={(e: any) =>
                  setNewValue((prev: any) => ({ ...prev, price: e.value }))
                }
                className=" px-2 mx-1 w-44 h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
              />
            </div>
            <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
              <label className="text-lg text-gray-700 font-nunito">Available Quantity :</label>

              <input
                type="tel"
                defaultValue={Product.inStock}
                onChange={(e: any) =>
                  setNewValue((prev: any) => ({ ...prev, inStock: e.value }))
                }
                className=" px-2 mx-1 w-44 h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
              />
            </div>

            <div className="w-full mx-auto my-1 py-1 flex flex-col">
              <label className="text-lg text-gray-700 font-nunito">
                Allow pay on delivery
              </label>
              <div className=" py-1 flex flex-row  items-center ">
                <Select
                  options={options}
                  defaultInputValue={Product.PayOnDelivery}
                  placeholder={Product.PayOnDelivery == false ? "No" : "Yes"}
                  required
                  onChange={(e: any) =>
                    setNewValue((prev: any) => ({ ...prev, PayOnDelivery: e.value }))
                  }
                  className="w-32"
                />
              </div>
            </div>

            <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
              {!readyToUpload ? (
                <button
                  type="submit"
                  onClick={() => setReadyToUpload(true)}
                  className="mx-auto py-2 px-2 w-full font-bold text-white text-center text-nunito text-lg rounded-sm bg-purple-400"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={UploadProduct}
                  className="mx-auto py-2 px-2 w-full font-bold text-white text-center text-nunito text-lg rounded-sm bg-purple-700"
                >
                  {loading ? (
                    <ScaleLoader
                      color={"white"}
                      aria-label="ScaleLoader"
                      data-testid="ScaleLoader"
                    />
                  ) : (
                    "Upload"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
      <SuccessCard
        showCard={showCard}
        setShowCard={setShowCard}
        Text={"Your Product was successfully uploaded"}
      />
    </div>
  );
};

export default Edit;
