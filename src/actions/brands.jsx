import * as api from "../api";
import { FETCH_ALL_BRANDS } from "../constants/actionsTypes";

export const fetchBrands = () => async (dispatch) => {
    try {
        const { data } = await api.getBrands();

        dispatch({ type: FETCH_ALL_BRANDS, payload: data });
    } catch (error) {
        console.log(error);
    }
};
