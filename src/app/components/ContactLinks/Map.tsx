"use client"
import { CiLocationOn } from "react-icons/ci";
import InfoButton from "@/app/components/Forms/Core/InfoButton";
const Phone = ()=>(
    <InfoButton Icon={CiLocationOn} href={'https://goo.gl/maps/tJqcL7Lx83WyBE8Q7'} text={'Dewside Dr, Brampton'} newWindow />
)

export default Phone;