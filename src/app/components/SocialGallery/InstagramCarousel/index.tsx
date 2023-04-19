'use client';
import React, {useEffect, useState} from "react";
import styles from './index.module.css';
import {motion} from "framer-motion";
import {useInterval, useWindowSize} from "usehooks-ts";
import ReactPlayer from "react-player";
import {FaRegPlayCircle} from "react-icons/fa";
import {useInView} from "react-intersection-observer";
import Image from "next/image";

export type Link = {
    id: string,
    media_type: string,
    media_url: string | string[],
    thumbnail_url?: string,
    timestamp: string,
    caption?: string,
    username: string,
    permalink: string
}

const ImageView = ({url}: { url?: string }) => {
    return (
        url ? <Image className={styles.CardMedia} src={url} alt={'Instagram post'} height={250} width={250}
                     loading={'eager'} unoptimized={true}/> : <></>
    )
}

const VideoView = ({url, thumbnail}: { url: string, thumbnail?: string }) => {
    const [open, setOpen] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [ref, inView] = useInView()
    useEffect(() => {
        if (!inView) {
            setPlaying(false)
        }
    }, [inView])

    return (
        <div ref={ref} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            position: 'relative'
        }}>
            {
                open ?
                    <>
                        <ReactPlayer
                            key={url}
                            playing={playing}
                            className={styles.CardMedia}
                            width={'100%'}
                            height={'100%'}
                            url={url}
                            loop={true}
                            controls={true}
                        />
                    </>
                    :
                    <>
                        <FaRegPlayCircle className={styles.PlayButton} onClick={() => {
                            setOpen(true)
                            setPlaying(true)
                        }}/>
                        <ImageView url={thumbnail}/>
                    </>

            }


        </div>

    )
}

type EmbedProps = {
    linkInfo: Link,
    moveToEnd: Function,
    lastElement: boolean,
    speed: number
}
const Embed = ({linkInfo, moveToEnd, lastElement, speed}: EmbedProps) => {
    useInterval(() => {
        moveToEnd()
    }, speed * 1000)
    return (
        <motion.div
            initial={{opacity: lastElement ? 0 : 1}}
            animate={{opacity: 1, y: '-105%'}}
            transition={{duration: speed}}
            id={linkInfo.id} key={linkInfo.id}
            className={styles.CardContainer}>
            {
                linkInfo.media_type === 'VIDEO' ?
                    <VideoView
                        url={linkInfo.media_url as string}
                        thumbnail={linkInfo.thumbnail_url}
                    />
                    :
                    <ImageView url={linkInfo.media_url as string}/>
            }
            {linkInfo.caption && <p className={styles.PostInfo}>{linkInfo.caption}</p>}
            <p className={styles.TimeStamp}>{linkInfo.timestamp}</p>
        </motion.div>
    )
}

const Carousel = ({postLinks, speed}: { postLinks: Link[], speed: number }) => {
    const [links, setLinks] = useState<Link[]>(postLinks);
    const [isPlaying, setPlaying] = useState(true);
    const moveToEnd = (link: Link) => {
        if (links![0].id === link.id && isPlaying) {
            const newList: Link[] = links!.slice(1, links!.length)
            newList.push({...link})
            setLinks(newList)
        }
    }
    return (
        <motion.div
            className={styles.Container}
            onMouseEnter={() => {
                setPlaying(false)
            }}
            onMouseLeave={() => {
                setPlaying(true)
            }}
            onDragEnter={() => {
                setPlaying(false)
            }}
            onDragExit={() => {
                setPlaying(true)
            }}
            style={{
                ...isPlaying ? {
                    overflowY: 'hidden',
                    height: '100%',
                } : {
                    overflowY: 'scroll',

                }
            }}
        >
            {
                links.map((link, index) =>
                    <Embed key={link.id + '_' + index}
                           moveToEnd={() => {
                               moveToEnd(link)
                           }}
                           lastElement={index + 1 === links.length}
                           linkInfo={link}
                           speed={speed}
                    />)
            }
        </motion.div>
    )
}

const InstagramCarousel = ({postLinks}: { postLinks: Link[]}) => {
    const [maxPerColumns, setMaxPerColumns] = useState<number>(1)
    const size = useWindowSize()
    useEffect(() => {
        setMaxPerColumns(Math.floor(postLinks.length / Math.floor(Math.max(size.width / 350, 1))))
    }, [])
    useEffect(() => {
        setMaxPerColumns(Math.floor(postLinks.length / Math.floor(Math.max(size.width / 350, 1))))
    }, [postLinks, size])

    const getColumns = () => {
        const columns: Link[][] = []
        for (let i = 0; i < postLinks!.length; i += maxPerColumns) {
            columns.push(postLinks!.slice(i, i + maxPerColumns))
        }
        if (columns[columns.length - 1].length < maxPerColumns) {
            columns.pop()
        }
        return columns
    }
    return (
        <>
            {
                getColumns().map((links) => (
                    <Carousel
                        key={links.map(link => link.id).join('')}
                        postLinks={links}
                        speed={Math.floor(Math.random() * (12 - 8 + 1) + 8)}/>
                ))
            }
        </>
    )
}

export default InstagramCarousel;