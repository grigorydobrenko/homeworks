import React, {useState} from 'react';
import {RequestApi} from "./api/RequestAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from './HW13.module.css'


const Request = () => {

    const [status, setStatus] = useState('')
    const [checked, setChecked] = useState(false)

    const onClickButton = () => {
        RequestApi.postRequest(checked)
            .then(res => {
                console.log({...res})
                console.log(res.info)
                setStatus(res.errorText)

            })
            .catch(error => {
                console.log({...error})
                console.log({...error.info})
                setStatus(error.info)
            })
    }

    const onClickCheckBox = () => {
        setChecked(!checked)
    }

    return (
        <div className={s.container}>

            <div className={s.requestComponents}><SuperButton onClick={onClickButton}>Запрос</SuperButton>
                <SuperCheckbox type="checkbox" onClick={onClickCheckBox} checked={checked}/></div>
            <div className={s.response}>{status}</div>
        </div>
    );
};

export default Request;