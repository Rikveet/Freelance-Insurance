import styles from './index.module.css';
import Phone from "@/app/components/ContactLinks/Phone";
import Email from "@/app/components/ContactLinks/Email";
import Map from "@/app/components/ContactLinks/Map";
import Instagram from "@/app/components/ContactLinks/Instagram";
import Twitter from "@/app/components/ContactLinks/Twitter";
import Facebook from "@/app/components/ContactLinks/Facebook";

const BusinessInfo = () => (
    <div className={styles.Container}>
        <div className={styles.Heading}>
            contact us
            <span>
                  Fill up the form and our Team will get back to you within 24 hours.
            </span>
        </div>
        <div className={styles.Links}>
            <Phone/>
            <Email/>
            <Map/>
        </div>
        <div className={styles.SocialLinks}>
            <Facebook/>
            <Instagram/>
            <Twitter/>
        </div>
    </div>
)
export default BusinessInfo