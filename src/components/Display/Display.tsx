import s from './Display.module.css'
import {ADD_NAME, INITIAL_COUNT, MAX_COUNT, RESET_NAME} from "../constants";
import React, {Dispatch} from "react";
import {SuperButton} from "../SuperButton/SupperButton";
import {CounterStateType} from "../../App";
import {incValueAC, resetValueAC} from "../../store/Reducers/CountReducer";

type DisplayPropsType = {
    count: CounterStateType
    minValue: number
    maxValue: number
    dispatch: (value: any) => void
}

export const Display: React.FC<DisplayPropsType> = (
    {
        count,
        maxValue,
        minValue,
        dispatch
    }
) => {


    const incCount = () => {
        dispatch(incValueAC(count.count, maxValue))
    }

    const resetCount = () => dispatch(resetValueAC(minValue))

    const finalStyle = count.count === maxValue ? s.red : ''

    return (
        <div>
            <div className={s.value}>
                <span className={finalStyle}>{count.count}</span>
            </div>
            <div className='buttonWrapper'>
                <SuperButton disable={count.count === maxValue} callback={incCount} name={ADD_NAME}/>
                <SuperButton disable={count.count === minValue} callback={resetCount} name={RESET_NAME}/>
            </div>
        </div>
    )
}