/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"; 
const Edit: React.FC = () => {
  // const location = useLocation();
  // const productId = new URLSearchParams(location.search).get("id");
   // const Product = Products.filter((p: any) => p.productId === productId);

  // const [setEditForm] = useState(false);
  // const [image, setImage] = useState<any>("");

  // const [setNewValue] = useState({});
  // const { values, handleChange, handleBlur } = useFormik({
  //   initialValues: Product,
  //   validationSchema: siteInfoSchema,

  //   onSubmit: () => {
  //     // console.log(values);
  //     // actions.resetForm();
  //   },
  // });
  return (
    <div className="mx-auto w-full md:w-5/6 h-full bg-white overflow-y-scroll scrollbar-hide items-center">
      {/* <div className="mx-auto w-full md:w-96 p-2 mt-16  h-full flex flex-col   items-center">
        {image ? (
          <div className="w-auto mx-auto md:mx-4 my-3 py-1 flex flex-col items-center">
            <img
              src={values.image}
              alt=""
              className="mx-auto w-48 md:w-72 h-52 object-cover rounded-sm"
            />
          </div>
        ) : (
          <div className="w-auto mx-auto md:mx-4 my-3 py-1 flex flex-col items-center">
            <img
              src={"/img/shopping-cart.png"}
              alt=""
              className="mx-auto w-60 h-48 object-cover border-2 border-slate-200 rounded"
            />
          </div>
        )}

        <div className="w-4/5 mx-auto md:px-2 md:mx-4 my-1 py-1 flex flex-col items-center ">
          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito"> Product image:</label>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png image/svg"
              multiple={false}
              onChange={(e) => {
                e.target.files && e.target.files.length > 0
                  ? setImage(URL.createObjectURL(e.target.files[0]))
                  : "";
                8;
              }}
              className=" mx-auto w-full h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
            />
          </div>
          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito"> Product name:</label>
            <textarea
              draggable={false}
              value={values.name}
              placeholder="product name"
              className=" my-auto w-full h-16 p-1  text-sm text-slate-800 font-normal focus:outline-none resize-none no-scrollbar border-2 border-gray-300 rounded-md"
            ></textarea>
          </div>

          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito"> Product Details:</label>
            <textarea
              draggable={false}
              value={values.productDetails}
              placeholder="Product details"
              className=" my-auto w-full h-20 p-1  text-sm text-slate-800 font-normal focus:outline-none resize-none no-scrollbar border-2 border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="w-full mx-auto my-3  flex flex-col">
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

                {/* {errors.features && touched.features ? (
                  <p className="py-0.5 text-sm text-red-600 font-roboto">{errors.features}</p>
                ) : null} */}
              </div>
            </div>
          </div>
          <div className="w-full mx-auto my-1 py-1 flex flex-col">
            <label className="text-lg text-gray-700 font-nunito"> Old price ₦:</label>

            <input
              type="tel"
              value={values.oldPrice}
              className=" px-2 mx-1 w-44 h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
            />
          </div>
          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito">Price ₦ :</label>

            <input
              type="tel"
              value={values.price}
              className=" px-2 mx-1 w-44 h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
            />
          </div>
          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito">Available Quantity :</label>

            <input
              type="tel"
              value={values.inStock}
              className=" px-2 mx-1 w-44 h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
            />
          </div>

          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito">Allow pay on delivery</label>
            <div className=" py-1 flex flex-row  items-center ">
              <span>Yes:</span>
              <input
                type="checkbox"
                value={"yes"}
                className=" mx-2 w-4 h-4 text-nunito  outline-none border-slate-300 rounded shadow-sm"
              />
            </div>
            <div className=" py-1 flex flex-row  items-center ">
              <span>No:</span>
              <input
                type="checkbox"
                value={"No"}
                className=" mx-2 w-4 h-4 text-nunito  outline-none border-slate-300 rounded shadow-sm"
              />
            </div>
          </div>

          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <button
              type="button"
              onClick={() => {
                null;
              }}
              className="mx-auto py-2 px-2 w-full  text-white text-center text-nunito text-lg rounded-sm bg-purple-700"
            >
              Upload
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Edit;
