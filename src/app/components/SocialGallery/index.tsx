import InstagramCarousel, {Link} from "@/app/components/SocialGallery/InstagramCarousel";
import styles from './index.module.css';

async function getMediaInfo() {
    const instaAccessToken = process.env.INSTA_TOKEN;
    const results = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,username,timestamp,caption,permalink&access_token=${instaAccessToken}`
        , {cache: 'no-store'})
        .then(async res => {
            return (await res.json()).data as Link[]
        }).catch(e => {
            return undefined
        })
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


const SocialGallery = async () => {
    const links = await getMediaInfo()
    return (
        links && links?.length > 0 ?
            <div className={styles.Container} id={'media'}>
                <InstagramCarousel postLinks={links}/>
            </div> :
            <></>
    )
}
export default SocialGallery;