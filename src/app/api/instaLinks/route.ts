import axios from "axios";
import {NextResponse} from "next/server";

export async function GET() {
    const instaAccessToken = process.env.INSTA_TOKEN;
    const result = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,username,timestamp,caption,permalink&access_token=${instaAccessToken}`, {}
    ).then(data => data.data.data).catch(_ => undefined)
    return NextResponse.json({data: result})
}