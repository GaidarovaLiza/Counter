import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {SuperButton} from "./components/SuperButton/SupperButton";
import {ADD_NAME, INITIAL_COUNT, MAX_COUNT, RESET_NAME} from "./components/constants";


function App() {
    let [count, setCount] = useState<number>(INITIAL_COUNT)

    const incCount = () => {
        let newValue = count <= 4 ? count + 1 : count
        setCount(newValue)
    }

    const resetCount = () => setCount(0)

    return (
        <div className="App">
            <Display count={count}/>
            <SuperButton disable={count === MAX_COUNT} callback={incCount} name={ADD_NAME}/>
            <SuperButton disable={count === INITIAL_COUNT} callback={resetCount} name={RESET_NAME}/>
        </div>
    );
}

export default App;
