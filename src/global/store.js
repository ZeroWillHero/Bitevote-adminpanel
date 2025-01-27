import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBar/createSlice";
import authReducer from './authentication/createSlice';
import customizableBtnReducer from './AddForm/customizableButtonSlice';
export default configureStore({
    reducer: {
        sideBar: sideBarReducer,
        auth: authReducer,
        add: customizableBtnReducer
    }
});