import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix


    return (
        <div className={s.affair}>
            {/*{`name: ${props.affair.name} | priority: ${props.affair.priority}`}*/}
            <div className={s.item}>{props.affair.name}</div>
            <div className={s[props.affair.priority]}>{props.affair.priority}</div>
            {/*<button onClick={deleteCallback} className={s.btn}>X</button>*/}
            <SuperButton className={s.btn} onClick={deleteCallback}>
                X
            </SuperButton>
        </div>
    )
}

export default Affair
