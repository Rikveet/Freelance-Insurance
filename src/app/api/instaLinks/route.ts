import {NextResponse} from "next/server";

export async function GET() {
    const instaAccessToken = process.env.INSTA_TOKEN;
    const result = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,username,timestamp,caption,permalink&access_token=${instaAccessToken}`
        , {cache: 'no-store'})
        .then(async res => {
            return (res.status)
        }).catch(e => e.toString())
    return NextResponse.json({data: result})
}