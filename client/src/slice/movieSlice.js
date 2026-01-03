import {  createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "../api/movies";

let initialState={
    data:null,
    isError:false,
    isLoading:false,
    searchData:""
}

const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        setSearch:(state,action)=>{
            state.searchData=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMovie.pending,(state,action)=>{
            state.isLoading=true;
            
        });
        builder.addCase(fetchMovie.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        builder.addCase(fetchMovie.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            console.log('error',action.payload);
        })
    }
})
export default movieSlice.reducer;
export const {setSearch}=movieSlice.actions;
