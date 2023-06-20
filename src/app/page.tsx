import styles from "@/app/index.module.css";
import InfoHeader from "@/app/components/ContactHeader";
import React from "react";
import dynamic from 'next/dynamic';
import Navbar from "@/app/components/Navbar";
import InsuranceInfo from "@/app/components/InsuranceInfo";
import HomeCarousel from "@/app/components/Carousel";
import CurrentSectionContext from "@/app/context/CurrentSection";
import PhoneInfo  from "@/app/components/PhoneInfo";
const MoreServices = dynamic(() => import("@/app/components/InsuranceInfo/MoreServices"));
const CriticalIllness = dynamic(() => import("@/app/components/CriticalIllness"));
import SocialGallery from "@/app/components/SocialGallery";
const FormContainer = dynamic(() => import("@/app/components/Forms"));


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

function Home() {


    return (
        <CurrentSectionContext>

            <main className={styles.Main}>
                <InfoHeader/>
                <Navbar {...{links}}/>
                <HomeCarousel/>
                <InsuranceInfo/>
                <PhoneInfo/>
                <MoreServices/>
                <CriticalIllness/>
                { /*@ts-ignore*/}
                <SocialGallery/>
                <FormContainer/>
            </main>

        </CurrentSectionContext>
    )
}

export default Home