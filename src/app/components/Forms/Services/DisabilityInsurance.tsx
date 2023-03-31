import {useForm} from "react-hook-form";
import React from "react";
import Input from "@/app/components/Forms/Core/Input";
import Switch from "@/app/components/Forms/Core/Switch";
import {props} from "@/app/components/Forms/Services/DataTypes";
import Submit from "@/app/components/Forms/Core/Submit";
import InputContainer from "@/app/components/Forms/Core/InputContainer";
import {
    Additional_Info_Validation,
    Age_Validation,
    Profession_Validation,
    Switch_Validation
} from "@/app/components/Forms/Core/Validation";

export type Data = {
    age: number,
    profession: string,
    'province ontario': 'yes' | 'no',
    'pre medical condition': 'yes' | 'no',
    'z additional info'?: string
}

const DisabilityInsurance = ({exit, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<Data>(
        {
            defaultValues: {
                'province ontario': 'no',
                'pre medical condition': 'no'
            },
            mode: 'all'
        });
    return (
        <form key={'disability_insurance'}
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
                <Input type={'text'}
                       label={'your profession'}
                       name={`profession`}
                       control={control}
                       rules={Profession_Validation()}
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
export default DisabilityInsurance;