import {Controller, useForm} from "react-hook-form";
import React, {useState} from "react";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import Input from "@/app/components/Forms/Core/Input";
import Switch from "@/app/components/Forms/Core/Switch";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {props} from "@/app/components/Forms/Services/DataTypes";
import InputContainer from "@/app/components/Forms/Core/InputContainer";
import Submit from "@/app/components/Forms/Core/Submit";

export type Data = {
    age: number,
    'province ontario': 'yes' | 'no',
    'travel destination': string,
    'days': {
        'date of departure': Date,
        'date of return': Date,
        'days traveled': string,
    },
    'more_info'?: string
}

const TravelInsurance = ({exit, onSubmit}: props) => {
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
        <form key={'travel_insurance'} onSubmit={handleSubmit(_onSubmit)}>
            <InputContainer direction={'col'}>
                <Input type={'number'}
                       label={'Age'}
                       name={`age`}
                       control={control}
                       rules={{
                           required: {value: true, message: 'Required*'},
                           min: {value: 1, message: 'Invalid*'},
                           max: {value: 150, message: 'Invalid*'},
                           pattern: {value: /^[0-9]{1,3}$/, message: 'Invalid*'}
                       }}
                />
                <Input type={'text'}
                       label={'Travel destination'}
                       name={`travel destination`}
                       control={control}
                       rules={{
                           required: {value: true, message: 'Required*'},
                           maxLength: {value: 100, message: 'Too long..'},
                           pattern: {value: /^[a-zA-Z ]*$/, message: 'Only alphabets are allowed.'}
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
                <div
                    className={`${sharedStyles.Col} ${sharedStyles.Group}`}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        gap: '20px'
                    }}>
                    <div className={sharedStyles.Label} style={{position: "relative", transform: "translate(0,0)"}}>
                        Please select your traveling period
                    </div>
                    <Controller
                        render={({field}) => (
                            <ReactDatePicker
                                selected={field.value ? field.value['date of departure'] : undefined}
                                onChange={(dates) => {
                                    const [startDate, endDate] = dates
                                    let dateUpdate = {}
                                    if (startDate) {
                                        dateUpdate = {'date of departure': startDate}
                                        field.onChange()
                                    }
                                    if (endDate) {
                                        dateUpdate = {...dateUpdate, 'date of return': endDate}
                                    }
                                    if (startDate && endDate) {
                                        dateUpdate = {
                                            ...dateUpdate,
                                            'days traveled': endDate.getDate() - startDate.getDate()
                                        }
                                    }
                                    if (dateUpdate) {
                                        field.onChange(dateUpdate)
                                    }
                                }}
                                startDate={field.value ? field.value['date of departure'] : undefined}
                                endDate={field.value ? field.value['date of return'] : undefined}
                                selectsRange
                                inline
                            />
                        )}
                        name={'days'}
                        control={control}
                        rules={{
                            required: true
                        }}
                    />
                </div>
                <Submit exit={exit} submit={{isDisabled: !!errors, isProcessing: processing}}/>
            </InputContainer>
        </form>
    )
}
export default TravelInsurance;