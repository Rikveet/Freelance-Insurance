import {Control, Controller, FieldValues, Path, RegisterOptions} from "react-hook-form";
import React from "react";
import styles from "./index.module.css";
import sharedStyles from '@/app/components/Forms/Core/styles.module.css';
import {IconType} from "react-icons";
import {AnimatePresence, motion} from "framer-motion";

type Option = { text: string, Icon?: IconType, value: string }

type props<Name extends FieldValues, FieldType> = {
    label: string,
    name: Path<Name>,
    control: Control<Name, FieldType>,
    options: { on: Option, off: Option }
    rules: Omit<RegisterOptions<Name, Path<Name>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
}
function Switch<Name extends FieldValues, FieldType>({label, name, control, options, rules}: props<Name, FieldType>) {
    return (
        <Controller
            {...{control, name, rules}}
            render={({field, fieldState}) => {
                const isOn = () => {
                    return options.on.value === field.value
                }
                const {on, off} = options
                const Icon = isOn()? on.Icon : off.Icon;
                return (
                    <div className={`${styles.Group} ${sharedStyles.Group}`}>
                        <label className={`${styles.Label} ${sharedStyles.Label}`}>
                            {label}
                        </label>
                        <button
                            type={'button'}
                            className={styles.Switch}
                            style={isOn()?{
                                background: 'rgba(2, 4, 74, 0.5)',
                                justifyContent: 'flex-end'
                            }:{justifyContent: 'flex-start'}}
                            onClick={() => {
                                // @ts-ignore
                                field.onChange(isOn() ? off.value : on.value)
                            }}>
                            <motion.p className={styles.Text}
                                      initial={{opacity: 0}}
                                      animate={{opacity: 1, transition: {duration: 1}}}
                                      exit={{opacity: 0}}>
                                {field.value}
                            </motion.p>
                            <motion.div key={`icon`} className={styles.Icon} layout>
                                <AnimatePresence>
                                    {Icon &&
                                        <motion.div
                                            key={`${field.value}_icon`}
                                            initial={{y: '100%'}}
                                            animate={{y: '0', transition: {duration: 1}}}
                                            exit={{y: '-100%'}}
                                            style={{
                                                position: 'absolute',
                                                height: '100%',
                                                width: '100%',
                                                padding: '10px',
                                                boxSizing: 'border-box'
                                            }}
                                        >
                                            <Icon style={{height: '100%', width: '100%'}}/>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </motion.div>
                        </button>
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

export default Switch;