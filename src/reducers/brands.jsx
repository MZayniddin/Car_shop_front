import { FETCH_ALL_BRANDS } from "../constants/actionsTypes";

const brandsReducer = (brands = [], action) => {
    switch (action.type) {
        case FETCH_ALL_BRANDS:
            return action.payload;

        default:
            return brands;
    }
};

export default brandsReducer;
