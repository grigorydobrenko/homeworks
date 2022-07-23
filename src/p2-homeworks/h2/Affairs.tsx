import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const pickAll = props.filter === 'all' ? s.active : '';
    const pickHigh = props.filter === 'high' ? s.active : '';
    const pickMiddle = props.filter === 'middle' ? s.active : '';
    const pickLow = props.filter === 'low' ? s.active : '';


    return (
        <div className={s.affairs}>
            {mappedAffairs}

            <div className={s.buttons}>

                <SuperButton onClick={setAll} className={pickAll}>All</SuperButton>
                <SuperButton onClick={setHigh} className={pickHigh}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={pickMiddle}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={pickLow}>Low</SuperButton>
                {/*<button onClick={setAll} className={pickAll}>All</button>*/}
               {/* <button onClick={setHigh} className={pickHigh}>High</button>
                <button onClick={setMiddle} className={pickMiddle}>Middle</button>
                <button onClick={setLow} className={pickLow}>Low</button>*/}
            </div>
        </div>
    )
}

export default Affairs
