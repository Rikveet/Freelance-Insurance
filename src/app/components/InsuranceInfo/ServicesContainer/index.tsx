import React, {ReactNode} from "react";
import {motion} from "framer-motion";
import styles from "./index.module.css";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}
type props={
    children:ReactNode
}
const ServicesContainer = ({children}:props)=>{
    return(
        <motion.div
            className={styles.Container}
            variants={container}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{once: true}}
        >
            {children}
        </motion.div>
    )
}
export default ServicesContainer