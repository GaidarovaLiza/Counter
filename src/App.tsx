import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {INITIAL_COUNT, MAX_COUNT} from "./components/constants";
import {StartValue} from "./components/StartValue/StartValue";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/state";

export type CounterStateType = {
    count: number;
    minValue: number;
    maxValue: number;
    minError: boolean;
    maxError: boolean;
}

export type MinValueStateType = {
    minValue: number
    minError: boolean
}

export type MaxValueStateType = {
    maxValue: number
    maxError: boolean
}

function App() {
    let count = useSelector<AppRootStateType, CounterStateType>(state => state.count)
    let minValue = useSelector<AppRootStateType, MinValueStateType>(state => state.minValue)
    let maxValue = useSelector<AppRootStateType, MaxValueStateType>(state => state.maxValue)

    const dispatch = useDispatch()

    return (
        <div className='wrapper'>
            <div>
                <StartValue minValue={minValue}
                            maxValue={maxValue}
                            dispatch={dispatch}
                />
            </div>
            <div className="counter">
                <Display minValue={minValue}
                         maxValue={maxValue}
                         count={count}
                         dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;
