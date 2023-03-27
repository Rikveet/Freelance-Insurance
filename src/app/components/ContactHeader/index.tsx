import React from "react";
import styles from './index.module.css';
import InfoHeaderItem from "@/app/components/ContactHeader/InfoHeaderItem";
import {
    FaFacebookSquare,
    FaInstagramSquare, FaLinkedin,
    FaTwitterSquare,
    FaMapMarkedAlt,
} from "react-icons/fa";
import {MdContactMail} from "react-icons/md";
import {FiPhoneCall} from "react-icons/fi";

const InfoHeader = ()=>(
    <div className={`${styles.InformationHeader}`}>
        <div className={styles.Left}>
            <InfoHeaderItem
                Icon={FaMapMarkedAlt}
                text={'Dewside Dr, Brampton, ON L6R 3B7'}/>
            <InfoHeaderItem
                Icon={MdContactMail}
                text={'shevindersidhu@gmail.com'}/>
            <InfoHeaderItem
                Icon={FiPhoneCall}
                text={'+1 (416) 557-8080'}/>
        </div>
        <div className={styles.Right}>
            <InfoHeaderItem Icon={FaFacebookSquare}/>
            <InfoHeaderItem Icon={FaTwitterSquare}/>
            <InfoHeaderItem Icon={FaInstagramSquare}/>
            <InfoHeaderItem Icon={FaLinkedin}/>
        </div>
    </div>
)

export default InfoHeader;