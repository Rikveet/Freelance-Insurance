"use client"
import {MdAddCall} from "react-icons/md";
import InfoButton from "@/app/components/Forms/Core/InfoButton";

const Phone = () => (
    <InfoButton Icon={MdAddCall} text={'+1 (416) 557-8080'} href={'tel:4265578080'}/>
)

export default Phone;