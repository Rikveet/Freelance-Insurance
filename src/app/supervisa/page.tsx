'use client';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import React from "react";
import Form from "@/app/components/Forms/Form";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import styles from './index.module.css';
import cardStyles from '@/app/components/Card/index.module.css';
import Image from "next/image";
const SupervisaPageContent = () => {
    // some of the code was extracted from the form section

    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <div className={styles.InfoContainer}>
                    <div className={styles.Info}>
                        <p className={cardStyles.Title}>Super Visa Insurance</p>
                        <Image
                            className={cardStyles.Image}
                            src={'/images/cards/super_visa.jpg'}
                            alt={'super visa image'}
                            loading={'eager'}
                            priority
                            width={200}
                            height={200}/>
                        <p className={cardStyles.ImageDesc}>for parents & grandparents</p>
                        <p className={cardStyles.Desc} style={{height: 'fit-content'}}>
                            Reunite with your family in Canada and make every moment count. Our Best Super Visa
                            Insurance Quote and Medical Coverage ensure worry-free moments while creating
                            unforgettable memories. Plan your reunion today and our representatives will provide a
                            prompt personalized quote. Cherish quality time with your loved ones throughout the
                            year.
                        </p>
                    </div>
                </div>
                <div className={styles.Form}>
                    <div className={styles.Background}>
                        <div className={styles.BackgroundBlur}/>
                        <Image className={styles.BackgroundImg} src="/images/map.png" alt="background image"
                               width={2000} height={2000}/>
                    </div>
                    <div className={sharedStyles.Form}>
                        <Form preSelectedService={'super visa insurance'}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default function SupervisaPageContainer() {
    return (
        <GoogleReCaptchaProvider container={{parameters: {theme: 'dark'}}}
                                 reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}>
            <SupervisaPageContent/>
        </GoogleReCaptchaProvider>
    )
}