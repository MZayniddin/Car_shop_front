import { FETCH_ALL_CARS, POST_CAR } from "../constants/actionsTypes";

const carsReduser = (cars = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CARS:
            return action.payload;
        case POST_CAR:
            return [...cars, action.payload];
        default:
            return [...cars];
    }
};

export default carsReduser;
