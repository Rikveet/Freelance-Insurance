import React from "react";
import styles from './index.module.css';
import Phone from "@/app/components/ContactLinks/Phone";
import Email from "@/app/components/ContactLinks/Email";
import Map from "@/app/components/ContactLinks/Map";
import Facebook from "@/app/components/ContactLinks/Facebook";
import Instagram from "@/app/components/ContactLinks/Instagram";
import Twitter from "@/app/components/ContactLinks/Twitter";

const InfoHeader = ()=>(
    <div className={`${styles.InformationHeader}`}>
        <div className={styles.Left}>
            <Phone/>
            <Email/>
            <Map/>
        </div>
        <div className={styles.Right}>
            <Facebook/>
            <Instagram/>
            <Twitter/>
        </div>
    </div>
)

export default InfoHeader;