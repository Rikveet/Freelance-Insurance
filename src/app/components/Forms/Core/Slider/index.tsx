import {ReactNode} from "react";
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import { motion } from "framer-motion";

type props = {
    showIndex: number,
    length: number,
    children: ReactNode
}

const Slider = ({showIndex, length, children}: props) => (
    <motion.div style={{
        display: 'flex',
        maxWidth: '100%',
        justifyContent: 'flex-end',
        overflow: 'hidden'
    }}>
        <motion.div className={sharedStyles.Row}
                    style={{width: 'fit-content', justifyContent: 'flex-end'}}
                    animate={{x: `${(100) - ((100 / length) * (showIndex + 1))}%`}}
                    transition={{duration: 0.5}}>
            {children}
        </motion.div>
    </motion.div>
)

export default Slider