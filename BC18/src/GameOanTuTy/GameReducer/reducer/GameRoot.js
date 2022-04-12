import { GameReducer } from "../reducer/GameOanReducer";
import { combineReducers } from "redux";


export const rootGame = combineReducers({
    GameReducer,
})