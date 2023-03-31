import {useForm} from "react-hook-form";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import inputStyles from '@/app/components/Forms/Core/Input/index.module.css';
import React, {useState} from "react";
import {Services, UserContactInfoT} from "@/app/components/Forms/DataTypes";
import Input from "@/app/components/Forms/Core/Input";
import {FaArrowCircleRight} from "react-icons/fa";
import {motion, useAnimation} from "framer-motion";
import {Email_Validation, Name_Validation, Phone_Number_Validation} from "../Core/Validation";

type props = {
    onSubmit: (userInfo: UserContactInfoT, service: Services) => void,
    userInfo: UserContactInfoT | undefined
}

const UserContactInfo = ({userInfo, onSubmit}: props) => {
    const {handleSubmit, watch, control, formState: {errors}} = useForm<UserContactInfoT>({
        defaultValues:
            userInfo ? userInfo :
                {
                    name: '',
                    email: '',
                    "phone number": ''
                }
        ,
        mode: 'all'
    });
    const [selectedService, setSelectedService] = useState<Services | undefined>();
    const [selectedServiceError, setSelectedServiceError] = useState('')
    const selectedServiceAnimation = useAnimation();

    const _onSubmit = async () => {
        if (!selectedService) {
            setSelectedServiceError('Please select a service!')
            await selectedServiceAnimation.start({x: -10, transition: {duration: 0.2}})
            await selectedServiceAnimation.start({x: 10, transition: {duration: 0.2}})
            await selectedServiceAnimation.start({x: 0, transition: {duration: 0.2}})
            selectedServiceAnimation.stop()
            return
        }
        onSubmit(watch(), selectedService)
    }
    return (
        <form
            onSubmit={handleSubmit(_onSubmit)}>
            <div className={`${sharedStyles.Inputs} ${sharedStyles.Col}`}>
                <Input type={'text'}
                       label={'name'}
                       name={'name'}
                       control={control}
                       rules={Name_Validation()}
                />
                <Input type={'tel'}
                       label={'phone number'}
                       name={'phone number'}
                       control={control}
                       rules={Phone_Number_Validation()}
                />
                <Input type={'email'}
                       label={'email'}
                       name={'email'}
                       control={control}
                       rules={Email_Validation()}
                />
                <motion.div className={sharedStyles.Group} animate={selectedServiceAnimation}>
                    <select className={`${sharedStyles.Select} ${inputStyles.Input} `}
                            defaultValue={''}
                            value={selectedService}
                            style={!!selectedService ? {color: "white"} : {}}
                            onChange={(e) => {
                                setSelectedServiceError('')
                                setSelectedService(e.currentTarget.value as Services)
                            }}
                    >
                        <option value='' disabled hidden>Select a service...</option>
                        <option value="super visa insurance">super visa insurance</option>
                        <option value="visitor's insurance">visitor&lsquo;s insurance</option>
                        <option value="life insurance">life insurance</option>
                        <option value="critical illness insurance">critical illness insurance</option>
                        <option value="disability insurance">disability insurance</option>
                        <option value="travel insurance">travel insurance</option>
                        <option value="resp">resp</option>
                        <option value="rrsp">rrsp</option>
                        <option value="tfsa">tfsa</option>
                        <option value="international student's insurance">international student&lsquo;s insurance
                        </option>
                        <option value="mortgage insurance">mortgage insurance</option>
                    </select>
                    {selectedServiceError && <span className={sharedStyles.Error}>{selectedServiceError}</span>}
                </motion.div>
            </div>
            <button className={sharedStyles.SubmitButton}
                    disabled={!!errors.name || !!errors.email || !!errors["phone number"]}>
                Next
                <FaArrowCircleRight/>
            </button>
        </form>
    )
}
export default UserContactInfo;