import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovie=createAsyncThunk('movie/fetch',async (state,action)=>{
    try{
        const response=await axios.get('https://api.imdbapi.dev/titles');
        const {data}=response;
        return data;
    }catch(error){
        console.log(error);
    }
})