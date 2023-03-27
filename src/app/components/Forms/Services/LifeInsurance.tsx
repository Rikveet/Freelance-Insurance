import {useForm} from "react-hook-form";
import React, {useState} from "react";
import Input from "@/app/components/Forms/Core/Input";
import SelectGroup from "@/app/components/Forms/Core/SelectGroup";
import Switch from "@/app/components/Forms/Core/Switch";
import {props} from "@/app/components/Forms/Services/DataTypes";
import Submit from "@/app/components/Forms/Core/Submit";
import InputContainer from "../Core/InputContainer";

export type Data = {
    age: number,
    'insurance plan': 'life insurance' | 'term insurance' | 'million dollar life insurance',
    'province ontario': 'yes' | 'no',
    'pre medical condition': 'yes' | 'no',
    'more_info'?: string
}

const LifeInsurance = ({exit, onSubmit}: props) => {
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
        <form
            key={'life_insurance'}
            onSubmit={handleSubmit(_onSubmit)}>
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
                <SelectGroup label={'Select a plan'}
                             name={`insurance plan`}
                             control={control}
                             rules={{
                                 required: {value: true, message: 'Required*'},
                             }}
                             options={
                                 [
                                     {text: 'life insurance'},
                                     {text: 'term insurance'},
                                     {text: 'million dollar life insurance'}
                                 ]
                             }/>
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
                <Switch
                    label={'Pre medical condition'}
                    name={`pre medical condition`}
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
export default LifeInsurance;