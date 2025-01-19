import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authentication/createSlice";

export default configureStore({
    reducer: {
        auth: authSlice
    }
});