import axios from "axios";
import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const reqFailed = NextResponse.json({result: 'failed'})
    if (!body.token) {
        return reqFailed
    }
    const result = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.token}`).then(r => r).catch(e => e)
    if(!result.data || !result.data.success || result.data.score<0.5){
        return reqFailed
    }
    console.log(result.data)
    return NextResponse.json({result: 'success'})
}
