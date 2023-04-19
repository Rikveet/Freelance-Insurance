'use client';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Form from "@/app/components/Forms/Form";

export default function FormContainer(){
    return(
        <GoogleReCaptchaProvider container={{parameters: {theme: 'dark'}}}
                                 reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}>
            <Form/>
        </GoogleReCaptchaProvider>
    )
}