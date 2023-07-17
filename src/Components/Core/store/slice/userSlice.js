import {createSlice} from "@reduxjs/toolkit"
const userSlice=createSlice({
    name:"user",
    initialState:{
        auth:0
    },
    reducers:{
        loginUser(state,action){
            state.auth=1
        },
        logoutUser(state,action){
            state.auth=0;
        }
    }
})
export default userSlice.reducer
export const {loginUser,logoutUser}=userSlice.actions