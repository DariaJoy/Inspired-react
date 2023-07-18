import { combineReducers } from "@reduxjs/toolkit";
import navigationReduscer from "./features/navigationSlice";
import colorReducer from "./features/colorSlice";
import goodsReducer from "./features/goodsSlice";
import productReducer from "./features/productSlice";
import favoritesSlice from "./features/favoritesSlice";

const rootReducer = combineReducers({
    navigation: navigationReduscer,
    color: colorReducer,
    goods: goodsReducer,
    product: productReducer,
    favorites: favoritesSlice,
});

export default rootReducer;
