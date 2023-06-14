import s from './Display.module.css'
import {ADD_NAME, INITIAL_COUNT, MAX_COUNT, RESET_NAME} from "../constants";
import React, {Dispatch} from "react";
import {SuperButton} from "../SuperButton/SupperButton";
import {CounterStateType, MaxValueStateType, MinValueStateType} from "../../App";
import {incValueAC, resetValueAC} from "../../store/Reducers/CountReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/state";


export const Display = () => {
    let count = useSelector<AppRootStateType, CounterStateType>(state => state.count)
    let minValue = useSelector<AppRootStateType, MinValueStateType>(state => state.minValue)
    let maxValue = useSelector<AppRootStateType, MaxValueStateType>(state => state.maxValue)

    const dispatch = useDispatch()

    const incCount = () => dispatch(incValueAC(count.count, maxValue.maxValue))

    const resetCount = () => dispatch(resetValueAC(minValue.minValue))

    const finalStyle = count.count === maxValue.maxValue ? s.red : ''

    return (
        <div>
            <div className={s.value}>
                <span className={finalStyle}>{count.count}</span>
            </div>
            <div className='buttonWrapper'>
                <SuperButton disable={count.count === maxValue.maxValue} callback={incCount} name={ADD_NAME}/>
                <SuperButton disable={count.count === minValue.minValue} callback={resetCount} name={RESET_NAME}/>
            </div>
        </div>
    )
}