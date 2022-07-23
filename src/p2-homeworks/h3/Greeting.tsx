import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
// @ts-ignore
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error + s.input : s.input // need to fix with (?:)


    return (
        <div>
            <div className={s.container}>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={setNameCallback}

                />
                {/*  <input

                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={setNameCallback}
                />*/}


                {/*<button onClick={addUser} disabled={!name} className={s.btn}>add</button>*/}
                <SuperButton
                    onClick={addUser}
                    disabled={!name}
                    className={s.btn}
                >
                    add
                </SuperButton>
                <span className={s.counter}>{totalUsers}</span>
            </div>
            <div className={s.errorBox + ' ' + s.container}>
                {error && <div className={s.errorMsg}>Name is required!</div>}
            </div>

        </div>

    )
}

export default Greeting
