import { combineReducers } from "@reduxjs/toolkit";
import navigationReduscer from "./features/navigationSlice";
import colorReducer from "./features/colorSlice";
import goodsReducer from "./features/goodsSlice";
import productReducer from "./features/productSlice";
import favoritesReducer from "./features/favoritesSlice";
import cartReducer from "./features/cartSlice"

const rootReducer = combineReducers({
    navigation: navigationReduscer,
    color: colorReducer,
    goods: goodsReducer,
    product: productReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
});

export default rootReducer;
