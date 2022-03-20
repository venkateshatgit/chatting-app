import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./store/messageSlice";


export default configureStore({
    reducer: {
        message: messageReducer,
    },
})