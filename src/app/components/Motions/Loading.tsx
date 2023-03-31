import {motion} from "framer-motion";
import React from "react";
import {AiOutlineLoading} from "react-icons/ai";

const Loading = () => (
    <div
        style={{
            height: '100%',
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <motion.div
            style={{
                width: "50%",
                height: "50%",
                display: "flex",
                justifyContent: "space-around",
                boxSizing: 'border-box',
            }}
            animate={{rotate: 360}}
            transition={{repeat: Infinity, duration: 0.5}}
        >
            <AiOutlineLoading style={{height: '100%', width: 'auto', aspectRatio: '1'}}/>
        </motion.div>
        <p>
            Submitting
        </p>

    </div>
)

export default Loading