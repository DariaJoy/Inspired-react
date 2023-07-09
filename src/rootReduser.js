import { combineReducers } from "@reduxjs/toolkit";
import navigationReduscer from "./features/navigationSlice";
import colorReduser from "./features/colorSlice"

const rootReducer = combineReducers({
    navigation: navigationReduscer,
    color: colorReduser

});

export default rootReducer;
