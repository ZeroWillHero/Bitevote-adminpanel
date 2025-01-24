import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBar/createSlice";
import authReducer from './authentication/createSlice';
export default configureStore({
    reducer: {
        sideBar: sideBarReducer,
        auth: authReducer
    }
});