import s from './StartValue.module.css'
import {SuperButton} from "../SuperButton/SupperButton";
import React, {ChangeEvent, Dispatch} from "react";
import {SET_NAME} from "../constants";
import {SuperInput} from "../SuperInput/SuperInput";
import {setValueAC} from "../../store/Reducers/CountReducer";
import {MaxValueStateType, MinValueStateType} from "../../App";
import {setMinErrorAC, setMinValueAC} from "../../store/Reducers/MinValueReducer";
import {setMaxErrorAC, setMaxValueAC} from "../../store/Reducers/MaxValueReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/state";

export const StartValue = () => {
    let minValue = useSelector<AppRootStateType, MinValueStateType>(state => state.minValue)
    let maxValue = useSelector<AppRootStateType, MaxValueStateType>(state => state.maxValue)

    const dispatch = useDispatch()

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = parseInt(e.currentTarget.value);
        if (minValue > 0) {
            dispatch(setMinValueAC(minValue));
            dispatch(setMinErrorAC(false));
        } else {
            dispatch(setMinErrorAC(true));
        }
    };

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = parseInt(e.currentTarget.value)
        if (maxValue >= 0) {
            dispatch(setMaxValueAC(maxValue))
            dispatch(setMaxErrorAC(false))
        } else {
            dispatch(setMaxErrorAC(true))
        }
    }

    const setHandler = () => {
        if (maxValue.maxValue > minValue.minValue) {
            dispatch((setValueAC(minValue.minValue)))
        } else {
            dispatch(setMaxErrorAC(true))
        }
    }

    const minErrorClassStyle = minValue.minError ? `${s.error} ${s.input}` : s.input;
    const maxErrorClassStyle = maxValue.maxError ? `${s.error} ${s.input}` : s.input;

    return (
        <div className={s.counter}>
            <div className={s.value}>
                <div className={s.textAndInput}>
                    <p>MAX VALUE:</p>
                    <SuperInput callback={maxValueHandler} value={maxValue.maxValue} style={maxErrorClassStyle}/>
                </div>
                {maxValue.maxError && <span className={s.errorText}>Incorrect value!</span>}
                <div className={s.textAndInput}>
                    <p>START VALUE:</p>
                    <SuperInput callback={minValueHandler} value={minValue.minValue} style={minErrorClassStyle}/>
                </div>
                {minValue.minError && <span className={s.errorText}>Incorrect value!</span>}
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={SET_NAME} callback={setHandler} disable={false}/>
            </div>
        </div>
    )
}