import React, {useState} from "react";
import {useInterval} from "usehooks-ts";
import {AnimatePresence, motion} from "framer-motion";

const TypeWriter = ({className, constantText, texts}: { className: string, constantText: string, texts: string[] }) => {
    const [maxChars, setMaxChars] = useState(0)
    const [increment, setIncrement] = useState(-1)
    const [textIndex, setTextIndex] = useState(0)
    useInterval(
        () => {
            if (maxChars >= texts[textIndex].length) {
                setIncrement(-1)
            } else if (maxChars <= 0 && increment === -1) {
                const newTextIndex = textIndex + 1
                if (newTextIndex >= texts.length) {
                    setTextIndex(0)
                } else {
                    setTextIndex(newTextIndex)
                }
                setIncrement(1)
            }
            setMaxChars(maxChars + increment)
        }, increment === 1 ? 500 : 250
    )
    return (
        <div {...{className}}>
            <AnimatePresence>
                {
                    constantText.split('').map((char) => (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                            key={char}
                        >
                            {char}
                        </motion.div>
                    ))
                }
                <div>-</div>
                {
                    texts[textIndex].substring(0, maxChars).split('').map((char, index) => (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                            key={index}>
                            {char}
                        </motion.div>
                    ))
                }

                <motion.div key={'Pointer'} initial={{opacity: 0}} animate={{opacity: 1}}
                            transition={{duration: 1.5, repeat: Infinity}}>
                    !
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
export default TypeWriter