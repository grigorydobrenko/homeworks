import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppRootState} from "./bll/store";
import n from "../../p1-main/m1-ui/u1-app/App.module.css";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()

    let loading = useSelector<AppRootState, boolean>(state => state.loading.isLoading)

    // console.log(loading.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <div className={n.mainText}>homeworks 10

                {/*should work (должно работать)*/}

                {loading
                    ? (
                        <div>крутилка...</div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
