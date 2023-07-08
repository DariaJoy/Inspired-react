import { combineReducers } from "@reduxjs/toolkit";
import navigationReduscer from "./features/navigationSlice";

const rootReducer = combineReducers({
    navigation: navigationReduscer,

});

export default rootReducer;
