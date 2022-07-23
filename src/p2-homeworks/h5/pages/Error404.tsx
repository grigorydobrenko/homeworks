import React from 'react'
import s from './pages.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>404</div>
            <div className={s.main}>Page not found!</div>
            <div className={s.bottom}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
