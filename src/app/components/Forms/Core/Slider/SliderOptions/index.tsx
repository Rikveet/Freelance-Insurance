
import {IconType} from "react-icons";
import styles from "./index.module.css";
import {MdErrorOutline} from "react-icons/md";
import {motion} from "framer-motion";
import React from "react";

type props = {
    add: { Icon: IconType, disabled: boolean, onClick: Function },
    remove: { Icon: IconType, disabled: boolean, onClick: Function },
    options: { text: string|undefined, selected: boolean, isInvalid: boolean, onClick: Function }[]
}

const SliderOptions = ({add, remove, options}: props) => (
    <motion.div className={styles.Applicants} layout={'position'}>
        <add.Icon
            onClick={() => {
                if (add.disabled) {
                    add.onClick()
                }
            }} className={`${styles.Icon} ${!add.disabled ? styles.IconDisabled : ''}`}/>
        {
            options.map((option,index)=>(
                <button
                    className={`${styles.Icon} ${option.selected ? styles.IconDisabled : ''}`}
                    key={`${option.text} ${index}`}
                    style={option.selected ? {background: '#16296a'} : {}}
                    type={'button'}
                    onClick={() => {
                        if (!option.selected) {
                            option.onClick()
                        }
                    }}>
                    {option.text ? option.text.charAt(0).toUpperCase() : '?'}
                    {option.isInvalid && <MdErrorOutline className={styles.ErrorIcon}/>}
                </button>
            ))
        }
        {
            remove.disabled &&
            <remove.Icon
                className={`${styles.Icon}`}
                style={{position: 'absolute', right: 0, top: 0}}
                onClick={()=>{remove.onClick()}}/>
        }
    </motion.div>
)

export default SliderOptions