'use client';
import {motion} from "framer-motion";
import styles from './index.module.css';
import {useRouter} from "next/navigation";
import {useContext} from "react";
import {CurrentSection} from "@/app/context/CurrentSection";

const FadeIn = {
    'hidden': {
        background: 'rgba(255, 255, 255, 0.5)',
        transition: {
            duration: 0.5
        }
    },
    'show': {
        background: 'rgba(255, 255, 255, 1)',
        backdropFilter: 'blur(20px)',
        transition: {
            duration: 0.5
        }
    }
}
const SlideRight = {
    'middle': {
        opacity: 0,
        x: '-50%',
        transition: {
            duration: 0.5
        }
    },
    'right': {
        opacity: 1,
        x: '0',
        transition: {
            duration: 1
        }
    }
}

const CriticalIllness = () => {
    const router = useRouter();
    const {setSection} = useContext(CurrentSection);
    return (
        <div className={styles.Container}
             id={'critical_illness_insurance'}
             onMouseEnter={async () => {
                 await router.push('#critical_illness_insurance')
                 setSection('#critical_illness_insurance')
             }}
        >
            <div className={styles.ImageContainer}>
                <motion.img className={styles.Image}
                            src={'/images/criticalIllness.jpg'}
                            alt={'critical illness'}
                            variants={FadeIn}
                            initial={'hidden'}
                            whileInView={'show'}
                            viewport={{once: true}}
                />
            </div>
            <div className={styles.InfoContainer}>
                <motion.div className={styles.Name} variants={SlideRight} initial={'middle'} whileInView={'right'}
                            viewport={{once: true}}>
                    shevinder sidhu special
                </motion.div>
                <motion.div className={styles.Specialization} variants={SlideRight} initial={'middle'}
                            whileInView={'right'}
                            viewport={{once: true}}>
                    critical illness insurance
                </motion.div>
                <motion.div className={styles.BorderLine} variants={SlideRight} initial={'right'}
                            whileInView={'right'}
                            viewport={{once: true}}/>
                <motion.div className={styles.Info} variants={SlideRight} initial={'middle'} whileInView={'right'}
                            viewport={{once: true}}>
                    Critical Illness Insurance covers serious and long-term illnesses that require an expensive
                    medical
                    treatment. Critical Illness Insurance will cover you against most life threatening diseases like
                    Cancer, heart attack, etc.
                </motion.div>
                <motion.div className={styles.Info} variants={SlideRight} initial={'middle'} whileInView={'right'}
                            viewport={{once: true}}>
                    This insurance provides lump-sum coverage amount so that you can pay for your exorbitant medical
                    expenses and ease financial burden while recovering.
                </motion.div>
                <motion.a className={styles.Button}
                          href={'#contact'}
                          variants={SlideRight}
                          initial={'middle'}
                          whileHover={{backgroundColor: '#821914'}}
                          whileInView={'right'}
                          viewport={{once: true}}
                >
                    <p>get free quote</p>
                </motion.a>
            </div>
        </div>
    )
}
export default CriticalIllness;