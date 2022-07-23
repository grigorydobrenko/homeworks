import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from '../../p1-main/m1-ui/u1-app/App.module.css'


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser = {
            _id: v1(),
            name: name,
        }

        setUsers([...users, newUser]) // need to fix
        console.log(users)
    }

    return (
        <div>
            <hr/>
            <div className={s.mainText}>homeworks 3</div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
