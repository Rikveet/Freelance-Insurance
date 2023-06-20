"use client";
import {IconType} from "react-icons";
import {motion, Variants} from "framer-motion";

type InfoButtonProps = {
    Icon: IconType,
    href: string,
    text?: string,
    newWindow?: boolean
}

const variants: Variants = {
    hover: {
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)'
    }
}

const InfoButton = ({href, text, Icon, newWindow}: InfoButtonProps) =>
    <motion.a
        href={href}
        rel={"noopener noreferrer"}
        {...(newWindow ? {target: '_blank'} : {})}
        style={
            {
                fontSize: '0.8em',
                fontWeight: '500',
                lineHeight: '2.5em',
                color: 'white',
                display: 'flex',
                flexDirection: 'row',

                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                border: '1px solid transparent',
                padding: '2px',
                borderRadius: '5px'
            }
        }
        variants={variants}
        whileHover={'hover'}
        transition={{duration: 0.2, ease: 'easeInOut', type: 'tween'}}
    >
        <Icon style={{
            minHeight: '20px',
            aspectRatio: '1',
            width: 'auto'
        }}/>
        {
            text ?
                <p style={{
                    fontFamily: 'Montserrat, sans-serif',
                    margin: '0'
                }}>
                    {text}
                </p>
                : null
        }

    </motion.a>


export default InfoButton;