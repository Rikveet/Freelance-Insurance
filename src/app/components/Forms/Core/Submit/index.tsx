import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import {motion} from "framer-motion";
import React, {useContext} from "react";
import Loading from "@/app/components/Motions/Loading";
import {Processing} from "@/app/components/Forms";
import SubmitResult from "@/app/components/Motions/SubmitResult";
import {TiTick} from "react-icons/ti";
import {BiError} from "react-icons/Bi";

type props = {
    exit: { (): void },
    submit: { isDisabled: boolean }
}
const Submit = ({exit, submit: {isDisabled}}: props) => {
    const {isProcessing, processingResult} = useContext(Processing)
    return (
        <div className={sharedStyles.Row} style={{justifyContent: 'center', gap: '10px', boxSizing: 'border-box'}}>
            <motion.button
                type="button"
                className={sharedStyles.SubmitButton}
                disabled={isProcessing}
                onClick={() => {
                    exit()
                }}
                layout={'position'}>
                Back
            </motion.button>
            <motion.button
                className={sharedStyles.SubmitButton}
                disabled={isDisabled || isProcessing || processingResult !== undefined}
                style={{
                    ...processingResult !== undefined ? {
                        boxShadow: 'none',
                        justifyContent: 'center',
                        gap: '5px',
                        color: 'white',
                        borderColor: 'white'
                    } : {}
                }}
                layout={'position'}>
                {
                    processingResult === undefined ?
                        isProcessing ?
                            <Loading/>
                            :
                            <input type={'submit'} value={'Submit'} disabled={isDisabled}/> :
                        processingResult ?
                            <SubmitResult text={'Submitted'} Icon={TiTick} color={'green'}/> :
                            <SubmitResult text={'Failed'} Icon={BiError} color={'red'}/>
                }
            </motion.button>
        </div>
    )
}

export default Submit