import { configureStore } from "@reduxjs/toolkit";
import  api  from "../Configure/ApiSlice";

 export const store = configureStore({
    reducer: {
        apiKey:api
    }
 })