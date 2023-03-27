import {motion} from "framer-motion";
import React, {ReactNode} from "react";

type props = {
    children: ReactNode,
    className?: string,
    style?: React.CSSProperties | undefined,
    id: string,

}
const item = {
    hidden: {opacity: 0, paddingTop: '20px'},
    show: {opacity: 1, paddingTop: '0px'}
}
const Fade = ({className, id, children, style}: props) => {
    return (
            <motion.div {...{id, className, style}} variants={item}>
                {children}
            </motion.div>
    )
}
export default Fade;