import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../api";

export const signup = createAsyncThunk(
    "auth/signup",
    async({formValue, navigate, toast}, {rejectWithValue}) => {
        try {
            const response = await api.signup(formValue); // fetch the response from server & send the formValue to server
            navigate("/");
            toast.success("SignUp Successfully");
            return response.data;
        } catch(error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async({formValue, navigate, toast}, {rejectWithValue}) => {
        try {
            const response = await api.login(formValue);
            navigate("/");
            toast.success("Login Succssfully");
            return response.data;
        } catch(error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        error:"",
        loading:false
    },
    reducers: {
        // keep the user loggedin even though refresh the screen
        // use setUser at App.js
        setUser: (state, action) => { 
            state.user = action.payload
        },
        // logout funtion
        // use setLogout at Header.js compo
        setLogout :(state, action) => {
            localStorage.clear();
            state.user = null;
        }
    },
    extraReducers: {
        [signup.pending]:(state, action) => {
            state.loading = true;
        },
        [signup.fulfilled]:(state, action) => {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem("profile", JSON.stringify({...action.payload}))
        },
        [signup.rejected]:(state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem("profile", JSON.stringify({...action.payload}));
        },
        [login.rejected]:(state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }

    }
});


export default authSlice.reducer;
export const {setUser, setLogout} = authSlice.actions; 