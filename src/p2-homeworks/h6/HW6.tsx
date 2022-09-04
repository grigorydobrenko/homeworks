import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "../../p1-main/m1-ui/u1-app/App.module.css";
import n from "./HW6.module.css";


function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {

        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const state: string = restoreState<string>('editable-span-value', '')
        setValue(state)
    }

    return (
        <div>
            <hr/>
            <div className={s.mainText}>homeworks 6</div>
            {/*should work (должно работать)*/}
            <div>
                <div className={n.container}>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}

                    />
                </div>
                <div className={n.containerBtns}><SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton></div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
