import styles from "./index.module.css";
import React from "react";
import TypeWriter from "@/app/components/Forms/TypeWriter";

const BlueWave = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#82A0C8" fillOpacity="1"
              d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,112C1120,117,1280,203,1360,245.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
)
const GreyWave = () => (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <g>
            <path fill="#16296A" fillOpacity="1"
                  d="M0,256L80,261.3C160,267,320,277,480,240C640,203,800,117,960,96C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            <foreignObject className={styles.TitleContainer}>
                <TypeWriter className={styles.Title} constantText={'get'} texts={['quote', 'advice', 'insurance']}/>
            </foreignObject>
        </g>

    </svg>
)

const Title = () => (
    <div className={styles.Container}>
        <div className={styles.Waves}>
            <GreyWave/>
            <BlueWave/>
        </div>
    </div>
)
export default Title