'use client';
import Section from "@/app/components/Section";
import styles from './index.module.css';
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import React, {useCallback, useState} from "react";
import axios from "axios";
import Title from "@/app/components/Forms/Title";
import Background from "@/app/components/Forms/Background";
import BusinessInfo from "@/app/components/Forms/BusinessInfo";
import UserContactInfo from "@/app/components/Forms/UserContactInfo";
import {Services, ServiceSubmitData, UserContactInfoT} from "@/app/components/Forms/DataTypes";
import SuperVisaInsurance from "@/app/components/Forms/Services/SuperVisaInsurance";
import VisitorInsurance from "@/app/components/Forms/Services/VisitorInsurance";
import LifeInsurance from "@/app/components/Forms/Services/LifeInsurance";
import CriticalInsurance from "@/app/components/Forms/Services/CriticalInsurance";
import DisabilityInsurance from "@/app/components/Forms/Services/DisabilityInsurance";
import TravelInsurance from "@/app/components/Forms/Services/TravelInsurance";
import RESP from "@/app/components/Forms/Services/RESP";
import RRSP from "@/app/components/Forms/Services/RRSP";
import TFSA from "@/app/components/Forms/Services/TFSA";
import InternationStudentInsurance from "@/app/components/Forms/Services/InternationalStudentInsurance";
import MortgageInsurance from "@/app/components/Forms/Services/MortgageInsurance";
import {AnimatePresence, motion} from "framer-motion";
import slide from "../Motions/Slide";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";

const Form = () => {
    const [service, setService] = useState<Services | undefined>()
    const [userInfo, setUserInfo] = useState<UserContactInfoT>()
    const {executeRecaptcha} = useGoogleReCaptcha();
    const getToken = useCallback(async (): Promise<string | undefined> => {
        if (!userInfo || !service || !executeRecaptcha) {
            return undefined
        }
        return await executeRecaptcha(`${userInfo.email}/${service}`.replace(/[^a-zA-Z/_]/g,'_'))
            .then(r => r).catch(_ => {
                return undefined
            });
    }, [executeRecaptcha, service, userInfo]);
    const onSubmit = async (data: ServiceSubmitData): Promise<boolean> => {
        console.log(userInfo, data)
        if (!userInfo || !service || !executeRecaptcha) {
            return false
        }
        const token = '' //await getToken()
        return await axios.post(`/api/formSubmit`, {
            token,
            service, ...userInfo, ...data,
        }).then(r => false).catch(_ => false)
    }
    const exit = () => {
        setService(undefined)
    }
    return (
        <Section className={styles.Container} id={'contact'}>
            <Background/>
            <Title/>
            <motion.div className={styles.FormContainer} layout>
                <BusinessInfo/>
                <div className={sharedStyles.Form}>
                    <AnimatePresence mode={'wait'}>
                        <motion.div key={service || 'user_info'}
                                    {...slide(service ? {enter: "right", exit: 'right'} : {
                                        enter: 'left',
                                        exit: "left"
                                    })}
                                    transition={{duration: 0.75}}
                                    layout>
                            {
                                service ?
                                    {
                                        'super visa insurance': <SuperVisaInsurance {...{exit, onSubmit}}/>,
                                        "visitor's insurance": <VisitorInsurance {...{exit, onSubmit}}/>,
                                        'life insurance': <LifeInsurance {...{exit, onSubmit}}/>,
                                        'critical illness insurance': <CriticalInsurance {...{exit, onSubmit}}/>,
                                        'disability insurance': <DisabilityInsurance {...{exit, onSubmit}}/>,
                                        'travel insurance': <TravelInsurance {...{exit, onSubmit}}/>,
                                        'resp': <RESP {...{exit, onSubmit}}/>,
                                        'rrsp': <RRSP {...{exit, onSubmit}}/>,
                                        'tfsa': <TFSA {...{exit, onSubmit}}/>,
                                        "international student's insurance": <InternationStudentInsurance {...{
                                            exit,
                                            onSubmit
                                        }}/>,
                                        'mortgage insurance': <MortgageInsurance {...{exit, onSubmit}}/>,
                                    }[service] :
                                    <UserContactInfo {...{
                                        userInfo, onSubmit: (userInfo: UserContactInfoT, service: Services) => {
                                            setService(service)
                                            setUserInfo(userInfo)
                                        }
                                    }}/>
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </Section>
    )
}
export default Form;