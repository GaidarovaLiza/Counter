import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {INITIAL_COUNT, MAX_COUNT} from "./components/constants";
import {StartValue} from "./components/StartValue/StartValue";


function App() {
    const [count, setCount] = useState<number>(INITIAL_COUNT)
    const [minValue, setMinValue] = useState<number>(INITIAL_COUNT)
    const [maxValue, setMaxValue] = useState<number>(MAX_COUNT)


    return (
        <div className='wrapper'>
            <div>
                <StartValue minValue={minValue}
                            maxValue={maxValue}
                            setMinValue={setMinValue}
                            setMaxValue={setMaxValue}
                            setCount={setCount}
                />
            </div>
            <div className="counter">
                <Display minValue={minValue}
                         maxValue={maxValue}
                         count={count}
                         setCount={setCount}/>
            </div>
        </div>
    );
}

export default App;
