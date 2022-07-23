import React from 'react'
import s from "../h5/pages/pages.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../h5/Routes";

function Header() {
    return (
        <div className={s.linksContainer}>

            {/*<NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.active : s.link} >*/}
            {/*    prejunior*/}
            {/*</NavLink>*/}
            {/*<NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>*/}
            {/*    junior*/}
            {/*</NavLink>*/}
            {/*/!*<NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : s.link}>*!/*/}
            {/*    junior-plus*/}
            {/*</NavLink>*/}
        </div>
    )
}

export default Header
