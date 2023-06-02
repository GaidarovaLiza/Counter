import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {INITIAL_COUNT, MAX_COUNT} from "./components/constants";
import {StartValue} from "./components/StartValue/StartValue";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/state";

export type CounterStateType = {
    count: number;
    minValue: number; // Define the minValue property
    maxValue: number; // Define the minValue property
    minError: boolean;
    maxError: boolean;
}

function App() {
    let count = useSelector<AppRootStateType, CounterStateType>(state => state.count)

    const dispatch = useDispatch()

    const [minValue, setMinValue] = useState<number>(INITIAL_COUNT)
    const [maxValue, setMaxValue] = useState<number>(MAX_COUNT)


    return (
        <div className='wrapper'>
            <div>
                <StartValue minValue={minValue}
                            maxValue={maxValue}
                            setMinValue={setMinValue}
                            setMaxValue={setMaxValue}
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
