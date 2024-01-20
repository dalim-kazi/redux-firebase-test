import { createAsyncThunk } from "@reduxjs/toolkit";
import { app } from "../../Firebase/Firebase.config";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { toast } from "react-toastify";
const auth = getAuth(app)
 

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password} ) => {
    try {
        console.log(email,password)
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const serializedUser = {
            uid: res.user.uid,
            email:  res.user.email,
            displayName: res.user.displayName,
            emailVerified: res.user.emailVerified,
            photoURL: res.user.photoURL
        };
        toast.success("congratulation!!")
        return serializedUser
    }
    catch (error) {
        toast.error(`${error.message}`)
        return error.message
    }
})

export const loginUser = createAsyncThunk("auth/loginUser", async ({email,password}) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        const serializedUser = {
            uid: res.user.uid,
            email:  res.user.email,
            displayName: res.user.displayName,
            emailVerified: res.user.emailVerified,
            photoURL: res.user.photoURL
        };
        toast.success("congratulation!!")
        return serializedUser
    }
    catch (error) {
        toast.error(`${error.code}`)
        return error.message
    }
})


export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
    try {
        await signOut(auth)
        toast.success("successful")
        return null
  }
    catch (error) {
        toast.error(`${error.code}`)
        return error.message
   }
})