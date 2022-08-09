import {configureStore} from "@reduxjs/toolkit";
import cocktailReducer from "redux/slices/cocktailSlice";

export default configureStore({
    reducer: {
        app: cocktailReducer
    }
})