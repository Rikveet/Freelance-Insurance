import Instagram, {Link} from "@/app/components/SocialGallery/Instagram";
import styles from './index.module.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useWindowSize} from "usehooks-ts";

const SocialGallery = () => {
    const [links, setLinks] = useState<Link[]>();
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
    useEffect(() => {
        if (links) {
            setMaxPerColumns(Math.floor(links.length / Math.floor(Math.max(size.width / 400,1))))
        }
    }, [size, links])
    useEffect(() => {
        const getLinks = async () => {
            const results =  [
                {
                    "id": "18078340399344123",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/0A4B2E03238F8E40B3D61BA6CDCC4198_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=111&vs=228284413042562_3829009008&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8wQTRCMkUwMzIzOEY4RTQwQjNENjFCQTZDRENDNDE5OF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0xNMEdCUTJzc3pKZktrQ0FOb0tBLXdqVWhkcmJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmpo331vnp7z8VAigCQzMsF0AuAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfB3qberK0DBvJ_WAzL_tJ3VvfjI3kosrikC2YOyie0RAw&oe=64232F24&_nc_sid=ea0b6e&_nc_rid=247b1e4e41",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/337544193_923830635610829_2507064367150051525_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qFdS9-jC-pQAX-4t4M-&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBzo5noTr5Ys8WkXIeExGskEW3ESwMcaYVSDmxOhgct5A&oe=64267D52",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-25T18:46:15+0000",
                    "caption": "#INSURING your peace of mind with me, So you can focus on the things that matter the most. \n\nAny Questions regarding Super Visa Insurance call me today! \n\ud835\ude1a\ud835\ude0f\ud835\ude0c\ud835\ude1d\ud835\ude10\ud835\ude15\ud835\ude0b\ud835\ude0c\ud835\ude19 \ud835\ude1a\ud835\ude10\ud835\ude0b\ud835\ude0f\ud835\ude1c \ud83d\udcf2: \ud835\udff0\ud835\udfed\ud835\udff2-\ud835\udff1\ud835\udff1\ud835\udff3-\ud835\udff4\ud835\udfec\ud835\udff4\ud835\udfec\nwww.shevindersidhu.com\nshevindersidhu\u0040gmail.com\n\n #Shevinder #ShevinderSidhu #PunjabInsurance  #Canada #Ontario #lifeinsurance #criticalinsurance #supervisainsurance #visitorhealthinsurance #disabilityinsurance #insurance #supervisa #ontario #canada #brampton",
                    "permalink": "https://www.instagram.com/reel/CqOPJ6Np59X/"
                },
                {
                    "id": "17856814937927139",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/338002537_493905199457469_3624649168389139562_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=V2wERgo9vooAX-_JxzR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCT6YJXQjDS8WNByQbgCrOaKVgYFARhH-7a9HEC81hxgg&oe=642677C7",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-25T17:37:00+0000",
                    "caption": "#INSURING your peace of mind with me, So you can focus on the things that matter the most. \n\nAny Questions regarding Super Visa Insurance call me today! \n\ud835\ude1a\ud835\ude0f\ud835\ude0c\ud835\ude1d\ud835\ude10\ud835\ude15\ud835\ude0b\ud835\ude0c\ud835\ude19 \ud835\ude1a\ud835\ude10\ud835\ude0b\ud835\ude0f\ud835\ude1c \ud83d\udcf2: \ud835\udff0\ud835\udfed\ud835\udff2-\ud835\udff1\ud835\udff1\ud835\udff3-\ud835\udff4\ud835\udfec\ud835\udff4\ud835\udfec\nwww.shevindersidhu.com\nshevindersidhu\u0040gmail.com\n\n #Shevinder #ShevinderSidhu #PunjabInsurance  #Canada #Ontario #lifeinsurance #criticalinsurance #supervisainsurance #visitorhealthinsurance #disabilityinsurance #insurance #supervisa #ontario #canada #brampton",
                    "permalink": "https://www.instagram.com/p/CqOHRxlumMf/"
                },
                {
                    "id": "18260236861124676",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/35475A8D3E5F88886C84E27425332292_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=111&vs=722255882962154_1055494941&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8zNTQ3NUE4RDNFNUY4ODg4NkM4NEUyNzQyNTMzMjI5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0g2d0hSVGpOVm5hbFlZQUFEZHpoZWVzMTNWcGJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmopSk6PrZ1EAVAigCQzMsF0AuGBBiTdLyGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfCIsL4AdwcX9jhJDgpACgSbbPwWzAftMEhXfGAKUQ3Wpw&oe=6423A357&_nc_sid=ea0b6e&_nc_rid=887e59e2ff",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/337457052_724795395793975_4195294952748882229_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=8uUSzifkWNcAX_cu43t&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBMJ7ZLCvmaJgjauReSycKcYDe5xdr3OaGz-rQPWpE-Jw&oe=6426BDF7",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-23T12:22:18+0000",
                    "permalink": "https://www.instagram.com/reel/CqIZnt8LX9H/"
                },
                {
                    "id": "18003181225591313",
                    "media_type": "CAROUSEL_ALBUM",
                    "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/337685169_540528491539172_2515691117400780859_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=h1IJEWWPyAYAX_vtipz&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD0SrmHPGrfulB1rMrzVfkDWuQwbnbP2EYQ1zecL5Z-MQ&oe=642731DB",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-23T12:19:07+0000",
                    "caption": "\u0a38\u0a3c\u0a39\u0a40\u0a26 - \u0a0f - \u0a06\u0a1c\u0a3c\u0a2e \u0a38. \u0a2d\u0a17\u0a24 \u0a38\u0a3f\u0a70\u0a18, \u0a38\u0a3c\u0a39\u0a40\u0a26 \u0a30\u0a3e\u0a1c\u0a17\u0a41\u0a30\u0a42 \u0a05\u0a24\u0a47 \u0a38\u0a3c\u0a39\u0a40\u0a26 \u0a38\u0a41\u0a16\u0a26\u0a47\u0a35 \u0a1c\u0a40 \u0a28\u0a42\u0a70 \u0a09\u0a39\u0a28\u0a3e\u0a02 \u0a26\u0a47 \u0a38\u0a3c\u0a39\u0a40\u0a26\u0a40 \u0a26\u0a3f\u0a35\u0a38 \u0a2e\u0a4c\u0a15\u0a47 \u0a15\u0a4b\u0a1f\u0a3f \u0a15\u0a4b\u0a1f\u0a3f \u0a28\u0a2e\u0a28\u0964\n\nFrom\n\ud835\ude1a\ud835\ude0f\ud835\ude0c\ud835\ude1d\ud835\ude10\ud835\ude15\ud835\ude0b\ud835\ude0c\ud835\ude19 \ud835\ude1a\ud835\ude10\ud835\ude0b\ud835\ude0f\ud835\ude1c \ud83d\udcf2: \ud835\udff0\ud835\udfed\ud835\udff2-\ud835\udff1\ud835\udff1\ud835\udff3-\ud835\udff4\ud835\udfec\ud835\udff4\ud835\udfec\nwww.shevindersidhu.com\nshevindersidhu\u0040gmail.com\n\n#bhagatsingh #rajguru #sukhdev #ShaheedDiwas  #Shevinder #ShevinderSidhu #PunjabInsurance  #Canada #Ontario #lifeinsurance #criticalinsurance #supervisainsurance #visitorhealthinsurance #disabilityinsurance #insurance",
                    "permalink": "https://www.instagram.com/p/CqIZT1wLB69/"
                },
                {
                    "id": "18239978965086148",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/337270613_586260353428410_7247863260764089784_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=NKuOUaOMIoYAX8Fapjm&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBCVKb5EEunClFA1vAJGZa9kZXBLWcRrSvpGHVFZozyzA&oe=6426F8B1",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-21T16:16:45+0000",
                    "caption": "Save More for your Child's Post-Secondary Education with RESP!\n.\nAny Questions regarding RESP call me today! \n\ud835\ude1a\ud835\ude0f\ud835\ude0c\ud835\ude1d\ud835\ude10\ud835\ude15\ud835\ude0b\ud835\ude0c\ud835\ude19 \ud835\ude1a\ud835\ude10\ud835\ude0b\ud835\ude0f\ud835\ude1c \ud83d\udcf2: \ud835\udff0\ud835\udfed\ud835\udff2-\ud835\udff1\ud835\udff1\ud835\udff3-\ud835\udff4\ud835\udfec\ud835\udff4\ud835\udfec\nwww.shevindersidhu.com\nshevindersidhu\u0040gmail.com\n\n#Shevinder #ShevinderSidhu #PunjabInsurance  #Canada #Ontario #lifeinsurance #criticalinsurance #supervisainsurance #visitorhealthinsurance #disabilityinsurance #insurance  #insurancecoverage  #insuranceclaim #insurancecompany #insuranceagents #lifeinsurance #criticalinsurance #supervisainsurance  #visitorhealthinsurance #disabilityinsurance #RESP #childeducation #childinsurance",
                    "permalink": "https://www.instagram.com/p/CqDq6hxuKSf/"
                },
                {
                    "id": "17874261071846364",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/336215701_157803323481067_8371157747590382389_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=A2fJ4Ii6jNUAX_LJt9w&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBJiNHTji9BAj-Hd-0ruzvITEoAINS4y-zhD8t3XqIA0Q&oe=64269AF8",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-18T12:43:43+0000",
                    "caption": "Life Insurance is need of the hour in Canada these days!\n.\nAny Questions regarding Insurance call me today! \n\ud835\ude1a\ud835\ude0f\ud835\ude0c\ud835\ude1d\ud835\ude10\ud835\ude15\ud835\ude0b\ud835\ude0c\ud835\ude19 \ud835\ude1a\ud835\ude10\ud835\ude0b\ud835\ude0f\ud835\ude1c \ud83d\udcf2: \ud835\udff0\ud835\udfed\ud835\udff2-\ud835\udff1\ud835\udff1\ud835\udff3-\ud835\udff4\ud835\udfec\ud835\udff4\ud835\udfec\n\n#Shevinder #ShevinderSidhu #PunjabInsurance  #Canada #Ontario #lifeinsurance #criticalinsurance #supervisainsurance #visitorhealthinsurance #disabilityinsurance #insurance  #insurancecoverage  #insuranceclaim #insurancecompany #insuranceagents #lifeinsurance #criticalinsurance #supervisainsurance  #visitorhealthinsurance #disabilityinsurance",
                    "permalink": "https://www.instagram.com/p/Cp7kJrSOaAM/"
                },
                {
                    "id": "17942078906612024",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/CC4C9B596A8203F3BFC758F6075DFC90_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=111&vs=691670229401037_2794279796&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DQzRDOUI1OTZBODIwM0YzQkZDNzU4RjYwNzVERkM5MF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0YyaERSU09wUjJBeHFFQUFJRVJoNEJEYVJCdWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmmOjJl\u00252BOh\u00252BEAVAigCQzMsF0AuGBBiTdLyGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfB-A-opNc9YZUr4-1viWWTrWh6iDCU_Mre7M8jRfp1T1w&oe=6423773E&_nc_sid=ea0b6e&_nc_rid=71dd48da0c",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/335784319_174480582015446_9026927652683125675_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=HXaaE4vDmlcAX99G3TH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDTC1eJ1WvckTUEzrpgvRtKbb_cInLrAUrVRetDnfF7uw&oe=64268571",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-15T13:20:58+0000",
                    "caption": "\u0a39\u0a28\u0a47\u0a30\u0a47 \u0a35\u0a3f\u0a71\u0a1a \u0a1a\u0a2e\u0a15\u0a23 \u0a26\u0a3e \u0a39\u0a41\u0a28\u0a30 \u0a30\u0a71\u0a16\u0a4b \u0a15\u0a3f\u0a09\u0a02\u0a15\u0a3f \u0a30\u0a3e\u0a24 \u0a28\u0a42\u0a70 \u0a1a\u0a2e\u0a15\u0a26\u0a40 \u0a1a\u0a40\u0a1c\u0a3c \u0a05\u0a15\u0a38\u0a30 \u0a1c\u0a32\u0a26\u0a40 \u0a28\u0a1c\u0a3c\u0a30 \u0a1a\u0a5c\u0a4d\u0a39 \u0a1c\u0a3e\u0a02\u0a26\u0a40 \u0a39\u0a48\u0964\n.\n.\n#inspirationalquotes #motivationalquotes #motivation #inspiration #quotes #quoteoftheday #lifeinsurance #criticalinsurance #supervisainsurance #visitorhealthinsurance #disabilityinsurance #insurance  #insurancecoverage  #insuranceclaim #insurancecompany #insuranceagents #lifeinsurance #criticalinsurance #supervisainsurance  #visitorhealthinsurance #disabilityinsurance",
                    "permalink": "https://www.instagram.com/reel/Cpz6AKFvAHE/"
                },
                {
                    "id": "17917779281694573",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/334458065_903425597640104_6425449557198230362_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=v5tinkforgkAX-dSZDo&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBW4ZRR9WpWw0Pn0DpGHoBRBqQmPTXh4af4EUxzLnTDzQ&oe=6427764A",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-13T12:50:34+0000",
                    "caption": "Supervisa Insurance is a medical emergency insurance plan for parents and grandparents visiting canada. This insurance plan covers them in case any kind of medical emergency happens and they have to seek medical care.\n\nAny Questions regarding Supervisa Insurance call me today! \n\nShevinderSidhu, \n#CALL \u260e\ufe0f 416-557-8080 Now!\n\n#Shevinder #ShevinderSidhu #PunjabInsurance  #Canada #Ontario #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/p/Cpus9fKux_U/"
                },
                {
                    "id": "18168785050277816",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/CF4CE92470A90226207CCF66C55B35A2_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=109&vs=9172885762783031_907222593&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DRjRDRTkyNDcwQTkwMjI2MjA3Q0NGNjZDNTVCMzVBMl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0RnVTdSUHZ5VHJEakNVQ0FOTFJkVk5ObWhBZGJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmvJOrt4P06T8VAigCQzMsF0BH8KPXCj1xGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfDRqU4VdAC97wlTkbsJLECXp_o5pj8AImsyd6VBMdVNKA&oe=64239537&_nc_sid=ea0b6e&_nc_rid=049243dba8",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/334674209_912254799918964_6980656049240237490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zv7qMGsB1awAX_kSMXx&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBwduZwa8qZs5sAQJWnbkFd5hSu9MyCXhzZ_XDtZhCb5g&oe=64270438",
                    "username": "shevindersidhu",
                    "timestamp": "2023-03-07T19:04:53+0000",
                    "permalink": "https://www.instagram.com/reel/Cpf6l7DLEV3/"
                },
                {
                    "id": "17886560936795744",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/AF433C885F5A7F613043495DCA375D91_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=107&vs=970064830653409_2442620206&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BRjQzM0M4ODVGNUE3RjYxMzA0MzQ5NURDQTM3NUQ5MV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR01oSnpST2JZZ2oxVUtrQ0FHS19wb1lpZzVnVmJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAm2JvG0M649T8VAigCQzMsF0A0AAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfD9hgaGoNP_LJ6gKPHY7Y11dP1fO_OIjBTE-0nwXSF7yw&oe=642387A7&_nc_sid=ea0b6e&_nc_rid=29a976e04b",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/332226952_607752774514957_7822937413354822189_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5dRjzE-RfdcAX8bruWY&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBr4_nRPfviL2Tejpv92OPHW4V2FEeaJiSNXWhlXPcz0A&oe=64270656",
                    "username": "shevindersidhu",
                    "timestamp": "2023-02-20T17:22:34+0000",
                    "caption": "On the occasion of Family Day, let us come together and celebrate this special day with our special family and thank them for all the love and support.\n\nHappy family Day! \n\n#Shevinder #ShevinderSidhu #family #FamilyDay #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/reel/Co5HSdsrEdQ/"
                },
                {
                    "id": "17980292668840003",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/329989206_710218577302795_1472954735349714045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vCtSZO8qXD4AX8rQz_X&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCpdzb5vTZhRTfeQnAJvBxFOuXizn5j8FTz60mu-0wUMQ&oe=6427A776",
                    "username": "shevindersidhu",
                    "timestamp": "2023-02-11T01:40:14+0000",
                    "caption": "With Memeber or parliament Honorable Sonia sidhu and malanie joly (Minister of Foreign Affairs of Canada)",
                    "permalink": "https://www.instagram.com/p/CogQZfpAI5q/"
                },
                {
                    "id": "17958253394352227",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/329721169_716718219832044_1692850262708054196_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=fhByHjkdvsEAX-DsOcY&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAkKt2YTr55g25Wc_QoQnpaMMzIiKjOKvUGyokmjUZrYA&oe=642729EB",
                    "username": "shevindersidhu",
                    "timestamp": "2023-02-08T18:37:41+0000",
                    "caption": "Get ready to Claim up to $7500 RESP Free Special Bonus as this is your last chance. Insurance Company is going to Discontinue the RESP Bonus with Deadline of May 26, 2023.\n\nDon't miss out, Book Appointment Now!\n\nShevinder Sidhu \n\u260e\ufe0f 416-557-8080\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/p/CoaWc8tuLAA/"
                },
                {
                    "id": "17952869780518944",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/844894DEA0BDD07AE823B18F788BEB83_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=108&vs=3538568689707394_45799973&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC84NDQ4OTRERUEwQkREMDdBRTgyM0IxOEY3ODhCRUI4M192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0QyZGtCT20xdzI2bTRrQUFIR2RLMmk4cVN4bWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmpKvkv4C\u00252F4kAVAigCQzMsF0AuCsCDEm6YGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfABuUSRS_Psy_nVdYkJVr6nTjdilVHuLxLP69qb2WOJdw&oe=64239839&_nc_sid=ea0b6e&_nc_rid=d062abb99a",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/328848627_180543107939102_8161485408710026124_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Q_FKtqPxYtMAX_HTy3V&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA6Pn81_dmF_SpMLFT5SB2TgrJuypqLf-pmte4S3HxOLg&oe=64274695",
                    "username": "shevindersidhu",
                    "timestamp": "2023-02-04T23:45:31+0000",
                    "permalink": "https://www.instagram.com/reel/CoQmeoSujC1/"
                },
                {
                    "id": "17903588687652654",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/D148F689E6D1FB88CF7AD95087999F9E_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=104&vs=8660560097351401_561244083&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EMTQ4RjY4OUU2RDFGQjg4Q0Y3QUQ5NTA4Nzk5OUY5RV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0lSV2dCUEFZZ0NhcTFrRUFCdVo1dWVpZEpCdmJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmpL29ysbD8kAVAigCQzMsF0BKO6XjU\u00252FfPGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfDRF1mWDEAA0MYiYWhgD8UnzZ3edxl5XzBkr3WoYuTbQw&oe=64234563&_nc_sid=ea0b6e&_nc_rid=b305c4936b",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/328132873_1618972145204231_5917413618241374998_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=A-81iJU1oh8AX89BDf1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCc3iH6-BClXu6Q6mzKa6KfK9ZQdxt2oZV-PVsfWca8jQ&oe=6425E7E3",
                    "username": "shevindersidhu",
                    "timestamp": "2023-02-01T13:37:06+0000",
                    "caption": "Shevinder Sidhu, the leading Insurance Expert in Canada for all your Personal Insurance needs. Cover your loved ones with Insurance today! \n\nBook Appointment Now - \ufffc\u2068(416) 557-8080\u2069\n\nShevinder Sidhu\nInsurance Expert\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/reel/CoHyalqOui3/"
                },
                {
                    "id": "18194444278217418",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/v/t42.1790-2/327628502_1375358076559781_1172517909187010255_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4-mIp7UtXukAX94B8TR&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDTy4JOuSqEo2MbxT4ad4rOg6sCuhqqKj8rnmlv-ge3HQ&oe=64260086",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.2885-15/327830849_880340473283419_4097251921873010039_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=mZowFnpCqr0AX9UW6Tl&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBGRiuiDrQQ-T4XUxx3qTTiW5DQGZ6WIR8cAAfLsi77JQ&oe=6426D5AA",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-30T14:41:52+0000",
                    "caption": "Hello Everyone\n\nHere's Second Series of Super Visa Insurance FAQs. Watch Carefully to learn all about Super Visa Insurance technicalities. \n\nBook appointment today with me to know more. \n\nShevinderSidhu,\n\u260e\ufe0f 416-557-8080\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/tv/CoCwTgVor7n/"
                },
                {
                    "id": "18023284876480376",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/E14F2B88598CA34539A5AE07C4ED1AAD_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=108&vs=912117703447293_1078920630&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9FMTRGMkI4ODU5OENBMzQ1MzlBNUFFMDdDNEVEMUFBRF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0kya2doUFdvdW1Wc2JrQUFPdHByRkxoc3lJUmJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmxKSSnve29z8VAigCQzMsF0BYEQYk3S8bGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfDQuLjr25t6sXnDyx2M1z6ajjYaZgMJtHt_fmnSFhfR9Q&oe=6423325D&_nc_sid=ea0b6e&_nc_rid=4cd32724c4",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/327787286_128824333424339_650300167614335335_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=bQ1dXBGGfW0AX-qsHYo&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA2PWcwqN8ZwMspqYfjl88lpAXBnRlERF296EcEGloheA&oe=64277BDF",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-30T14:40:34+0000",
                    "caption": "Hello Everyone\n\nHere\u2019s Second Series of Super Visa Insurance FAQs. Watch Carefully to learn all about Super Visa Insurance technicalities. \n\nBook appointment today with me to know more. \n\nShevinderSidhu,\n\u260e\ufe0f 416-557-8080\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/reel/CoCwDr9rl0s/"
                },
                {
                    "id": "18051744391376978",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/CE47EB6613CC3381B28A84C03957FDB7_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=107&vs=716274623237419_3294602069&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DRTQ3RUI2NjEzQ0MzMzgxQjI4QTg0QzAzOTU3RkRCN192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR01pQml4TWstVEFQYVFzQ0FDZXU0ZzA3U0FwSWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmkPa49qjY7T8VAigCQzMsF0BeFS8an753GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfBHsZM67eO1zr_jRAK2sPiSEtcbDgLN7sp2nq5AMhxriQ&oe=6423B87B&_nc_sid=ea0b6e&_nc_rid=2b6d909029",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/327618065_1813993202300412_5015712860977196567_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=jS_KDlee9o8AX9DBMxT&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC6vCu96oJRvV6aoHiQ8sclbXzXUry0wLC6R91-SmBbOA&oe=64275AC3",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-28T20:27:28+0000",
                    "caption": "Hello Everyone\n\nHere are a few FAQs we have while planning to Buy Super Visa Insurance. I got a request from a Subscriber to make a Video on it.\n\nShevinder Sidhu\n416-557-8080\nhttps://g.page/r/Ce1vMPE33dUJEAI/review",
                    "permalink": "https://www.instagram.com/reel/Cn-OMOgPU0A/"
                },
                {
                    "id": "17862319934863648",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/AF4F04A7D18209FFB436452AFF90DFA5_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=110&vs=5805683566205792_2085783953&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BRjRGMDRBN0QxODIwOUZGQjQzNjQ1MkFGRjkwREZBNV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0hyM2Z4T3NJcDMyU1BFQkFKc3M2ckFSYmtkZ2JxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmyPHa4MGTtz8VAigCQzMsF0AWqfvnbItEGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfAdvqVymYBwqwOp1QN63e1aDCjfTZsooa8Cc3DrDg0EeQ&oe=64233782&_nc_sid=ea0b6e&_nc_rid=a154d58c01",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/326715489_1857069741295850_6202406486871127984_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=LJX-z4wEaF4AX-7WNkD&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD5_Mg33lfvstMvS4hEaXC8AN6TG9xS6FNOFLEA5gaCZQ&oe=64264CB4",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-23T14:28:53+0000",
                    "caption": "Life Insurance is as important as mobile insurance. Don\u2019t risk your finances, cover it with Life Insurance. No matter what\u2019s your budget, what your requirements are, discuss with the expert and get budget friendly Life Insurance Plans. \n\nBook appointment today with me to know all about Life Insurance and Financial Planning. \n\nShevinderSidhu,\n\u260e\ufe0f 416-557-8080\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurances",
                    "permalink": "https://www.instagram.com/reel/CnwtPTso0iS/"
                },
                {
                    "id": "17975210206976936",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/51427F11A12F8645EF6BB98E22B331A2_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=110&vs=5963064810419852_386275616&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC81MTQyN0YxMUExMkY4NjQ1RUY2QkI5OEUyMkIzMzFBMl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR09zQ1ZoT0VFcUlsRUpvQ0FIQW94cnk1dmVOSGJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmqLPxw6Dq9D8VAigCQzMsF0BXNU\u00252FfO2RaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfC40bNA-rTbMW8Vbo5BqHKwIAuT8cgP5V6L5h6Cm4eu9A&oe=64239BD8&_nc_sid=ea0b6e&_nc_rid=d20f9d5de9",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/326241924_131714243103725_1238657407173323361_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=hBOiFaB-MAEAX8bWnQe&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCVKXnPHWJJgro4SdD11LKmELZdAPm3e0zw_amWbMZZyQ&oe=6425D09B",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-19T15:54:36+0000",
                    "caption": "Parents or Grandparents coming to Canada? Got a query regarding Supervisa Insurance??\n\nBook appointment today with me to know all about Supervisa Insurance.\n\nShevinderSidhu,\n\u260e\ufe0f 416-557-8080\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/reel/CnmjwgDKxq0/"
                },
                {
                    "id": "17971654478026505",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/9B4B96E1CD1FBA2A23A24E3331ED0E8B_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=102&vs=6210197745665974_3727358410&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC85QjRCOTZFMUNEMUZCQTJBMjNBMjRFMzMzMUVEMEU4Ql92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0Fwd2J4TVVudmZoU2tVTUFKNS1iQ25nd2JWVWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmhvu0tu7r3T8VAigCQzMsF0BApmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfBKYpTgF0Gx5Sd0yj0b6jyaK-wHqNHVz__Ygr6PBbE5YA&oe=6423C451&_nc_sid=ea0b6e&_nc_rid=0ecd3e6cf2",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/325962324_147891204723627_1614975544022210230_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=tYn4YA8YCCcAX8971Rh&_nc_oc=AQkDkp-b5po_s4EtgI5pOTYJVgqyFy9w1jJyBnHkkOGn4W1jFHO6qVqX1dTBO4dJI91LlUZcWLu0Ir5woCQaHFBZ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBggdAU07ULcjZXQ-7fmuvyN-Bzpee6WVqlN_Vi4-rJ3Q&oe=642636F2",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-16T13:39:03+0000",
                    "caption": "An accident can ruin your life and finances. Add Disability Insurance to your financial portfolio as it takes care of your lost income due to Disability. Don\u2019t let any incident ruin your ability to earn, cover it with Disability Insurance.\n\nAny Questions regarding Disability Insurance, Call or Text me today! \n\nShevinderSidhu,\n\u260e\ufe0f 416-557-8080\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/reel/Cnel8nAqU86/"
                },
                {
                    "id": "17977440685820344",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/F344204A0FB3C2C10E0516716736AA97_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=109&vs=540717034658070_2853829570&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GMzQ0MjA0QTBGQjNDMkMxMEUwNTE2NzE2NzM2QUE5N192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR01VUFpSTVNEUTNNWWNzRUFKQnVUdnhlZ2RJWGJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAm0raP5bXB1T8VAigCQzMsF0AxZmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfDSXOk9fxGOvWqxqOraPT4akULN-L-mvNGDDz8UB7hOWA&oe=6423D0CD&_nc_sid=ea0b6e&_nc_rid=e32360ab60",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/324699288_1047271359378476_947931758493135347_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=bxZw2QZoJ-QAX_bLa6q&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfADJKVzvdsQ0W8jbfEi6hxjspBApT73kk0RUfQRKB2khA&oe=6425FA3F",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-13T14:06:19+0000",
                    "caption": "Wishing you all a Happy and Prosperous Lohri. May God Bless you with all the Health and Weath this year.\n\nHappy Lohri from our Family to Yours!\n\nShevinder Sidhu\n\u260e\ufe0f 416-557-8080\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/reel/CnW6sfBKIpJ/"
                },
                {
                    "id": "18240470335159967",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/324063647_710771057208645_5566740021493388019_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=WPC4Ss3c8JEAX84IAbm&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBdf9VVZyzSRNHpqnfRAn00ezKHrKa1euU27XYTfRdPug&oe=642765D2",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-09T12:38:57+0000",
                    "caption": "If you are visiting Canada, then you consider buying Visitor to Canada Insurance so that in case of any medical emergency, Hospital Bills are taken care of by the Insurance Company.\n\nTransfer your risks while Visiting Canada on Insurance Company, get Visitor to Canada Insurance!\n\nAny Questions regarding Visitors Insurance, Call or Text me today! \n\nShevinderSidhu,\n\u260e\ufe0f 416-557-8080\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/p/CnMdjQeuQG0/"
                },
                {
                    "id": "17843925521916286",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/0049739DBF6A77E0EA48EC167BC2FCA4_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=109&vs=1218484772422103_4158935050&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8wMDQ5NzM5REJGNkE3N0UwRUE0OEVDMTY3QkMyRkNBNF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0o2MVhSTl9BVHpSNUFjQ0FNcG1mQmhEX3gwUGJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmspSPiuuq6T8VAigCQzMsF0A5HztkWhysGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfDrEBkpr8_wgWqtRmszYByqEGt90U3shThnLpqo_GIz0w&oe=642365FA&_nc_sid=ea0b6e&_nc_rid=19c6eb13af",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/323901106_953412312296130_1498169284381170105_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=oHyr7Ur-5twAX9jGKhS&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDh6F7C62orb3qXXXK6wC6Ghexnz5eMuUa-uvtOFsOgEA&oe=64277060",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-07T14:32:26+0000",
                    "caption": "Are you the Bread-Winner of your family? If your Family depends on you Financially, then Life Insurance is a must.\n\nLife Insurance makes sure that all your financial obligations towards your loved ones are taken care of even if you aren\u2019t around. Thus ensuring future of your family is safe!\n\nAny Questions regarding Life Insurance, call me today! \n\nShevinderSidhu, \n#CALL \u260e\ufe0f 416-557-8080 Now!\n\n#Shevinder #ShevinderSidhu #Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #travelinsurance",
                    "permalink": "https://www.instagram.com/reel/CnHg6fqIgmO/"
                },
                {
                    "id": "17954172041357616",
                    "media_type": "VIDEO",
                    "media_url": "https://video.cdninstagram.com/o1/v/t16/f1/m82/8A44E3992B292E8DDDA7C60FCF036290_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=111&vs=494270822831410_1489938691&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC84QTQ0RTM5OTJCMjkyRThERERBN0M2MEZDRjAzNjI5MF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR01Gdk5oT21BeF8tTjdrR0FFUWFqYll1UmdVZWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmxums4vqx5j8VAigCQzMsF0AuAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA\u00253D\u00253D&ccb=9-4&oh=00_AfAaZPLAsrn-npIZ36K4RKPGmEmD3bpK7DJVdEeVjYTdCA&oe=64236872&_nc_sid=ea0b6e&_nc_rid=9d576f426c",
                    "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/323922697_521938883369847_2131729106208787402_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=luTC5oUfS-gAX9jNPq5&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAvu7999_PidhC-A42SxXs2Q97n1Vxa31P6dZ0vl44UEA&oe=642761A0",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-06T15:23:56+0000",
                    "caption": "Get Smart SUPER VISA INSURANCE coverage with Huge Discounts up to 45\u0025 with deductibles so that you can fully enjoy the stay of your Parents and Grandparents in Canada. Don\u2019t wait, get Super Visa Insurance now! \n\nCall me #SHEVINDER SIDHU, your one stop solution for all your insurance needs. To know more dial #416-557-8080 or visit www.shevindersidhu.com for more info \n\n #ShevinderSidhu #PunjabInsurance#Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #TravelInsurance",
                    "permalink": "https://www.instagram.com/reel/CnFCAn_Ivzv/"
                },
                {
                    "id": "17966637682986558",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/323625040_684440109849412_6436925436198516521_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=a-6OCnOknNEAX_Cka8v&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA9DVUfJbClcDTfVzjvpC8sMnC8epbN4532h98bBfHnMQ&oe=6425E94A",
                    "username": "shevindersidhu",
                    "timestamp": "2023-01-06T15:10:41+0000",
                    "caption": "Get Smart SUPER VISA INSURANCE coverage with Huge Discounts up to 45\u0025 with deductibles so that you can fully enjoy the stay of your Parents and Grandparents in Canada. Don't wait, get Super Visa Insurance now! \n\nCall me #SHEVINDER SIDHU, your one stop solution for all your insurance needs. To know more dial #416-557-8080 or visit www.shevindersidhu.com for more info \n\n #ShevinderSidhu #PunjabInsurance#Canada #Ontario #Brampton #Mississauga #Caledon #Kitchener #LifeInsurance #CriticalIllnessInsurance #DisabilityInsurance #MortgageInsurance #RESP #RRSP #TFSA #SegregatedFunds #TermInsurance #SuperVisaInsurance #VisitorInsurance #TravelInsurance",
                    "permalink": "https://www.instagram.com/p/CnFAh59M8AN/"
                }
            ]
            ///await axios.get('/api/instalinks').then(data => data.data.data as Link[]).catch(e => undefined)
            if (!results) {
                return
            }
            setLinks(results.map(link => {
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
            }))
            setMaxPerColumns(Math.floor(results.length / Math.floor(size.width / 350)))
        }
        getLinks()
    },[])

    return (
        links ?
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