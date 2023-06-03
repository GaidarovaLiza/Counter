import {INITIAL_COUNT, MAX_COUNT} from "../../components/constants";
import {CounterStateType} from "../../App";

type CountReducerActionType = setValueACType | incValueACType | resetValueACType

const initialState: CounterStateType = {
    count: INITIAL_COUNT,
    minValue: INITIAL_COUNT,
    maxValue: MAX_COUNT,
    minError: false,
    maxError: false,
}

export const CountReducer = (state = initialState, action: CountReducerActionType) => {
    switch (action.type) {
        case "SET-VALUE": {
            return {
                ...state,
                count: action.payload.minValue
            }
        }
        case "INC-VALUE": {
            return {
                ...state,
                count: action.payload.count <= action.payload.maxValue ? action.payload.count + 1 : action.payload.count
            }
        }
        case "RESET-VALUE": {
            return {
                ...state,
                count: action.payload.minValue
            }
        }
        default: {
            return state
        }
    }
}

export type setValueACType = ReturnType<typeof setValueAC>

export const setValueAC = (minValue: number) => {
    return {
        type: "SET-VALUE",
        payload: {
            minValue
        }
    } as const
}

export type incValueACType = ReturnType<typeof incValueAC>

export const incValueAC = (count: number, maxValue: number) => {
    return {
        type: "INC-VALUE",
        payload: {
            count,
            maxValue
        }
    } as const
}

export type resetValueACType = ReturnType<typeof resetValueAC>

export const resetValueAC = (minValue: number) => {
    return {
        type: "RESET-VALUE",
        payload: {
            minValue
        }
    } as const
}


