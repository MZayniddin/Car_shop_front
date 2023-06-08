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

export const getCars = () => API.get("/car");
export const postCar = (formData) => API.post("/car", formData);

export const getBrands = () => API.get("/brand");

export const signUp = (formData) => API.post("/user/register", formData);
export const signIn = (formData) => API.post("/user/login", formData);
export const updateUser = (formData, user) =>
    API.put(`/user/${user}`, formData);
