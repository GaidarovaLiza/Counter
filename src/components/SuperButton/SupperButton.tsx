import s from './SuperButton.module.css'
import React from "react";

type SuperButtonPropsType = {
    name: string
    callback: () => void
    disable: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        name,
        callback,
        disable
    }
) => {
    return (
        <button className={s.button} disabled={disable} onClick={callback}>{name}</button>
    )
}