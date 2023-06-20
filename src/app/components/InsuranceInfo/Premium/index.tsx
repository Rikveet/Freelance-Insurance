import styles from "./index.module.css";
import Section from "@/app/components/Section";
import React from "react";

const Premium = () => {
    return (
        <Section className={styles.Container} id={'premium_insurance'}>
            <div className={styles.Text}>calculate premium</div>
            <div className={styles.ButtonContainer}>
                <a className={styles.Button} href={'/supervisa'}>super visa insurance</a>
                <a className={styles.Button} href={'#contact'}>visitor&apos;s insurance</a>
            </div>
        </Section>
    )
}

export default Premium