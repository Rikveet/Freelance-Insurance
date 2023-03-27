import React, {useState} from "react";
import {Control, Controller, FieldValues, Path, RegisterOptions} from "react-hook-form";
import sharedStyles from '@/app/components/Forms/Core/styles.module.css';
import {motion} from "framer-motion";
import inputStyles from "@/app/components/Forms/Core/Input/index.module.css";

type props<Name extends FieldValues, FieldType> = {
    label: string,
    name: Path<Name>,
    control: Control<Name, FieldType>,
    rules: Omit<RegisterOptions<Name, Path<Name>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">,
    options: { text: string, value?: string }[]
}

function SelectGroup<Name extends FieldValues, FieldType>({label, name, control, options}: props<Name, FieldType>) {
    const [focused, setFocus] = useState(false)
    return (
        <Controller
            control={control}
            rules={{required: {value: true, message: 'Please select an option.'}}}
            render={({field: {value, onChange}, fieldState: {error}}) => {
                return (
                    <motion.div className={sharedStyles.Group}>
                        <label
                            className={`${sharedStyles.Label} ${value || focused ? sharedStyles.LabelTouched : ""}`}>
                            {label}
                        </label>
                        <select className={`${sharedStyles.Select} ${inputStyles.Input} `}
                                {...value ? {value} : {defaultValue: ''}}
                                onFocus={() => {
                                    if (!focused) {
                                        setFocus(true)
                                    }
                                }}
                                style={!!value ? {color: "white"} : {}}
                                onChange={(e) => {
                                    onChange(e.target.value)
                                }}>
                            <option value="" disabled hidden></option>
                            {
                                options.map((option) => (
                                    <option key={option.text} value={option.value || option.text}>{option.text}</option>
                                ))
                            }

                        </select>
                        {error && <span className={sharedStyles.Error}>{error.message}</span>}
                    </motion.div>
                )
            }}
            name={name}
        />
    )
}

export default SelectGroup;

