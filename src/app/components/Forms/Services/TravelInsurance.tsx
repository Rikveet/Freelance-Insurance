import {Controller, useForm} from "react-hook-form";
import React from "react";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import Input from "@/app/components/Forms/Core/Input";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {props} from "@/app/components/Forms/Services/DataTypes";
import InputContainer from "@/app/components/Forms/Core/InputContainer";
import Submit from "@/app/components/Forms/Core/Submit";
import {Age_Validation, Date_Picker_Validation, Destination_Validation} from "@/app/components/Forms/Core/Validation";

export type Data = {
    age: number,
    'travel destination': string,
    'days': {
        'date of departure': Date,
        'date of return': Date,
        'days traveled': string,
    }
}

const TravelInsurance = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {},
            mode: 'all'
        });

    return (
        <form key={'travel_insurance'}
              onSubmit={handleSubmit(() => {
                  onSubmit(watch())
              })}>
            <p className={sharedStyles.FormTitle}>Information about the person</p>
            <InputContainer direction={'col'}>
                <Input type={'number'}
                       label={'Age'}
                       name={`age`}
                       control={control}
                       rules={Age_Validation()}
                />
                <Input type={'text'}
                       label={'Travel destination'}
                       name={`travel destination`}
                       control={control}
                       rules={Destination_Validation()}
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
                        render={({field, fieldState}) => (
                            <>
                                <ReactDatePicker
                                    selected={field.value ? field.value['date of departure'] : undefined}
                                    onChange={(dates) => {
                                        const [startDate, endDate] = dates
                                        let dateUpdate = {}
                                        if (startDate) {
                                            dateUpdate = {'date of departure': startDate}
                                            // @ts-ignore
                                            field.onChange()
                                        }
                                        if (endDate) {
                                            dateUpdate = {...dateUpdate, 'date of return': endDate}
                                        }
                                        if (startDate && endDate) {
                                            dateUpdate = {
                                                ...dateUpdate,
                                                'days travelling': `${(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)} days`
                                            }
                                        }
                                        if (dateUpdate) {
                                            // @ts-ignore
                                            field.onChange(dateUpdate)
                                        }
                                    }}
                                    startDate={field.value ? field.value['date of departure'] : undefined}
                                    endDate={field.value ? field.value['date of return'] : undefined}
                                    selectsRange
                                    inline
                                />
                                {
                                    fieldState.error &&
                                    <span className={sharedStyles.Error} style={{left: "50%", transform: "translate(-50%, 50%)", width: "210px"}}>
                                            {
                                                fieldState.error.message
                                            }
                                    </span>
                                }
                            </>

                        )}
                        name={'days'}
                        control={control}
                        rules={Date_Picker_Validation()}
                    />
                </div>
                <Submit exit={exit} submit={{isDisabled: Object.keys(errors).length > 0}}/>
            </InputContainer>
        </form>
    )
}
export default TravelInsurance;