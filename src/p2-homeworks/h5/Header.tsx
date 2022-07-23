import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './pages/pages.module.css'

function Header() {
    return (
        <div className={s.linksContainer}>

            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>
                prejunior
            </NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>
                junior
            </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>
                junior-plus
            </NavLink>
        </div>
    )
}

export default Header
