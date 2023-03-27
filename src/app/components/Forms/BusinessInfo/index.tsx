import styles from './index.module.css';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa";
import {MdAddCall, MdOutgoingMail} from "react-icons/md";
import {CiLocationOn} from "react-icons/ci";

const BusinessInfo = () => (
    <div className={styles.Container}>
        <div className={styles.Heading}>
            contact us
            <span>
                  Fill up the form and our Team will get back to you within 24 hours.
            </span>
        </div>
        <div className={styles.Links}>
            <button className={styles.Link}>
                <MdAddCall className={styles.LinkIcon}/>
                <p className={styles.LinkText}>
                    +1 (416) 557-8080
                </p>
            </button>
            <button className={styles.Link}>
                <MdOutgoingMail className={styles.LinkIcon}/>
                <p className={styles.LinkText}>
                    shevindersidhu@gmail.com
                </p>
            </button>
            <button className={styles.Link}>
                <CiLocationOn className={styles.LinkIcon}/>
                <p className={styles.LinkText}>
                    Dewside Dr, Brampton
                </p>
            </button>
        </div>
        <div className={styles.SocialLinks}>
            <FaFacebookSquare className={styles.SocialLink}/>
            <FaTwitterSquare className={styles.SocialLink}/>
            <FaInstagramSquare className={styles.SocialLink}/>
        </div>
    </div>
)
export default BusinessInfo