import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).accessToken
        }`;
    }

    return req;
});

export const signUp = (formData) => API.post("/user/register", formData);
export const signIn = (formData) => API.post("/user/login", formData);
