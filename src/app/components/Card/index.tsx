'use client';
import styles from './index.module.css';
import {useRouter} from "next/navigation";
import {useContext, useEffect, useState} from "react";
import {CurrentSection} from "@/app/context/CurrentSection";
import Fade from '../Motions/Fade';
import Image, {StaticImageData} from "next/image";
import {motion, Variants} from "framer-motion";


type props = {
    id: string,
    image: {
        file: StaticImageData,
        alt: string,
        desc: string,
    },
    title: string,
    desc: string
}

const variants: Variants = {
    'onHover': {
        scale: 1.01,
        transition: {
            duration: 0.2,
            type: 'tween',
            ease: 'easeInOut'
        }
    }
}

const buttonVariants: Variants = {
    'onHover': {
        backgroundColor: '#821914'
    }
}

const Card = ({id, image, title, desc}: props) => {
    const router = useRouter();
    const {section, setSection} = useContext(CurrentSection);
    const [isActive, setActive] = useState(false);
    useEffect(() => {
        if (section?.replace('#', '') === id) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [id, section])
    return (
        <Fade key={id}
              className={`${styles.Container}`}
              {...{id}}>
            <motion.div className={styles.BorderContainer}
                        variants={variants}
                        whileHover={'onHover'}
                        onMouseEnter={async () => {
                            if (id) {
                                await router.push('#' + id)
                                setSection('#' + id)
                            }
                        }}>
                <div className={styles.ImageContainer}>
                    <Image className={styles.Image} src={image.file} alt={image.alt} width={200} height={200}
                           loading={'lazy'}/>
                    <p className={styles.ImageDesc}>{image.desc}</p>
                </div>
                <p className={styles.Title}>{title}</p>
                <p className={styles.Desc}>{desc}</p>
                <motion.a className={styles.Button} href={'#contact'} variants={buttonVariants} whileHover={'onHover'}
                          transition={{duration: 0.2, type: 'tween', ease: 'easeInOut'}}><p>get free quote</p>
                </motion.a>
            </motion.div>
        </Fade>
    )
}

export default Card;