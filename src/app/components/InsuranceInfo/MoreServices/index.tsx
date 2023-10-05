'use client';
import React from "react";
import ServicesContainer from "@/app/components/InsuranceInfo/ServicesContainer";
import Card from "@/app/components/Card";
import styles from './index.module.css';
import DisabilityInsuranceImg from "@/app/assets/images/cards/disability_insurance.webp";
import TravelInsuranceImg from "@/app/assets/images/cards/travel_insurance.webp";
import TaxImg from "@/app/assets/images/cards/tax.webp";

const MoreServices = () => {
    return (
        <div className={styles.Container}>
            <ServicesContainer>
                <Card id={'disability_insurance'}
                      image={{
                          file: DisabilityInsuranceImg,
                          alt: 'disability insurance',
                          desc: 'homeowner'
                      }}
                      title={'disability insurance'}
                      desc={'Disability can happen to anyone, anywhere. But don\'t let it ruin your lifestyle with Disability Insurance.'}
                      />
                <Card id={'travel_insurance'}
                      image={{
                          file: TravelInsuranceImg,
                          alt: "travel insurance",
                          desc: 'worry-free travel'
                      }}
                      title={"travel insurance"}
                      desc={'Travel to any part of the world with no worries of any unforeseen incident that might hit you while vacationing.'}
                     />
                <Card id={'tax'}
                      image={{
                          file: TaxImg,
                          alt: 'tax',
                          desc: 'tax agent'
                      }}
                      title={'RESP/RRSP/TSFA'}
                      desc={'Invest in the future of kids with RESP, save for your retirement with RRSP or just open a tax-free savings account.'}
                      />
            </ServicesContainer>
        </div>
    )
}

export default MoreServices