import {Data as SuperVisaData} from "@/app/components/Forms/Services/SuperVisaInsurance";
import {Data as VisitorData} from "@/app/components/Forms/Services/VisitorInsurance";
import {Data as LifeInsData} from "@/app/components/Forms/Services/LifeInsurance";
import {Data as CriticalInsData} from "@/app/components/Forms/Services/CriticalInsurance";
import {Data as DisabilityInsData} from "@/app/components/Forms/Services/DisabilityInsurance";
import {Data as TravelInsData} from "@/app/components/Forms/Services/TravelInsurance";
import {Data as RESPData} from "@/app/components/Forms/Services/RESP";
import {Data as RRSPData} from "@/app/components/Forms/Services/RRSP";
import {Data as TFSAData} from "@/app/components/Forms/Services/TFSA";
import {Data as InternationalStdInsData} from "@/app/components/Forms/Services/InternationalStudentInsurance";
import {Data as MortgageInsData} from "@/app/components/Forms/Services/MortgageInsurance";

export type UserContactInfoT = {
    name: string,
    'phone number': string,
    email: string,
}

export type Services =
    'super visa insurance' |
    "visitor's insurance" |
    'life insurance' |
    'critical illness insurance' |
    'disability insurance' |
    'travel insurance' |
    'resp' |
    'rrsp'|
    'tfsa'|
    "international student's insurance" |
    'mortgage insurance';

export type ServiceSubmitData = SuperVisaData | VisitorData | LifeInsData | CriticalInsData | DisabilityInsData | TravelInsData | RESPData | RRSPData | TFSAData | InternationalStdInsData | MortgageInsData