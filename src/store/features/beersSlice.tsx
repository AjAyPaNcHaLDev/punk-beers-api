import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';
 
const getData=createAsyncThunk("punk/data",async(options:any,thunk:any)=>{
const {page,per_page}=options;
    try{
        const {data} =await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`);
        return data;
    }catch(err){
        thunk.rejectWithValue("Something went wrong.")
    }
})

const initialState:any={
   data:[]
}

 
const beerSlice=createSlice({
    name:'beer',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getData.fulfilled,(state:any,action:any)=>{

        })
        
    },
})

 
