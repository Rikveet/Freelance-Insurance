import {motion} from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import {Property} from "csstype";
import Color = Property.Color;

const SubmitResult = ({Icon, text, color}:{Icon: IconType, text: string, color: Color}) => (
    <>
        <motion.div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut', repeat: Infinity}}>
            <Icon style={{
                height: '25px',
                aspectRatio: '1',
                width: 'auto'
            }}/>
        </motion.div>
        <p>
            {text}
        </p>
    </>
)

export default SubmitResult