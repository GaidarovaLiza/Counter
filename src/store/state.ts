import {combineReducers, legacy_createStore} from "redux";
import {CountReducer} from "./Reducers/CountReducer";
import {MinValueReducer} from "./Reducers/MinValueReducer";
import {MaxValueReducer} from "./Reducers/MaxValueReducer";

const rootReducer = combineReducers({
    count: CountReducer,
    minValue: MinValueReducer,
    maxValue: MaxValueReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
