import { combineReducers } from "redux";

import {
    CartProductsList,
    CartHolderStatus
} from "./Reducers";

const allReducers = combineReducers({
    CartProductsList,
    CartHolderStatus
});

export default allReducers;