import * as api from "../api";
import { FETCH_ALL_CARS, POST_CAR } from "../constants/actionsTypes";

export const fetchCars = () => async (dispatch) => {
    try {
        const { data } = await api.getCars();

        dispatch({ type: FETCH_ALL_CARS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createCar = (formData) => async (dispatch) => {
    try {
        const { data } = await api.postCar(formData);
        dispatch({ type: POST_CAR, payload: data });
    } catch (error) {
        console.log(error);
    }
};
