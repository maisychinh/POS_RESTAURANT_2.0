import { createSlice } from "@reduxjs/toolkit";

const showHideSlice = createSlice({
    name: 'show-hide-slice',
    initialState:{
        item: {
            id: '',
            name: '',
            image: '',
            price: 0,
            extras: [],
        },
        showDetail: false,
        showCart: false,
        showNotification: false,
        success: false
    },
    reducers:{  
        showDetailHandler :(state,action)=>{
            state.item = action.payload
            state.showCart = false;
            state.showNotification = false;
            state.showDetail = true;
        },
        hideDetailHandler :(state)=>{
            state.showDetail =false;
            state.showCart = false;
            state.showNotification = false;
            state.success = false;
            state.item={
                id:'',
                name: '',
                image: '',
                price: 0,
                extras: []
            }
        },
        showCartHandler :(state)=>{
            state.showDetail = false;
            state.showNotification = false;
            state.showCart = true;
        },
        showNotificationHandler:  (state,action)=>{
            if(action.payload>0){
                state.success = true;
            }
            state.showDetail = false;
            state.showCart =false;
            state.showNotification = true;
        }
    }
})

export const showHideActions = showHideSlice.actions
export default showHideSlice.reducer