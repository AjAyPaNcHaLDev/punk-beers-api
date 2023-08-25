import {createSlice} from "@reduxjs/toolkit"

 export interface user{
    full_name:string;   
    email:string; 
    isSign:boolean
    }


const initialState:user={
    full_name:"",
    email:"", 
    isSign:false
}

const userSlice=createSlice({
    name:"user",initialState,reducers:{
        guestSignIn:(state)=>{
            state.full_name="Ajay Panchal"
            state.email="ajay8570091@gmail.com" 
            state.isSign=true;
        },
        signOut:(state)=>{
            state.isSign=false;
        },
        signIn:(state,action)=>{
            state={...action.payload}
        }
    }
})


export const  {signIn ,signOut,guestSignIn}=userSlice.actions
export default userSlice.reducer;
