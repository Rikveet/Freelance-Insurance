'use client';
import React, {useContext, useState} from "react";
import styles from './index.module.css';
import {CurrentSection} from "@/app/context/CurrentSection";
import {AnimatePresence, motion} from "framer-motion";
import {MdOutlineMenuOpen} from "react-icons/md";


type props = {
    links: {
        text: string,
        sectionID: string
    }[]
}
const anchor = {
    hidden: {
        opacity: 0,
        paddingLeft: '20px',
        paddingTop: '5px'
    },
    show: {
        opacity: 1,
        paddingLeft: '0px',
        paddingTop: '5px',
        transition: {
            staggerChildren: 0.2
        }
    },
    exit: {
      opacity: 0,
      transition: {
          duration: 1
      }
    }
}

const Navbar = ({links}: props) => {
    const {section, setSection} = useContext(CurrentSection)
    const [isOpen, setToggle] = useState(false)
    return (
        <AnimatePresence initial={false}>
        <motion.div
            className={styles.NavbarContainer}
            initial={{
                translateX: '0%',
                translateY: '-50%',
            }}
            animate={{
                translateX: isOpen ? '0%' : '-100%',
                translateY: '-50%'
            }}
            transition={{duration: 1}}
        >
            <div className={styles.Navbar}>
                <motion.div
                    className={styles.NavbarToggle}
                    onClick={() => setToggle(!isOpen)}
                    initial={{
                        rotate: 0,
                        translateX: '110%',
                        translateY: '-50%'
                    }}
                    animate={{
                        rotate: isOpen ? 0 : 180,
                        translateX: isOpen ? '50%' : '110%',
                        translateY: '-50%',
                    }}
                    transition={{duration: 1}}
                >
                    <MdOutlineMenuOpen/>
                </motion.div>
                <AnimatePresence initial={false}>
                    {
                        isOpen ?
                            <motion.div
                                key={'NavBar'}
                                variants={anchor}
                                initial={'hidden'}
                                animate={'show'}
                                exit={'exit'}
                            >
                                {links.map(link => (
                                    <motion.div key={link.sectionID} variants={anchor}>
                                        <a
                                            className={`${styles.Link}`}
                                            style={
                                                section?.replace('#', '') === link.sectionID ?
                                                    {
                                                        color: "black",
                                                        borderBottomColor: '',
                                                        fontWeight: 'bold'
                                                    } :
                                                    {
                                                        color: "gray",
                                                        fontSize: '18px'
                                                    }
                                            }
                                            href={`#${link.sectionID}`}
                                            key={link.sectionID + '_Button'}
                                            onClick={() => {
                                                setToggle(false)
                                                setSection(link.sectionID)
                                            }}
                                        >
                                            {link.text}
                                            <span style={
                                                section?.replace('#', '') === link.sectionID ?
                                                    {
                                                        width: '100%'
                                                    } :
                                                    {
                                                        width: '0'
                                                    }
                                            }/>
                                        </a>
                                    </motion.div>
                                ))}
                            </motion.div> :
                            <></>
                    }
                </AnimatePresence>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

export default Navbar;