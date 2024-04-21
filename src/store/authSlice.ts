import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../DB/firebase";
import { addDoc, collection } from "firebase/firestore";
const auth: any = `Bearer ${localStorage.getItem("AuthToken")}`;
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: auth,
  },
};

export const registerUser = createAsyncThunk("auth/signup", async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_ONESTORE_API}/signup`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return {
      status: 500,
      message: "Unable to signup, Check your form details",
      error: error,
    };
  }
});

const BlogPost = async (blogPost: any) => {
  try {
    // const imageRef = ref(storage, `/blog_images/${selectedImage.name + uuid()} `);

    // await uploadBytes(imageRef, selectedImage)
    //   .then((snapshot) => {
    //     getDownloadURL(snapshot.ref).then((url) => {
    //       setBlogPost((prev: any) => ({ ...prev, image: url }));
    //     });
    //   })
    //   .catch((error) => {
    //     toast.error("unable to upload images");
    //     console.log(error);
    //   });

    if (blogPost.image !== "") {
      const docRef = await addDoc(collection(db, "/user"), blogPost);
      if (!docRef) {
        return {
          status: 500,
          message: "Unable to access database",
        };
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: "Unable to signup, Check your form details",
      error: error,
    };
  }
};

export const logIn = createAsyncThunk("auth/login", async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_ONESTORE_API}/login`,
      data,
      config
    );

    const { userId, status, message, token, surname, name, phone, lga, state, role } =
      response.data;
    localStorage.setItem("AuthToken", token);
    return {
      status,
      message,
      userId,
      surname,
      name,
      phone,
      lga,
      state,
      role,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Unable to login",
      error: error,
    };
  }
});

export const updateUser = createAsyncThunk("auth/update", async (data: any) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_ONESTORE_API}/update_user`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return {
      status: 500,
      message: "Unable to update user",
      error: error,
    };
  }
});

export const forgetPassword = createAsyncThunk("auth/login", async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_ONESTORE_API}/login`,
      data,
      config
    );

    const { id, status, message, token } = response.data;
    localStorage.setItem("AuthToken", token);
    return {
      status,
      message,
      userId: id,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Unable to login",
      error: error,
    };
  }
});

const initialState: any = {
  loading: false,
  userInfo: {},
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }),
      builder.addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = false;
        state.error = payload;
      });

    builder.addCase(logIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(logIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }),
      builder.addCase(logIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }),
      builder.addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
