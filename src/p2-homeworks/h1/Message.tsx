import React from 'react'
import s from "./Message.module.css";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props:MessagePropsType) {
    return (
        <div className={s.container} >
            <div className={s.ava}><img src={props.avatar} alt="ava" /></div>
            <div className={s.angle}></div>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.wrapper}>
                <div className={s.message && s.text}>{props.message}</div>
                <div className={s.time && s.text}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
