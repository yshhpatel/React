import { configureStore } from "@reduxjs/toolkit";
import slice from "../slice/Slice";

export const store = configureStore({
    reducer : {
        datakey : slice
    }
})