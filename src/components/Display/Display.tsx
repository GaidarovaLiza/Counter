import s from './Display.module.css'
import {MAX_COUNT} from "../constants";

type PropsType = {
    count: number
}

export const Display = (props: PropsType) => {
    const finalStyle = props.count == MAX_COUNT ? s.red : ''

    return (
        <div className={s.border}>
            <span className={finalStyle}>{props.count}</span>

        </div>
    )
}