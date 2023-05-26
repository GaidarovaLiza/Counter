import React, {ChangeEvent} from 'react';

type SuperInputPropsType={
    callback: (e : ChangeEvent<HTMLInputElement>)=> void
    value: number
    style: string
}

export const SuperInput: React.FC<SuperInputPropsType> = (
    {
        callback,
        value,
        style
    }
) => {

    const onChangeHandler=(e : ChangeEvent<HTMLInputElement>)=>{
        callback(e)
    }

    return (
        <input value={value} onChange={onChangeHandler} className={style} type="number"/>
    );
};

