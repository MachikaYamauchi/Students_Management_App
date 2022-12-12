import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"});

// to add the token in our request header so that midddleware receive the token under authorization
API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
})

export const signup = (formData) => API.post("/users/signup", formData);
export const login = (formData) => API.post("/users/login", formData);

export const addStudent = (studentData) => API.post("/student", studentData);
export const getStudents = () => API.get("/student")