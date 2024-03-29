import {createSlice} from "@reduxjs/toolkit"
const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        toggle:0
    },
    reducers:{
        signinToggle(state,action){
            return{...state,"toggle":1}
        },
        signupToggle(state,action){
            return{...state,"toggle":2}
        },
        forgetPasswordToggle(state,action){
            return{...state,"toggle":3}
        },
        closeToggle(state,action){
            return{...state,"toggle":0}
        }
    }
})
export default toggleSlice.reducer
export const {signinToggle,signupToggle,forgetPasswordToggle,closeToggle}=toggleSlice.actions
