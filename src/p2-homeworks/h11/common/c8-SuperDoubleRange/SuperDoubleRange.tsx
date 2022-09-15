import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: number[]
    setValue1: (value: number) => void
    min: number
    max: number
    step: number
    disabled: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, setValue1, value,
         min, max, step, disabled
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: number | number[]) => {

        // @ts-ignore
        onChangeRange && onChangeRange(newValue as number[]);
        // @ts-ignore
        setValue1(newValue[0])
        // setValue1(value2[0])
    };


    return (
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={(!disabled)? handleChange : () => {}}
            valueLabelDisplay="auto"
            step={step}
            disabled={disabled}
            min={min}
            max={max}
            // getAriaValueText={valuetext}
        />
    )
}

export default SuperDoubleRange
