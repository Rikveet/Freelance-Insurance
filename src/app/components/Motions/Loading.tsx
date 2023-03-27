import {motion} from "framer-motion";
import React from "react";

const Dot = () => (
    <motion.span
        style={{
            display: "block",
            width: "2rem",
            height: "2rem",
            backgroundColor: "white",
            borderRadius: "50%"
        }}
        initial={{
            y: "0%"
        }}
        animate={{
            y: "100%"
        }}
        transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
)

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
                width: "10rem",
                height: "5rem",
                display: "flex",
                justifyContent: "space-around"
            }}
            animate={{
                transition: {
                    staggerChildren: 0.2
                }
            }}>
            <Dot/>
            <Dot/>
            <Dot/>
        </motion.div>
    </div>
)

export default Loading