import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            const newDate = new Date()
            setDate(newDate)
        }, 1000)
        console.log(id)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const hours = date?.getHours()
    const minutes = date?.getMinutes()
    const seconds = date?.getSeconds()

    const hoursString = hours && hours < 10 ? '0' + hours : hours === 0 ? '00' : hours
    const minutesString = minutes && minutes < 10 ? '0' + minutes : minutes === 0 ? '00' : minutes
    const secondsString = seconds && seconds < 10 ? '0' + seconds : seconds === 0 ? '00' : seconds


    const year = date && date?.getFullYear()
    const month = date && date?.getMonth() + 1
    const day = date && date?.getDate()


    return (
        <div className={s.container}>
            <div className={s.display}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <span>{hoursString}</span><b>:</b><span>{minutesString}</span><b>:</b><span>{secondsString}</span>
            </div>

            {show && (
                <div className={s.display + " " + s.date}>
                    <span>{month}</span>/<span>{day}</span>/<span>{year}</span>
                    {/*{stringDate}*/}
                </div>
            )}

            <div className={s.buttons}><SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton></div>

        </div>
    )
}

export default Clock
