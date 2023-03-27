import styles from "./index.module.css";
import Section from "@/app/components/Section";
import React from "react";

const Premium = () => {
    return (
        <Section className={styles.Container} id={'premium_insurance'}>
            <div className={styles.Text}>calculate premium</div>
            <div className={styles.ButtonContainer}>
                <button className={styles.Button}>super visa insurance</button>
                <button className={styles.Button}>visitor&apos;s insurance</button>
            </div>
        </Section>
    )
}

export default Premium