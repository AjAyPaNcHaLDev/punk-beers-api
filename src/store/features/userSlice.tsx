import { createSlice } from "@reduxjs/toolkit"

export interface user {
    full_name: string;
    email: string;
    isSign: boolean
}


const initialState: user = {
    full_name: "",
    email: "",
    isSign: false
}

const userSlice = createSlice({
    name: "user", initialState, reducers: {
        guestSignIn: (state) => {
            state.full_name = "Johan Dos"
            state.email = "johandos@gmail.com"
            state.isSign = true;
        },
        signOut: (state) => {
            state.isSign = false;
        },
        signIn: (state, action) => {
            state.full_name = action.payload.fullName
            state.email = action.payload.email
            state.isSign = true;
        }
    }
})


export const { signIn, signOut, guestSignIn } = userSlice.actions
export default userSlice.reducer;
