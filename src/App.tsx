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
    return (
        <div className='wrapper'>
            <div>
                <StartValue/>
            </div>
            <div className="counter">
                <Display/>
            </div>
        </div>
    );
}

export default App;
