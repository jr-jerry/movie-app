import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://api.imdbapi.dev/search/titles?query=Stranger%20Things

const BASEURL='https://api.imdbapi.dev';

export const fetchMovie=createAsyncThunk('movie/fetch',async (payload,thunkAPI)=>{
    try{
        const response=await axios.get(`${BASEURL}/titles`);
        const {data}=response;
        return data;
    }catch(error){
        console.log(error);
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const fetchMovieByName=
    createAsyncThunk(
    'movie/fetchByName',
        async(query,thunkAPI)=>{
            try{
                const response=await axios.get(`${BASEURL}/search/titles`,{
                    params:{
                        query:query
                    }
                })
                const {data}=response;
                return data;

            }catch(error ){
                console.log(error);
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
    
    )