'use client';
import styles from './index.module.css';
import {useRouter} from "next/navigation";
import {useContext, useEffect, useState} from "react";
import {CurrentSection} from "@/app/context/CurrentSection";
import Fade from '../Motions/Fade';
import Image from "next/image";

type props = {
    id: string,
    image: {
        fileName: string,
        alt: string,
        desc: string,
    },
    title: string,
    desc: string,
    button: {
        text: string,
        onClick: Function
    }
}
const Card = ({id, image, title, desc, button}: props) => {
    const router = useRouter();
    const {section, setSection} = useContext(CurrentSection);
    const [isActive, setActive] = useState(false);
    useEffect(()=>{
        if(section?.replace('#','') === id){
            setActive(true)
        }else {
            setActive(false)
        }
    },[id, section])
    return (
        <Fade key={id}
              className={`${styles.Container}`}
              {...{id}}>
            <div className={styles.BorderContainer}
                 style={isActive ? {background: 'rgba(168, 213, 255, 0.25)'} : {}}
                 onMouseEnter={async () => {
                     if (id) {
                         await router.push('#' + id)
                         setSection('#' + id)
                     }
                 }}>
                <div className={styles.ImageContainer}>
                    <Image className={styles.Image} src={image.fileName} alt={image.alt} width={200} height={200} loading={'eager'}/>
                    <p className={styles.ImageDesc}>{image.desc}</p>
                </div>
                <p className={styles.Title}>{title}</p>
                <p className={styles.Desc}>{desc}</p>
                <button className={styles.Button} onClick={() => button.onClick()}>{button.text}</button>
            </div>
        </Fade>
    )
}

export default Card;