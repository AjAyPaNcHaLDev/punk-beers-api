import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';
 
export const getData=createAsyncThunk("punk/data",async(options:any,thunk:any)=>{
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
    extraReducers:(builder) =>{
        builder.addCase(getData.fulfilled,(state:any,action:any)=>{     
            const newData = action.payload.filter((item:any) => {
                // Check if item already exists in state.data
                return !state.data.some((existingItem:any) => existingItem.id === item.id);
              });
        
              // Push only the new, non-duplicate items to state.data
              state.data.push(...newData);
        })
        
    },
})

export default beerSlice.reducer;
 
