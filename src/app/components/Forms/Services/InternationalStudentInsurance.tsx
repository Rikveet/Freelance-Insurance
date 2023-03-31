import {useForm} from "react-hook-form";
import React from "react";
import Input from "@/app/components/Forms/Core/Input";
import Switch from "@/app/components/Forms/Core/Switch";
import Submit from "@/app/components/Forms/Core/Submit";
import InputContainer from "../Core/InputContainer";
import {props} from "@/app/components/Forms/Services/DataTypes";
import {Additional_Info_Validation, Age_Validation, Switch_Validation} from "@/app/components/Forms/Core/Validation";

export type Data = {
    age: number,
    'pre medical condition': 'yes' | 'no',
    'z additional info'?: string
}

const InternationStudentInsurance = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {},
            mode: 'all'
        });
    return (
        <form key={'international_student_insurance'}
              onSubmit={handleSubmit(() => {
            onSubmit(watch())
        })}>
            <InputContainer direction={'col'}>
                <Input type={'number'}
                       label={'Age'}
                       name={`age`}
                       control={control}
                       rules={Age_Validation()}
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
export default InternationStudentInsurance;