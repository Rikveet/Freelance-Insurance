'use client';
import Section from "@/app/components/Section";
import styles from './index.module.css';
import {useState} from "react";
import {GrNext} from "react-icons/gr";
import {AnimatePresence, motion} from "framer-motion";
import {useInterval} from "usehooks-ts";
import Image from "next/image";
import SuperVisaImg from "@/app/assets/images/home/super_visa.webp";
import RespRrspTfsa from "@/app/assets/images/home/resp_rrsp_tfsa.webp";
import LifeInsuranceImg from "@/app/assets/images/home/life_insurance.webp";

const images = [
    {
        file: SuperVisaImg,
        alt: ''
    },
    {
        file: RespRrspTfsa,
        alt: ''
    },
    {
        file: LifeInsuranceImg,
        alt: ''
    }
]



const HomeCarousel = () => {
    const [pointer, _setPointer] = useState(1);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [isPlaying, setPlaying] = useState(true);
    const setPointer = (p: number) => {
        if (Date.now() - lastUpdate > 1000) {
            setLastUpdate(Date.now())
            _setPointer(p)
        }
    }
    const increment = () => {
        if (pointer + 1 >= images.length) {
            setPointer(0)
        } else {
            setPointer(pointer + 1)
        }
    }
    const decrement = () => {
        if (pointer - 1 < 0) {
            setPointer(images.length - 1)
        } else {
            setPointer(pointer - 1)
        }
    }
    const getImage = (i: number) => {
        const reduced = Math.abs(i) >= images.length ? Math.abs(i) - ((Math.abs(i) % images.length) * images.length) : Math.abs(i);
        if (i < 0) {
            return images[images.length - reduced];
        } else if (i === images.length) {
            return images[0]
        } else if (i > images.length) {
            return images[reduced]
        } else {
            return images[i]
        }
    }
    useInterval(increment, isPlaying ? 4000 : null)
    return (
        <Section id={'home'} className={styles.Container}>
            <div className={styles.Carousel}>
                <AnimatePresence initial={false}>
                    <motion.div
                        key={'pointer - 1'}
                        className={styles.Image}
                        initial={{x: '0%', zIndex: 0, width: '80%', filter: 'blur(0)', scale: 0.75}}
                        animate={{x: '-95%', zIndex: 1, width: '75%', filter: 'blur(10px)', scale: 0.75}}
                        exit={{x: '-95%', zIndex: 0, width: '75%', filter: 'blur(10px)', scale: 0.75}}
                        transition={{
                            duration: 0.8,
                            zIndex: {
                                delay: 1,
                            }
                        }}
                    >
                        <div>
                            <Image
                                onMouseEnter={() => {
                                    setPlaying(false)
                                }}
                                onMouseLeave={() => {
                                    setPlaying(true)
                                }}
                                src={getImage(pointer - 1).file}
                                alt={getImage(pointer - 1).alt}
                                fill={true}
                                loading={'lazy'}
                                unoptimized/>
                        </div>
                    </motion.div>
                    <motion.div
                        key={'pointer'}
                        className={styles.Image}
                        initial={{x: '100%', zIndex: 0, width: '75%', filter: 'blur(10px)', scale: 0.75}}
                        animate={{x: '0%', zIndex: 2, width: '80%', filter: 'blur(0)', scale: 1}}
                        exit={{x: '-100%', zIndex: 0, width: '75%', filter: 'blur(0)', scale: 0.75}}
                        transition={{
                            duration: 0.8
                        }}
                    >
                        <div>
                            <Image
                                onMouseEnter={() => {
                                    setPlaying(false)
                                }}
                                onMouseLeave={() => {
                                    setPlaying(true)
                                }}
                                src={getImage(pointer).file} alt={getImage(pointer).alt}
                                fill={true}
                                loading={'lazy'}
                                unoptimized/>
                        </div>
                    </motion.div>
                    <motion.div
                        key={'pointer + 1'}
                        className={styles.Image}
                        initial={{x: '190%', zIndex: 0, width: '75%', filter: 'blur(10px)', scale: 0.75}}
                        animate={{x: '95%', zIndex: 1, width: '75%', filter: 'blur(10px)', scale: 0.75}}
                        exit={{x: '0%', zIndex: 0, width: '80%', filter: 'blur(10px)', scale: 0.75}}
                        transition={{
                            duration: 0.8,
                            zIndex: {
                                delay: 1,
                            }
                        }}
                    >
                        <div>
                            <Image
                                onMouseEnter={() => {
                                    setPlaying(false)
                                }}
                                onMouseLeave={() => {
                                    setPlaying(true)
                                }}
                                src={getImage(pointer + 1).file}
                                alt={getImage(pointer + 1).alt}
                                fill={true}
                                loading={'lazy'}
                                unoptimized/>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <GrNext className={`${styles.Arrow} ${styles.Right}`} onClick={() => {
                increment();
                setPlaying(true);
            }}/>
            <GrNext className={`${styles.Arrow} ${styles.Left}`} onClick={() => {
                decrement();
                setPlaying(true);
            }}/>
        </Section>
    )
}
export default HomeCarousel;