import * as api from "../api";
import { FETCH_ALL_CARS } from "../constants/actionsTypes";

export const fetchCars = () => async (dispatch) => {
    try {
        const { data } = await api.getCars();

        dispatch({ type: FETCH_ALL_CARS, payload: data });
    } catch (error) {
        console.log(error);
    }
};
