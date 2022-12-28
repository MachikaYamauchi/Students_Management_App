import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
});

// to add the token in our request header so that midddleware receive the token under authorization
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signup = (formData) => API.post("/users/signup", formData);
export const login = (formData) => API.post("/users/login", formData);

export const addStudent = (studentData) => API.post("/student", studentData);
export const getStudents = () => API.get("/student");
export const getStudent = (id) => API.get(`/student/${id}`);
export const deleteStudent = (id) => API.delete(`/student/${id}`);
export const updateStudent = (updatedStudentData, id) =>
  API.patch(`/student/${id}`, updatedStudentData);
