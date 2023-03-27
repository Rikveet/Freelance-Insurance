import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import {motion} from "framer-motion";
import React from "react";
import Loading from "@/app/components/Motions/Loading";
type props = {
    exit: { (): void },
    submit: {isDisabled: boolean, isProcessing: boolean}
}
const Submit = ({exit, submit: {isDisabled, isProcessing}}: props)=>(

    <div className={sharedStyles.Row} style={{justifyContent: 'center', gap: '10px', boxSizing: 'border-box'}}>
        <motion.button
            type="button"
            className={sharedStyles.SubmitButton}
            onClick={() => {
                exit()
            }}
            layout={'position'}>
            Back
        </motion.button>
        <motion.button
            className={sharedStyles.SubmitButton}
            disabled={isDisabled}
            layout={'position'}>
            {
                isProcessing ?
                    <Loading/>
                    :
                    <input type={'submit'} value={'Submit'} disabled={isDisabled}/>
            }
        </motion.button>
    </div>
)

export default Submit