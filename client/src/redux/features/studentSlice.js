import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addStudent = createAsyncThunk(
    "studdent/addStudent",
    async ({newStudentdata, navigate, toast}, {rejectWithValue}) => {
        try {
            const response = await api.addStudent(newStudentdata);
            toast.success("Student added successfully.");
            navigate("/");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getStudents = createAsyncThunk(
    "student/getStudents",
    async(_, {rejectWithValue}) => {
        try {
            const response = await api.getStudents();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getStudent = createAsyncThunk(
    "student/getStudent",
    async (id, {rejectWithValue}) => {
        try {
            const response = await api.getStudent(id);
            return response.data;
        } catch(error) {
            return rejectWithValue(error.response.data);
        }   
    }
);

export const deleteStudent = createAsyncThunk(
    "student/deleteStudent",
    async ({id, toast}, {rejectWithValue}) => {
        try {
            const response = await api.deleteStudent(id);
            toast.success("Student Deleted Successfully");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateStudent = createAsyncThunk(
    "student/updateStudent",
    async ({id, newStudentdata, toast, navigate}, {rejectWithValue}) => {
        try {
            const response = await api.updateStudent(newStudentdata, id);
            toast.success("Student Updated Successfully");
            navigate("/");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const studentSlice = createSlice({
    name:"student",
    initialState: {
        student:{},
        students:[],
        error: "",
        loading:false
    },
    extraReducers: {
        [addStudent.pending]:(state, action) => {
            state.loading= true;
        },
        [addStudent.fulfilled]:(state, action) => {
            state.loading = false;
            state.students = [action.payload];
        },
        [addStudent.rejected]:(state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getStudents.pending]:(state, action) => {
            state.loading = true;
        },
        [getStudents.fulfilled]:(state, action) => {
            state.loading = false;
            state.students = action.payload;
        },
        [getStudents.rejected]:(state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getStudent.pending]:(state, action) => {
            state.loading = true;
        },
        [getStudent.fulfilled]:(state, action) => {
            state.loading = false;
            state.student = action.payload;
        },
        [getStudent.rejected]:(state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [deleteStudent.pending]:(state, action) => {
            state.loading = true;
        },
        [deleteStudent.fulfilled]:(state, action) => {
            state.loading = false;
            const { arg: {id} } = action.meta;
            if(id) {
                state.students = state.students.filter((student) => student._id !== id);
            }
        },
        [deleteStudent.rejected] :(state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [updateStudent.pending]:(state, action) => {
            state.loading = true;
        },
        [updateStudent.fulfilled]:(state, action) => {
            state.loading = false;
            const { arg: {id} } = action.meta;
            if(id) {
                state.students = state.students.map((student) => student._id === id ? action.payload :student);
            }
        },
        [updateStudent.rejected] :(state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});

export default studentSlice.reducer;