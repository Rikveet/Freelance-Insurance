import React, {ReactNode} from "react";
import styles from "./index.module.css";

type props = {
    children: ReactNode
}
const ServicesContainer = ({children}: props) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}
export default ServicesContainer