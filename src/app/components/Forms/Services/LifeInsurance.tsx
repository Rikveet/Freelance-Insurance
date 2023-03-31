import {useForm} from "react-hook-form";
import React from "react";
import Input from "@/app/components/Forms/Core/Input";
import SelectGroup from "@/app/components/Forms/Core/SelectGroup";
import Switch from "@/app/components/Forms/Core/Switch";
import {props} from "@/app/components/Forms/Services/DataTypes";
import Submit from "@/app/components/Forms/Core/Submit";
import InputContainer from "../Core/InputContainer";
import {
    Additional_Info_Validation,
    Age_Validation,
    Select_Group_Validation,
    Switch_Validation
} from "@/app/components/Forms/Core/Validation";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";

export type Data = {
    age: number,
    'insurance plan': 'life insurance' | 'term insurance' | 'million dollar life insurance',
    'province ontario': 'yes' | 'no',
    'pre medical condition': 'yes' | 'no',
    'z additional info'?: string
}

const LifeInsurance = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {
                'pre medical condition': 'no',
                'province ontario': 'no'
            },
            mode: 'all'
        });
    return (
        <form
            key={'life_insurance'}
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
                <SelectGroup label={'Select a plan'}
                             name={`insurance plan`}
                             control={control}
                             rules={Select_Group_Validation()}
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
                    rules={Switch_Validation()}
                />
                <Switch
                    label={'Pre medical condition'}
                    name={`pre medical condition`}
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
export default LifeInsurance;