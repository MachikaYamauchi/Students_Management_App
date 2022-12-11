import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import studentSlice from "./features/studentSlice";

export default configureStore({
    reducer: {
        auth:authSlice,
        student:studentSlice
    }
})

