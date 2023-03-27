import {useForm} from "react-hook-form";
import React, {useState} from "react";
import Input from "@/app/components/Forms/Core/Input";
import Switch from "@/app/components/Forms/Core/Switch";
import { props } from "./DataTypes";
import InputContainer from "../Core/InputContainer";
import Submit from "@/app/components/Forms/Core/Submit";

export type Data = {
    age: number,
    'province ontario': 'yes' | 'no',
    'more_info'?: string
}

const MortgageInsurance = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {},
            mode: 'all'
        });
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
        <form key={'mortgage_insurance'} onSubmit={handleSubmit(_onSubmit)}>
            <InputContainer direction={'col'}>
                <Input type={'number'}
                       label={'Age'}
                       name={`age`}
                       control={control}
                       rules={{
                           required: {value: true, message: 'Required*'},
                           min: {value: 1, message: 'Invalid*'},
                           max: {value: 150, message: 'Invalid*'},
                           pattern: {value: /^[0-9]{1,5}$/, message: 'Only alphabets are allowed.'}
                       }}
                />
                <Switch
                    label={'province ontario'}
                    name={`province ontario`}
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
                       label={'Any additional info'}
                       name={`more_info`}
                       control={control}
                       rules={{
                           maxLength: {value: 250, message: 'Too long...'},
                           pattern: {
                               value: /^([a-zA-Z ]*[\r\n]?[a-zA-Z ]*){0,10}$/,
                               message: 'Numbers, Special characters or Too many new lines are not allowed'
                           }
                       }}
                />
                <Submit exit={exit} submit={{isDisabled: !!errors, isProcessing: processing}}/>
            </InputContainer>
        </form>
    )
}
export default MortgageInsurance;