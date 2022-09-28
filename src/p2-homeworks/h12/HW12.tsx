import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";
import {AppRootState} from "../h10/bll/store";

const themes = ['dark', 'red', 'some', 'pink', 'yellow'];

function HW12() {
    const theme = useSelector<AppRootState, string>(state => state.themeReducer.color); // useSelector
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const onChangeCallback = (color: string) => {
        dispatch(changeThemeAC(color))
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
