import {createSlice} from "@reduxjs/toolkit"

 import type { user } from "./userSlice"
 
 export interface users{
    users:user[]
    }

const initialState:users={
    users:[]
}
 