import styles from './index.module.css';
import {IconType} from "react-icons";

type props={
    className?: string,
    Icon: IconType,
    text?: string
}
const InfoHeaderItem = ({Icon, text, className = ''}:props)=>(
    <div className={`${styles.InfoHeaderItem} ${className}`}>
        {<Icon className={styles.InfoIcon}/>}
        {text && <span className={styles.InfoText}>{text}</span>}
    </div>
)

export default InfoHeaderItem;