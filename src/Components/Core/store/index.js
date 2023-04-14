import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slice/userSlice"
import toggleSlice from "./slice/toggleSlice";
const store=configureStore({
    reducer:{
        users:userSlice,
        toggle:toggleSlice
    }
})
export default store;