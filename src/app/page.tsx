'use client';
import styles from "@/app/index.module.css";
import InfoHeader from "@/app/components/ContactHeader";
import React from "react";
import Navbar from "@/app/components/Navbar";
import InsuranceInfo from "@/app/components/InsuranceInfo";
import HomeCarousel from "@/app/components/Carousel";
import PhoneInfo from "@/app/components/PhoneInfo";
import MoreServices from "@/app/components/InsuranceInfo/MoreServices";
import CriticalIllness from "@/app/components/CriticalIllness";
import SocialGallery from "@/app/components/SocialGallery";
import Form from "@/app/components/Forms";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import CurrentSectionContext from "@/app/context/CurrentSection";

const links = [
    {text: 'home', sectionID: 'home'},
    {text: 'premium insurance', sectionID: 'premium_insurance'},
    {text: 'super visa insurance', sectionID: 'super_insurance'},
    {text: 'visitor insurance', sectionID: 'visitor_insurance'},
    {text: 'life insurance', sectionID: 'life_insurance'},
    {text: 'disability insurance', sectionID: 'disability_insurance'},
    {text: 'travel insurance', sectionID: 'travel_insurance'},
    {text: 'resp/rrsp/tfsa', sectionID: 'tax'},
    {text: 'critical illness insurance', sectionID: 'critical_illness_insurance'},
    {text: 'contact', sectionID: 'contact'},

]

export default function Home() {
    return (
        <CurrentSectionContext>
            <GoogleReCaptchaProvider container={{parameters: {theme: 'dark'}}}
                                     reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}>
                <main className={styles.Main}>
                    <InfoHeader/>
                    <Navbar {...{links}}/>
                    <HomeCarousel/>
                    <InsuranceInfo/>
                    <PhoneInfo/>
                    <MoreServices/>
                    <CriticalIllness/>
                    <SocialGallery/>
                    <Form/>
                </main>
            </GoogleReCaptchaProvider>
        </CurrentSectionContext>
    )
}
