import {useForm} from "react-hook-form";
import React from "react";
import Input from "@/app/components/Forms/Core/Input";
import Switch from "@/app/components/Forms/Core/Switch";
import { props } from "./DataTypes";
import InputContainer from "../Core/InputContainer";
import Submit from "@/app/components/Forms/Core/Submit";
import {Additional_Info_Validation, Age_Validation, Switch_Validation} from "@/app/components/Forms/Core/Validation";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";

export type Data = {
    age: number,
    'province ontario': 'yes' | 'no',
    'z additional info'?: string
}

const MortgageInsurance = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {
                'province ontario': 'no'
            },
            mode: 'all'
        });
    return (
        <form key={'mortgage_insurance'} onSubmit={handleSubmit(() => {
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
                <Switch
                    label={'province ontario'}
                    name={`province ontario`}
                    control={control}
                    options={{
                        on: {text: 'yes', value: 'yes'},
                        off: {text: 'no', value: 'no'}
                    }}
                    rules={Switch_Validation()}
                />
                <Input type={'textarea'}
                       config={{rows: 5, cols: 20, maxChars: 250}}
                       label={'Any additional info'}
                       name={`z additional info`}
                       control={control}
                       rules={Additional_Info_Validation()}
                />
                <Submit exit={exit} submit={{isDisabled: !!errors}}/>
            </InputContainer>
        </form>
    )
}
export default MortgageInsurance;