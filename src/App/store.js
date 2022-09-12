import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/counter/counterSlice'
import postReducer from '../Features/Posts/postSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postReducer

    }

})