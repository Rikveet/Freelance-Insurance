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

export type Data = {
    'parent/grandparent info': {
        name: string,
        sex: 'male' | 'female',
        'age group': '40-54' | '55-59' | '60-64' | '65-69' | '70-74' | '75-79' | '80-85',
        'recent_medicine_changes': 'yes' | 'no',
        'additional_info'?: string
    }[]
}

const SuperVisaInsurance = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {
                "parent/grandparent info": [{
                    name: '',
                    sex: 'male',
                    'recent_medicine_changes': 'no'
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
    const [processing, setProcessing] = useState(false);
    const _onSubmit = () => {
        setProcessing(true)
        onSubmit(watch()).then(res => {
            setProcessing(false)
            if (!res) {
                console.log('failed')
            }
            console.log('success')
        })
    }
    return (
        <form key={'super_visa_insurance'} onSubmit={handleSubmit(_onSubmit)}>
            <SliderOptions
                add={{
                    Icon: IoPersonAdd,
                    disabled: watch()["parent/grandparent info"].length < 4,
                    onClick: () => {
                        append({name: '', sex: 'male', 'age group': '40-54', 'recent_medicine_changes': 'no'})
                        setSelectedIndex(fields.length)
                    }
                }}
                remove={{
                    Icon: AiOutlineUserDelete,
                    disabled: watch()['parent/grandparent info'].length > 1,
                    onClick: () => {
                        remove(selectedIndex);
                        if (selectedIndex === watch()['parent/grandparent info'].length - 1) {
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
            <Slider showIndex={selectedIndex} length={fields.length}>
                {
                    fields.map((field, index) => {
                        return (
                            <InputContainer key={field.id} direction={'col'}>
                                <Input type={'text'}
                                       label={'name'}
                                       name={`parent/grandparent info.${index}.name`}
                                       control={control}
                                       rules={{
                                           required: {value: true, message: 'Required*'},
                                           minLength: {value: 2, message: 'Too short...'},
                                           maxLength: {value: 20, message: 'Too long...'},
                                           pattern: {value: /^[a-zA-Z ]*$/, message: 'Only alphabets are allowed.'}
                                       }}
                                />
                                <SelectGroup label={'Select an age group'}
                                             name={`parent/grandparent info.${index}.age group`}
                                             control={control}
                                             rules={{
                                                 required: {value: true, message: 'Required*'},
                                             }}
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
                                    rules={{
                                        required: {value: true, message: 'Required*'},
                                    }}
                                />
                                <Switch
                                    label={'Recent medicine changes'}
                                    name={`parent/grandparent info.${index}.recent_medicine_changes`}
                                    control={control}
                                    options={{
                                        on: {text: 'yes', value: 'yes'},
                                        off: {text: 'no', value: 'no'}
                                    }}
                                    rules={{
                                        required: {value: true, message: 'Required*'},
                                    }}
                                />
                                <AnimatePresence mode={'popLayout'} initial={false}>
                                    {watch()["parent/grandparent info"][index]?.recent_medicine_changes === 'yes' &&
                                        <motion.div
                                            key={'additional_info'}
                                            {...slide({enter: 'right', exit: 'bottom'})}
                                            transition={{duration: 1}}
                                        >
                                            <Input type={'textarea'}
                                                   config={{rows: 5, cols: 20, maxChars: 250}}
                                                   label={'Please briefly explain the changes'}
                                                   name={`parent/grandparent info.${index}.additional_info`}
                                                   control={control}
                                                   rules={{
                                                       maxLength: {value: 250, message: 'Too long...'},
                                                       pattern: {
                                                           value: /^([a-zA-Z ]*[\r\n]?[a-zA-Z ]*){0,10}$/,
                                                           message: 'Numbers, Special characters or Too many new lines are not allowed'
                                                       }
                                                   }}
                                            />
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </InputContainer>)
                    })
                }
            </Slider>
            <Submit exit={exit} submit={{isDisabled: !!errors["parent/grandparent info"], isProcessing: processing}}/>
        </form>
    )
}
export default SuperVisaInsurance;