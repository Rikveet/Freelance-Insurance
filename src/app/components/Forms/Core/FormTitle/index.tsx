import {motion} from "framer-motion";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import React from "react";
type props={
    text: string
}
const FormTitle =({text}:props)=>(
    <motion.div className={sharedStyles.Title} layout={'position'}>
        {text}
    </motion.div>
)
export default FormTitle