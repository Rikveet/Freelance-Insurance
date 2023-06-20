import styles from './index.module.css';
import Image from "next/image";

const Background = () => (
    <div className={styles.Container}>
        <Image src={'/images/map.png'} alt={'background map'} loading={'lazy'} height={2778} width={2778} style={{width: '100%', height: '100%', aspectRatio: '1', objectFit: 'cover'}}/>
    </div>
)
export default Background