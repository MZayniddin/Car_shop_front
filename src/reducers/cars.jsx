import { FETCH_ALL_CARS } from "../constants/actionsTypes";

const carsReduser = (cars = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CARS:
            return action.payload;

        default:
            return [...cars];
    }
};

export default carsReduser;
