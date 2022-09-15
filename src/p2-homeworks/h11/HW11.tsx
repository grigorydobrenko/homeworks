import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import n from "../../p1-main/m1-ui/u1-app/App.module.css";
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<number[]>([value1, 100])


    return (
        <div>
            <hr/>
            <div className={n.mainText}> homeworks 11</div>

            {/*should work (должно работать)*/}
            <div className={n.mainText}>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1} value={value1} setValue2={setValue2} value2={value2[1]}
                            disabled={true}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.container}>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={value2}
                    setValue1={setValue1}
                    onChangeRange={setValue2}
                    min={10}
                    max={110}
                    step={10}
                    disabled={false}
                />

                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
