import {useFieldArray, useForm} from "react-hook-form";
import React, {useState} from "react";
import {IoPersonAdd} from "react-icons/io5";
import {AiOutlineUserDelete} from "react-icons/ai";
import {props} from "@/app/components/Forms/Services/DataTypes";
import InputContainer from "@/app/components/Forms/Core/InputContainer";
import Input from "@/app/components/Forms/Core/Input";
import Switch from "@/app/components/Forms/Core/Switch";
import SliderOptions from "@/app/components/Forms/Core/Slider/SliderOptions";
import Slider from "@/app/components/Forms/Core/Slider";
import Submit from "@/app/components/Forms/Core/Submit";

export type Data = {
    'child info': {
        name: string,
        age: number,
        'province ontario': 'yes' | 'no',
        'additional_info'?: string
    }[]
}

const RESP = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {
                "child info": [{
                    name: '',
                    'province ontario': 'no'
                }]
            },
            mode: 'all'
        }
    );
    const {fields, append, remove} = useFieldArray({
        control,
        name: 'child info'
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
        <form key={'RESP'} onSubmit={handleSubmit(_onSubmit)}>
            <SliderOptions
                add={{
                    Icon: IoPersonAdd,
                    disabled: watch()["child info"].length < 3,
                    onClick: () => {
                        append({name: '', age: 0, 'province ontario': 'no'})
                        setSelectedIndex(fields.length)
                    }
                }}
                remove={{
                    Icon: AiOutlineUserDelete,
                    disabled: watch()['child info'].length > 1,
                    onClick: () => {
                        remove(selectedIndex);
                        if (selectedIndex === watch()['child info'].length - 1) {
                            setSelectedIndex(selectedIndex - 1)
                        }
                    }
                }}
                options={
                    watch()["child info"].map((child, index) => ({
                        text: child.name,
                        selected: index === selectedIndex,
                        isInvalid: !!(errors["child info"] && errors["child info"][index]),
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
                                       name={`child info.${index}.name`}
                                       control={control}
                                       rules={{
                                           required: {value: true, message: 'Required*'},
                                           minLength: {value: 2, message: 'Too short...'},
                                           maxLength: {value: 20, message: 'Too long...'},
                                           pattern: {value: /^[a-zA-Z ]*$/, message: 'Only alphabets are allowed.'}
                                       }}
                                />
                                <Input type={'number'}
                                       label={'Age'}
                                       name={`child info.${index}.age`}
                                       control={control}
                                       rules={{
                                           required: {value: true, message: 'Required*'},
                                           min: {value: 1, message: 'Invalid*'},
                                           max: {value: 150, message: 'Invalid*'},
                                           pattern: {value: /^[0-9]{1,3}$/, message: 'Invalid*'}
                                       }}
                                />
                                <Switch
                                    label={'province ontario'}
                                    name={`child info.${index}.province ontario`}
                                    control={control}
                                    options={{
                                        on: {text: 'yes', value: 'yes'},
                                        off: {text: 'no', value: 'no'}
                                    }}
                                    rules={{
                                        required: {value: true, message: 'Required*'},
                                    }}
                                />
                                <Input type={'textarea'}
                                       config={{rows: 5, cols: 20, maxChars: 250}}
                                       label={'Please briefly explain the changes'}
                                       name={`child info.${index}.additional_info`}
                                       control={control}
                                       rules={{
                                           maxLength: {value: 250, message: 'Too long...'},
                                           pattern: {
                                               value: /^([a-zA-Z ]*[\r\n]?[a-zA-Z ]*){0,10}$/,
                                               message: 'Numbers, Special characters or Too many new lines are not allowed'
                                           }
                                       }}
                                />
                            </InputContainer>)
                    })
                }
            </Slider>
            <Submit exit={exit} submit={{isDisabled: !!errors["child info"], isProcessing: processing}}/>
        </form>
    )
}
export default RESP;