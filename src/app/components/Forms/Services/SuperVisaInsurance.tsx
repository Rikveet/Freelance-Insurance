import {useFieldArray, useForm} from "react-hook-form";
import Input from "@/app/components/Forms/Core/Input";
import {FaFemale, FaMale} from "react-icons/fa";
import React, {useState} from "react";
import {IoPersonAdd} from "react-icons/io5";
import Switch from "@/app/components/Forms/Core/Switch";
import {AnimatePresence, motion} from "framer-motion";
import SelectGroup from "@/app/components/Forms/Core/SelectGroup";
import slide from "@/app/components/Motions/Slide";
import {AiOutlineUserDelete} from "react-icons/ai";
import Slider from "@/app/components/Forms/Core/Slider";
import SliderOptions from "@/app/components/Forms/Core/Slider/SliderOptions";
import InputContainer from "@/app/components/Forms/Core/InputContainer";
import {props} from "@/app/components/Forms/Services/DataTypes";
import Submit from "@/app/components/Forms/Core/Submit";
import {
    Additional_Info_Validation,
    Name_Validation,
    Select_Group_Validation,
    Switch_Validation
} from "@/app/components/Forms/Core/Validation";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";

export type Data = {
    'parent/grandparent info': {
        name: string,
        sex: 'male' | 'female',
        'age group': '40-54' | '55-59' | '60-64' | '65-69' | '70-74' | '75-79' | '80-85',
        'pre medical condition': 'yes' | 'no',
        'recent medicine changes'?: 'yes' | 'no',
        'z additional info'?: string
    }[]
}

const SuperVisaInsurance = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {
                "parent/grandparent info": [{
                    sex: 'male',
                    'pre medical condition': 'no',
                    'recent medicine changes': 'no'
                }]
            },
            mode: 'onSubmit',
            shouldFocusError: false
        }
    );
    const {fields, append, remove} = useFieldArray({
        control,
        name: 'parent/grandparent info',
    })
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    return (
        <form key={'super_visa_insurance'}
              onSubmit={handleSubmit(() => {
                  if (onSubmit)
                      onSubmit(watch())
              })}>
            <SliderOptions
                add={{
                    Icon: IoPersonAdd,
                    disabled: watch()["parent/grandparent info"].length < 4,
                    onClick: () => {
                        append({
                            name: '', sex: 'male', 'age group': '40-54', 'pre medical condition': 'no',
                            'recent medicine changes': 'no'
                        })
                        setSelectedIndex(fields.length)
                    }
                }}
                remove={{
                    Icon: AiOutlineUserDelete,
                    disabled: watch()['parent/grandparent info'].length > 1,
                    onClick: () => {
                        remove(selectedIndex);
                        if (selectedIndex >= watch()['parent/grandparent info'].length) {
                            setSelectedIndex(selectedIndex - 1)
                        }
                    }
                }}
                options={
                    watch()["parent/grandparent info"].map((patient, index) => ({
                        text: patient.name,
                        selected: index === selectedIndex,
                        isInvalid: !!(errors["parent/grandparent info"] && errors["parent/grandparent info"][index]),
                        onClick: () => {
                            setSelectedIndex(index)
                        }
                    }))
                }/>
            <p className={sharedStyles.FormTitle}>Information about the person</p>
            <Slider showIndex={selectedIndex} length={fields.length}>
                {
                    fields.map((field, index) => {
                        return (
                            <InputContainer key={field.id} direction={'col'}>
                                <Input type={'text'}
                                       label={'name'}
                                       name={`parent/grandparent info.${index}.name`}
                                       control={control}
                                       rules={Name_Validation()}
                                />
                                <SelectGroup label={'Select an age group'}
                                             name={`parent/grandparent info.${index}.age group`}
                                             control={control}
                                             rules={Select_Group_Validation()}
                                             options={
                                                 [
                                                     {text: '40-54'},
                                                     {text: '55-59'},
                                                     {text: '60-64'},
                                                     {text: '65-69'},
                                                     {text: '70-74'},
                                                     {text: '75-79'},
                                                     {text: '80-85'}
                                                 ]
                                             }/>
                                <Switch
                                    label={'sex'}
                                    name={`parent/grandparent info.${index}.sex`}
                                    control={control}
                                    options={{
                                        on: {text: 'female', Icon: FaFemale, value: 'female'},
                                        off: {text: 'male', Icon: FaMale, value: 'male'}
                                    }}
                                    rules={Switch_Validation()}
                                />
                                <Switch
                                    label={'pre-medical conditions'}
                                    name={`parent/grandparent info.${index}.pre medical condition`}
                                    control={control}
                                    options={{
                                        on: {text: 'yes', value: 'yes'},
                                        off: {text: 'no', value: 'no'}
                                    }}
                                    rules={Switch_Validation()}
                                />

                                <AnimatePresence mode={'popLayout'} initial={false}>
                                    {
                                        watch()["parent/grandparent info"][index]?.["pre medical condition"] === 'yes' &&
                                        <>
                                            <motion.div
                                                key={'recent_medicine_changes'}
                                                {...slide({enter: 'right', exit: 'bottom'})}
                                                transition={{duration: 1}}
                                            >
                                                <Switch
                                                    label={'Recent medicine changes'}
                                                    name={`parent/grandparent info.${index}.recent medicine changes`}
                                                    control={control}
                                                    options={{
                                                        on: {text: 'yes', value: 'yes'},
                                                        off: {text: 'no', value: 'no'}
                                                    }}
                                                    rules={Switch_Validation()}
                                                />
                                            </motion.div>
                                            {watch()["parent/grandparent info"][index]?.["recent medicine changes"] === 'yes' &&
                                                <motion.div
                                                    key={'additional_info'}
                                                    {...slide({enter: 'right', exit: 'bottom'})}
                                                    transition={{duration: 1}}
                                                >
                                                    <Input type={'textarea'}
                                                           config={{rows: 5, cols: 20, maxChars: 250}}
                                                           label={'Please briefly explain the changes'}
                                                           name={`parent/grandparent info.${index}.z additional info`}
                                                           control={control}
                                                           rules={Additional_Info_Validation()}
                                                    />
                                                </motion.div>
                                            }
                                        </>
                                    }
                                </AnimatePresence>
                            </InputContainer>)
                    })
                }
            </Slider>
            <Submit exit={exit} submit={{isDisabled: !!errors["parent/grandparent info"]}}/>
        </form>
    )
}
export default SuperVisaInsurance;