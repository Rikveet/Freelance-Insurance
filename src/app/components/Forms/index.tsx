'use client';
import Section from "@/app/components/Section";
import styles from './index.module.css';
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import React, {createContext, useCallback, useEffect, useState} from "react";
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

export const Processing = createContext<{ isProcessing: boolean, processingResult?: boolean }>({isProcessing: false})
const Form = () => {
    const [service, setService] = useState<Services | undefined>()
    const [userInfo, setUserInfo] = useState<UserContactInfoT>()
    const [isProcessing, setIsProcessing] = useState(false);
    const [processingResult, setProcessingResult] = useState<boolean>()
    useEffect(() => {
        if (processingResult !== undefined) {
            const resultTimeout = setTimeout(() => {
                setProcessingResult(undefined)
                clearTimeout(resultTimeout)
            }, 3000)
        }
    }, [processingResult])
    const {executeRecaptcha} = useGoogleReCaptcha();
    const getToken = useCallback(async (): Promise<string | undefined> => {
        if (!userInfo || !service || !executeRecaptcha) {
            return undefined
        }
        return await executeRecaptcha(`${userInfo.email}/${service}`.replace(/[^a-zA-Z/_]/g, '_'))
            .then(r => r).catch(_ => {
                return undefined
            });
    }, [executeRecaptcha, service, userInfo]);
    const onSubmit = async (_data: ServiceSubmitData) => {
        const data = {} as typeof _data;
        Object.keys(_data).sort().forEach(
            (key) => {
                // @ts-ignore
                if (Array.isArray(_data[key])) {
                    // @ts-ignore
                    data[key] = _data[key].map((_entry) => {
                        const entry = {} as typeof _entry;
                        Object.keys(_entry).sort().forEach((entry_key)=>{
                            entry[entry_key] = _entry[entry_key]
                        })
                        return entry
                    })
                } else {
                    // @ts-ignore
                    data[key] = _data[key]
                }

            }
        )
        setIsProcessing(true)
        if (!userInfo || !service || !executeRecaptcha) {
            setIsProcessing(false)
            setProcessingResult(false)
            return false
        }
        const token = await getToken()
        setProcessingResult(await axios.post(`/api/formSubmit`, {
            token,
            service, ...userInfo, ...data,
        }).then(res => res.data?.result === 'success').catch(_ => false))
        setIsProcessing(false)
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
                            <Processing.Provider value={{isProcessing, processingResult}}>
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
                            </Processing.Provider>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </Section>
    )
}
export default Form;