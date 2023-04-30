import s from './Value.module.css'

export const Value = () => {
    return (
        <div className={s.value}>
            <div className={s.textAndInput}>
                <p>MAX VALUE:</p>
                <input className={s.input} type="number"/>
            </div>
            <div className={s.textAndInput}>
                <p>START VALUE:</p>
                <input className={s.input} type="number"/>
            </div>
        </div>
    )
}