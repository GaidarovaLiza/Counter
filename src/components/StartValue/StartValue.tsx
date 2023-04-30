import s from './StartValue.module.css'
import {Value} from "./Value/Value";
import {SuperButton} from "../SuperButton/SupperButton";

export const StartValue = () => {
    return (
        <div className={s.counter}>
            <Value/>
            <div className={s.buttonWrapper}>
            <SuperButton name={'Set'} callback={() => {
            }} disable={false}/>
            </div>
        </div>
    )
}