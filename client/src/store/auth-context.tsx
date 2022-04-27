import { createSlice } from "@reduxjs/toolkit";
const isLoggedInInit = localStorage.getItem("user")? true:false; 
const nameInit = localStorage.getItem("user")
const authState: {
    name: string|null;
    isLoggedIn: boolean;
} = {
    name: nameInit,
    isLoggedIn: isLoggedInInit,
}
const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        login: (state,action)=> {
            const data = action.payload
            console.log(data)
            localStorage.setItem("user", data.name);
            localStorage.setItem("user_id", data.user_id);
            localStorage.setItem("role", data.role);
            state.name= data.name;
            state.isLoggedIn = true;
        },
        logout: function (state) {
            localStorage.clear();
            state.isLoggedIn = false;
            state.name = "";
        }
    }
})
export const authActions = authSlice.actions
export default authSlice.reducer