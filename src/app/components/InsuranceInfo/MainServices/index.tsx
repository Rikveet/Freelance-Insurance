import Card from "@/app/components/Card";
import React from "react";
import ServicesContainer from "@/app/components/InsuranceInfo/ServicesContainer";
import SuperVisaImg from "@/app/assets/images/cards/super_visa.webp";
import VisitorInsuranceImg from "@/app/assets/images/cards/visitor_insurance.webp";
import LifeInsuranceImg from "@/app/assets/images/cards/life_insurance.webp";


const MainServices = () => {
    return (
        <ServicesContainer>
            <Card id={'super_insurance'}
                  image={{
                      file: SuperVisaImg,
                      alt: 'super visa',
                      desc: 'for parents & grandparents'
                  }}
                  title={'super visa insurance'}
                  desc={'Reunite with your family this summer. Get the Best Super Visa Insurance Quote and Medical Coverage for Your Parents & Grandparents visiting Canada.'}
            />
            <Card id={'visitor_insurance'}
                  image={{
                      file: VisitorInsuranceImg,
                      alt: "visitor's insurance",
                      desc: 'for visitors to canada'
                  }}
                  title={"visitor's insurance"}
                  desc={'Visitors coming to Canada? Get Visitors to Canada Insurance to avoid hefty hospital bills in case of any unforeseen medical emergency.'}
            />
            <Card id={'life_insurance'}
                  image={{
                      file: LifeInsuranceImg,
                      alt: 'life insurance',
                      desc: 'for you & your loved ones'
                  }}
                  title={'life insurance'}
                  desc={'Financial Protection should be your top most priority for yourself and your loved ones. Safeguard your financial houses with Life Insurance today.'}
            />
        </ServicesContainer>
    )
}
export default MainServices;