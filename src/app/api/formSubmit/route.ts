import axios from "axios";
import {NextRequest, NextResponse} from "next/server";
import DataExtractor from "@/app/lib/DataExtractor";
import GoogleSheets from "@/app/lib/GoogleSheets";

export async function POST(request: NextRequest) {
    const Invalid_Request = NextResponse.json({result: 'failed', error: 'Invalid request.'})
    const Failed_Submit_Request = NextResponse.json({result: 'failed', error: 'Could no submit request.'})
    const Failed_Verification = NextResponse.json({result: 'failed', error: 'Could not verify request.'})
    const body = await request.json();
    const extractor = new DataExtractor(body)
    const sheetsHandler = new GoogleSheets()
    const data = extractor.getData()
    if(!body || !body.token){
        return Invalid_Request
    }
    const verifyUser = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.token}`).then(r => r).catch(e => e)
    if(!verifyUser.data || !verifyUser.data.success || verifyUser.data.score<0.5){
        return Failed_Verification
    }
    if(!data){
        return Invalid_Request
    }
    if (!body.token) {
        return Invalid_Request
    }
    if(!await sheetsHandler.append(data)){
        return Failed_Submit_Request
    }
    return NextResponse.json({result: 'success'})
}
