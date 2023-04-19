"use client";
import styles from "./index.module.css";
import Premium from "@/app/components/InsuranceInfo/Premium";
import MainServices from "@/app/components/InsuranceInfo/MainServices";
import Section from "@/app/components/Section";
import React from "react";

const InsuranceInfo =()=>(
    <Section className={styles.Container}>
        <Premium/>
        <MainServices/>
    </Section>
)

export default InsuranceInfo