'use client';
import Section from "@/app/components/Section";
import styles from './index.module.css';
import {IGoogleReCaptchaConsumerProps, useGoogleReCaptcha} from "react-google-recaptcha-v3";
import React, {createContext, useCallback, useEffect, useState} from "react";
import axios from "axios";
import Title from "@/app/components/Forms/Title";
import Background from "@/app/components/Forms/Background";
import BusinessInfo from "@/app/components/Forms/BusinessInfo";
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
import UserContactInfo from "@/app/components/Forms/UserContactInfo";

export const Processing = createContext<{ isProcessing: boolean, processingResult?: boolean }>({isProcessing: false})

export const getToken = async ({executeRecaptcha}: IGoogleReCaptchaConsumerProps, service: Services, userInfo: UserContactInfoT): Promise<string | undefined> => {
    if (!userInfo || !service || !executeRecaptcha) {
        return undefined
    }
    return await executeRecaptcha(`${userInfo.email}/${service}`.replace(/[^a-zA-Z/_]/g, '_'))
        .then(r => r).catch(_ => {
            return undefined
        });
}

export const sortObject = (_data: any) => {
    const data = {} as typeof _data;
    Object.keys(_data).sort().forEach(
        (key) => {
            // @ts-ignore
            if (Array.isArray(_data[key])) {
                // @ts-ignore
                data[key] = _data[key].map((_entry) => {
                    const entry = {} as typeof _entry;
                    Object.keys(_entry).sort().forEach((entry_key) => {
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
    return data
}

function getServiceForm(service: Services, exit: () => void, onSubmit: (data: ServiceSubmitData) => void) {
    switch (service) {
        case 'super visa insurance':
            return <SuperVisaInsurance {...{exit, onSubmit}}/>;
        case "visitor's insurance":
            return <VisitorInsurance {...{exit, onSubmit}}/>;
        case 'life insurance':
            return <LifeInsurance {...{exit, onSubmit}}/>;
        case 'critical illness insurance':
            return <CriticalInsurance {...{exit, onSubmit}}/>;
        case 'disability insurance':
            return <DisabilityInsurance {...{exit, onSubmit}}/>;
        case 'travel insurance':
            return <TravelInsurance {...{exit, onSubmit}}/>;
        case 'resp':
            return <RESP {...{exit, onSubmit}}/>;
        case 'rrsp':
            return <RRSP {...{exit, onSubmit}}/>;
        case 'tfsa':
            return <TFSA {...{exit, onSubmit}}/>;
        case "international student's insurance":
            return <InternationStudentInsurance {...{exit, onSubmit}}/>;
        case 'mortgage insurance':
            return <MortgageInsurance {...{exit, onSubmit}}/>;
    }
}

const FormContent = ({
                         service,
                         preSelectedService,
                         exit,
                         onSubmit,
                         isProcessing,
                         processingResult,
                         userInfo,
                         setUserInfo,
                         setService,
                     }: {
    service?: Services,
    preSelectedService?: Services,
    exit: () => void,
    onSubmit: (data: ServiceSubmitData) => void,
    isProcessing: boolean,
    processingResult?: boolean,
    userInfo?: UserContactInfoT,
    setUserInfo: (userInfo: UserContactInfoT) => void,
    setService: (service: Services) => void
}) => {
    return (
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
                            service && userInfo ? getServiceForm(service, exit, onSubmit) :
                                <UserContactInfo {...{
                                    userInfo,
                                    onSubmit: (userInfo: UserContactInfoT, service: Services) => {
                                        setService(service)
                                        setUserInfo(userInfo)
                                    },
                                    preSelectedService
                                }}/>
                        }
                    </Processing.Provider>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

const Form = ({preSelectedService}: { preSelectedService?: Services }) => {
    const [service, _setService] = useState<Services | undefined>()
    const setService = (service?: Services) => {
        _setService(service)
    }
    const [userInfo, _setUserInfo] = useState<UserContactInfoT>()
    const setUserInfo = (userInfo: UserContactInfoT) => {
        _setUserInfo(userInfo)
    }
    const [isProcessing, setIsProcessing] = useState(false);
    const [processingResult, setProcessingResult] = useState<boolean>()

    useEffect(() => {
        if (processingResult !== undefined) {
            const resultTimeout = setTimeout(() => {
                if (processingResult) {
                    exit()
                }
                setProcessingResult(undefined)
                clearTimeout(resultTimeout)
            }, 3000)
        }
    }, [processingResult])

    const googleReCaptcha = useGoogleReCaptcha();
    const getTokenCallback = useCallback(() => {
        if (service && userInfo && googleReCaptcha) {
            return getToken(googleReCaptcha, service, userInfo)
        }
    }, [googleReCaptcha, service, userInfo]);

    const onSubmit = async (_data: ServiceSubmitData) => {
        const data = sortObject(_data)
        setIsProcessing(true)
        if (!userInfo || !service || !googleReCaptcha) {
            setIsProcessing(false)
            setProcessingResult(false)
            return false
        }
        const token = await getTokenCallback()
        const postResult = await axios.post(`/api/formSubmit`, {
            token, service, userInfo, data,
        }).then(res => res.data?.result === 'success').catch(_ => false)
        setProcessingResult(postResult)
        setIsProcessing(false)
    }
    const exit = () => {
        setService(undefined)
    }
    return (
        preSelectedService ?
            <FormContent {...{
                exit,
                onSubmit,
                service,
                preSelectedService,
                isProcessing,
                processingResult,
                userInfo,
                setUserInfo,
                setService
            }}/> :
            <Section className={styles.Container} id={'contact'}>
                <Background/>
                <Title/>
                <motion.div className={styles.FormContainer} layout>
                    <BusinessInfo/>
                    <FormContent {...{
                        exit,
                        onSubmit,
                        service,
                        isProcessing,
                        processingResult,
                        userInfo,
                        setUserInfo,
                        setService
                    }}/>
                </motion.div>
            </Section>
    )
}
export default Form;