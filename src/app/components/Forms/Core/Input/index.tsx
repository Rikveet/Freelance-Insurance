import React, {useState} from "react";
import {Control, Controller, FieldValues, Path, RegisterOptions} from "react-hook-form";
import {motion, Variants} from "framer-motion";
import styles from "./index.module.css";
import sharedStyles from '@/app/components/Forms/Core/styles.module.css';

type props<Name extends FieldValues, FieldType> = {
    type: React.HTMLInputTypeAttribute,
    config?: {
        rows: number,
        cols: number,
        maxChars: number,
    }
    label: string,
    name: Path<Name>,
    control: Control<Name, FieldType>,
    rules: Omit<RegisterOptions<Name, Path<Name>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
}

const variants: Variants = {
    onFocus: {
        borderColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 1)',
        backdropFilter: 'blur(5px)',
    }
}
const variantsDuration = {duration: 0.2, type: 'tween', ease: 'easeInOut'}

function Input<Name extends FieldValues, FieldType>({
                                                        type,
                                                        config,
                                                        label,
                                                        name,
                                                        control,
                                                        rules
                                                    }: props<Name, FieldType>) {
    const [focused, setFocus] = useState(false)
    return (
        <Controller
            {...{control, name, rules}}
            render={({field, fieldState, formState}) => {
                const {touchedFields} = formState
                return (
                    <div className={sharedStyles.Group}>
                        <label
                            className={`${sharedStyles.Label} ${field.value || focused ? sharedStyles.LabelTouched : ""}`}>
                            {label}
                        </label>
                        {
                            config ?
                                <motion.textarea
                                    onFocus={() => {
                                        setFocus(true)
                                    }}
                                    className={` ${styles.TextArea} ${styles.Input} ${touchedFields[field.name] ? fieldState.error ? styles.Invalid : styles.Valid : ''}`}
                                    variants={variants}
                                    transition={variantsDuration}
                                    whileFocus={'onFocus'}
                                    data-limit-row-len={"true"}
                                    rows={config.rows}
                                    cols={config.cols}
                                    maxLength={config.maxChars}
                                    {...field}
                                    value={field.value || ''}
                                />
                                :
                                <motion.input
                                    type={type as React.HTMLInputTypeAttribute}
                                    onFocus={() => {
                                        setFocus(true)
                                    }}
                                    className={`${styles.Input} ${touchedFields[field.name] ? fieldState.error ? styles.Invalid : styles.Valid : ''}`}
                                    variants={variants}
                                    transition={variantsDuration}
                                    whileFocus={'onFocus'}
                                    {...field}
                                    value={field.value || ''}
                                />
                        }
                        {
                            fieldState.error &&
                            <span className={sharedStyles.Error}>
                                {
                                    fieldState.error.message
                                }
                                </span>
                        }
                    </div>
                )
            }}
        />
    )
}

export default Input;

