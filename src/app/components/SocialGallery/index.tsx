import InstagramCarousel, {Link} from "@/app/components/SocialGallery/InstagramCarousel";
import styles from './index.module.css';
import {Suspense} from "react";

async function getMediaInfo() {
    try {
        const instaAccessToken = process.env.INSTA_TOKEN;
        const res: {
            status: number,
            data: Link[]
        } = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,username,timestamp,caption,permalink&access_token=${instaAccessToken}`
            , {next: {revalidate: 60}})
            .then(async res => {
                if (res.status === 200) {
                    return {status: res.status, data: (await res.json()).data as Link[]}
                }
                return {status: res.status, data: [] as Link[]}
            }).catch(_ => {
                return {status: 403, data: [] as Link[]}
            })
        return {
            ...res,
            data: res.data.map(link => {
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
    } catch (_) {
        return {status: 403, data: [] as Link[]}
    }

}


const SocialGallery = async () => {
    const res = await getMediaInfo()
    return (
        <Suspense fallback={<></>}>
            {
                res.status === 200 && res.data.length > 0 ?
                    <div className={styles.Container} id={'media'}>
                        <InstagramCarousel postLinks={res.data}/>
                    </div> :
                    <></>
            }
        </Suspense>
    )
}
export default SocialGallery;