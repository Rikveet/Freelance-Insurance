"use client"
import {MdOutgoingMail} from "react-icons/md";
import InfoButton from "@/app/components/Forms/Core/InfoButton";

const Email = () => (
    <InfoButton Icon={MdOutgoingMail} href={'mailto:shevindersidhu@gmail.com'} text={'shevindersidhu@gmail.com'}/>
)

export default Email;