import s from './StartValue.module.css'
import {SuperButton} from "../SuperButton/SupperButton";
import React, {ChangeEvent, Dispatch, useState} from "react";
import {SET_NAME} from "../constants";
import {SuperInput} from "../SuperInput/SuperInput";
import {setValueAC} from "../../store/Reducers/CountReducer";

type StartValuePropsType = {
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    dispatch: Dispatch<{ type: "SET-VALUE"; payload: { minValue: number; } }>
}

export const StartValue: React.FC<StartValuePropsType> = (
    {
        minValue,
        maxValue,
        setMinValue,
        setMaxValue,
        dispatch,
    }
) => {
    const [minError, setMinError] = useState(false)
    const [maxError, setMaxError] = useState(false)


    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = parseInt(e.currentTarget.value)
        if (minValue > 0) {
            setMinValue(minValue)
            setMinError(false)
        } else {
            setMinError(true)
        }
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = parseInt(e.currentTarget.value)
        if (maxValue > 0) {
            setMaxValue(maxValue)
            setMaxError(false)
        } else {
            setMaxError(true)
        }
    }

    const setHandler = () => {
        maxValue > minValue && dispatch((setValueAC(minValue)))
    }

    const minErrorClassStyle = minError ? `${s.error} ${s.input}` : s.input;
    const maxErrorClassStyle = maxError ? `${s.error} ${s.input}` : s.input;

    return (
        <div className={s.counter}>
            <div className={s.value}>
                <div className={s.textAndInput}>
                    <p>MAX VALUE:</p>
                    <SuperInput callback={maxValueHandler} value={maxValue} style={maxErrorClassStyle}/>
                </div>
                {maxError && <span className={s.errorText}>Incorrect value!</span>}
                <div className={s.textAndInput}>
                    <p>START VALUE:</p>
                    <SuperInput callback={minValueHandler} value={minValue} style={minErrorClassStyle}/>
                </div>
                {minError && <span className={s.errorText}>Incorrect value!</span>}
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={SET_NAME} callback={setHandler} disable={false}/>
            </div>
        </div>
    )
}