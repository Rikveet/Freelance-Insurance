import {motion} from "framer-motion";
import React, {ReactNode} from "react";

type props = {
    children: ReactNode,
    className?: string,
    style?: React.CSSProperties | undefined,
    id: string,

}
const item = {
    hidden: {opacity: 0},
    show: {opacity: 1}
}
const Fade = ({className, id, children, style}: props) => {
    return (
        <motion.div {...{id, className, style}} variants={item}
                    transition={{duration: 0.5, ease: 'easeIn', type: 'tween'}}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{once: true}}
        >
            {children}
        </motion.div>
    )
}
export default Fade;