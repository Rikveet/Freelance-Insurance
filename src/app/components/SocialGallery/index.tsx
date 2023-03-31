import Instagram, {Link} from "@/app/components/SocialGallery/InstagramCarousel";
import styles from './index.module.css';
import {useEffect, useState} from "react";
import {useWindowSize} from "usehooks-ts";
import axios from "axios";

const getLinks = async () => {
    const results =  await axios.get('/api/instaLinks').then(data => data.data.data as Link[]).catch(_ => undefined)
    console.log(results)
    if (!results) {
        return []
    }
    return results.map(link => {
        const date = new Date(link.timestamp)
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const nth = function (d: number) {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        }
        return {
            ...link,
            timestamp: `${date.getDate()}${nth(date.getDate())} ${monthNames[date.getMonth()]} ${date.getFullYear() % 100}`
        }
    })
}




const SocialGallery = () => {
    const [links, setLinks] = useState<Link[]>()
    const [maxPerColumns, setMaxPerColumns] = useState<number>(0)
    const size = useWindowSize();
    const getColumns = () => {
        const columns: Link[][] = []
        for (let i = 0; i < links!.length; i += maxPerColumns) {
            columns.push(links!.slice(i, i + maxPerColumns))
        }
        if (columns[columns.length - 1].length < maxPerColumns) {
            columns.pop()
        }
        return columns
    }
    useEffect(()=>{
        getLinks().then(result=>{
            setMaxPerColumns(Math.floor(result.length / Math.floor(size.width / 350)))
            setLinks(result)
        }).catch(_=>{})
    },[])
    useEffect(() => {
        if (links) {
            setMaxPerColumns(Math.floor(links.length / Math.floor(Math.max(size.width / 400,1))))
        }
    }, [size, links])

    return (
        links && links?.length>0 ?
            <div className={styles.Container} id={'media'}>
                {
                    getColumns().map((links) => (
                        <Instagram
                            key={links.map(link => link.id).join('')}
                            postLinks={links}
                            speed={Math.floor(Math.random() * (12 - 8 + 1) + 8)}
                        />
                    ))
                }
            </div> :
            <></>
    )
}
export default SocialGallery;