import { combineReducers } from "@reduxjs/toolkit";
import navigationReduscer from "./features/navigationSlice";
import colorReducer from "./features/colorSlice";
import goodsReducer from "./features/goodsSlice"

const rootReducer = combineReducers({
    navigation: navigationReduscer,
    color: colorReducer,
    goods: goodsReducer,
});

export default rootReducer;
