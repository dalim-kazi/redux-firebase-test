import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "../Action/AuthAction";
const initialState = {
    user:null,
    isLoading: false,
    isError:null
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading =action.payload
        },
        setError: (state, action) => {
            state.isError=action.payload
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createUser.pending, (state) => {
            state.isLoading=true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.user = action.payload,
                state.isError = null,
                state.isLoading = false
            })
            .addCase(createUser.rejected, (state, action) => {
                state.user = null 
                state.isError = action.error.message
                state.isLoading = false 
            })
            .addCase(loginUser.pending, (state) => {
             state.isLoading =true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload 
                state.isLoading = false
                state.isError = null
               
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user = null
                state.isLoading = false
                state.isError = action.error.message 
        })
    }
})
export const {setUser,setLoading,setError}= authSlice.actions
export default authSlice.reducer