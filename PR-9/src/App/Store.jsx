import { configureStore } from "@reduxjs/toolkit";
import  count  from "../Configure/TaskSlice";

export const store = configureStore({
    reducer: {
        taskKey:count
    }
})