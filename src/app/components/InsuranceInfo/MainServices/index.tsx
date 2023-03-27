import Card from "@/app/components/Card";
import React from "react";
import ServicesContainer from "@/app/components/InsuranceInfo/ServicesContainer";

const MainServices = () => {
    return (
        <ServicesContainer>
            <Card id={'super_insurance'}
                  image={{fileName: '/images/cards/super_visa.jpg', alt: 'super visa', desc: 'for parents & grandparents'}}
                  title={'super visa insurance'}
                  desc={'Reunite with your family this summer. Get the Best Super Visa Insurance Quote and Medical Coverage for Your Parents & Grandparents visiting Canada.'}
                  button={{
                      text: 'get free quote', onClick: () => {
                      }
                  }}/>
            <Card id={'visitor_insurance'}
                  image={{
                      fileName: '/images/cards/visitor_insurance.jpg',
                      alt: "visitor's insurance",
                      desc: 'for visitors to canada'
                  }}
                  title={"visitor's insurance"}
                  desc={'Visitors coming to Canada? Get Visitors to Canada Insurance to avoid hefty hospital bills in case of any unforeseen medical emergency.'}
                  button={{
                      text: 'get free quote', onClick: () => {
                      }
                  }}/>
            <Card id={'life_insurance'}
                  image={{
                      fileName: '/images/cards/life_insurance.jpg',
                      alt: 'life insurance',
                      desc: 'for you & your loved ones'
                  }}
                  title={'life insurance'}
                  desc={'Financial Protection should be your top most priority for yourself and your loved ones. Safeguard your financial houses with Life Insurance today.'}
                  button={{
                      text: 'get free quote', onClick: () => {
                      }
                  }}/>
        </ServicesContainer>
    )
}
export default MainServices;