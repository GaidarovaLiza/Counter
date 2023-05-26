import s from './Display.module.css'
import {ADD_NAME, INITIAL_COUNT, MAX_COUNT, RESET_NAME} from "../constants";
import React from "react";
import {SuperButton} from "../SuperButton/SupperButton";

type DisplayPropsType = {
    count: number
    minValue: number
    maxValue: number
    setCount: (count: number) => void
}

export const Display: React.FC<DisplayPropsType> = (
    {
        count,
        maxValue,
        minValue,
        setCount
    }
) => {


    const incCount = () => {
        let newValue = count <= maxValue ? count + 1 : count
        setCount(newValue)
    }

    const resetCount = () => setCount(minValue)

    const finalStyle = count === maxValue ? s.red : ''

    return (
        <div>
            <div className={s.value}>
                <span className={finalStyle}>{count}</span>
            </div>
            <div className='buttonWrapper'>
                <SuperButton disable={count === maxValue} callback={incCount} name={ADD_NAME}/>
                <SuperButton disable={count === minValue} callback={resetCount} name={RESET_NAME}/>
            </div>
        </div>
    )
}