import s from './StartValue.module.css'
import {SuperButton} from "../SuperButton/SupperButton";
import React, {ChangeEvent, useState} from "react";
import {SET_NAME} from "../constants";

type StartValuePropsType = {
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setCount: (count: number) => void
}

export const StartValue: React.FC<StartValuePropsType> = (
    {
        minValue,
        maxValue,
        setMinValue,
        setMaxValue,
        setCount,
    }
) => {
    const [error, setError] = useState(false)


    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
       setMinValue(parseInt(e.currentTarget.value))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
       setMaxValue(parseInt(e.currentTarget.value))
    }

    const setHandler = () => {
        if (maxValue > minValue) {
            setCount(minValue)
            setError(false)
        } else {
            setError(true)

        }
    }

    const errorClassStyle = error ? `${s.error} ${s.input}` : s.input;

    return (
        <div className={s.counter}>
            <div className={s.value}>
                <div className={s.textAndInput}>
                    <p>MAX VALUE:</p>
                    <input value={maxValue} onChange={maxValueHandler} className={errorClassStyle} type="number"/>
                </div>
                {error && <div className={s.errorText}>Max value should be more then Min value!</div>}
                <div className={s.textAndInput}>
                    <p>START VALUE:</p>
                    <input value={minValue} onChange={minValueHandler} className={s.input} type="number"/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={SET_NAME} callback={setHandler} disable={false}/>
            </div>
        </div>
    )
}