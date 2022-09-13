import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: "i've heard good things."},
    {id: '2', title: 'Slices...', content: "The more i say slice, the more i want pizza."},
    {id:'3',title: 'WHAT THE FUCK IS HAPPENING', content: "testing dont worry about it."}
]

const postSlice= createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer