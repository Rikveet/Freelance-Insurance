import {useForm} from "react-hook-form";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import inputStyles from '@/app/components/Forms/Core/Input/index.module.css';
import React, {useState} from "react";
import {Services, UserContactInfoT} from "@/app/components/Forms/DataTypes";
import Input from "@/app/components/Forms/Core/Input";
import {FaArrowCircleRight} from "react-icons/fa";
import {motion, useAnimation} from "framer-motion";

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
                       rules={{
                           required: {value: true, message: 'Required*'},
                           minLength: {value: 2, message: 'Too short...'},
                           maxLength: {value: 20, message: 'Too long...'},
                           pattern: {value: /^[a-zA-Z ]*$/, message: 'Only alphabets are allowed.'}
                       }}
                />
                <Input type={'tel'}
                       label={'phone number'}
                       name={'phone number'}
                       control={control}
                       rules={{
                           required: {value: true, message: 'Required*'},
                           pattern: {
                               value: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                               message: 'Invalid Input'
                           }
                       }}
                />
                <Input type={'email'}
                       label={'email'}
                       name={'email'}
                       control={control}
                       rules={{
                           required: {value: true, message: 'Required*'},
                           pattern: {
                               value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                               message: 'Invalid Input'
                           }
                       }}
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