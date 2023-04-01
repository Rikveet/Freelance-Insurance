import {Services, UserContactInfoT} from "@/app/components/Forms/DataTypes";
import {
    Additional_Info_Validation, Age_Validation, Date_Picker_Validation, Destination_Validation, Email_Validation,
    Name_Validation, Phone_Number_Validation, Profession_Validation, Select_Group_Validation, Switch_Validation
} from "@/app/components/Forms/Core/Validation";
import {verify} from "@/app/lib/verify";
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
import {SheetData} from "@/app/lib/GoogleSheets";

export type ExtractedData = SheetData | undefined;
export default class DataExtractor {
    private readonly body: any
    private readonly service: Services | undefined

    constructor(body: any) {
        this.body = body
        this.service = body.service as Services
    }

    getData(): ExtractedData {
        const userData = this.getUserData()
        const formData = this.getFormData()

        if (!userData || !formData) {
            return undefined
        }
        return [[], [(new Date()).toLocaleString('en-US', {timeZone: 'America/Montreal'}), this.service as string, ...Object.values(userData)], ...formData]
    }

    private getUserData(): UserContactInfoT | undefined {
        try {
            const {name, email, 'phone number': phone_number} = this.body.userInfo
            if (!name || !email || !phone_number) {
                return undefined;
            }
            if (!verify([
                {value: name, rules: Name_Validation()},
                {value: email, rules: Email_Validation()},
                {value: phone_number, rules: Phone_Number_Validation()}
            ])) {
                return undefined
            }
            return {name, email, "phone number": phone_number}
        } catch (_) {
            return undefined
        }
    }

    private getFormData(): ExtractedData {
        try {
            switch (this.service) {
                case "super visa insurance":
                    return this.getSuperVisa();
                case "visitor's insurance":
                    return this.getVisitorIns();
                case "life insurance":
                    return this.getLifeIns();
                case "critical illness insurance":
                    return this.getCriticalIllness();
                case "disability insurance":
                    return this.getDisabilityIns();
                case "travel insurance":
                    return this.getTravelIns();
                case "resp":
                    return this.getResp();
                case "rrsp":
                    return this.getRrsp();
                case "tfsa":
                    return this.getTfsa();
                case "international student's insurance":
                    return this.getInternationStdIns();
                case "mortgage insurance":
                    return this.getMortgageIns();
                default:
                    return undefined
            }
        } catch (_) {
            return undefined
        }
    }

    private getKeys(info: Object): string[]{
        return Object.keys(info).map(value => (value.slice(0,1).replace('z','').toUpperCase() + value.slice(1,).replaceAll('_',' ')).trim())
    }

    private getSuperVisa(): ExtractedData {
        const {'parent/grandparent info': info} = this.body.data as SuperVisaData
        if (!verify(info.flatMap(parent => ([
            {value: parent.name, rules: Name_Validation()},
            {value: parent.sex, rules: Switch_Validation()},
            {value: parent["pre medical condition"], rules: Switch_Validation()},
            {value: parent["recent medicine changes"], rules: Switch_Validation()},
            {value: parent["age group"], rules: Select_Group_Validation()},
            {value: parent["z additional info"], rules: Additional_Info_Validation()},
        ])))) {
            return undefined
        }
        return [['', '', ...this.getKeys(info[0])], ...info.map(entry => ['', '', ...Object.values(entry)])]
    }

    private getVisitorIns(): ExtractedData {
        const {'visitor info': info} = this.body.data as VisitorData
        if (!verify(info.flatMap(visitor => ([
            {value: visitor.name, rules: Name_Validation()},
            {value: visitor.sex, rules: Switch_Validation()},
            {value: visitor["age group"], rules: Select_Group_Validation()},
            {value: visitor["pre medical condition"], rules: Switch_Validation()},
            {value: visitor["recent medicine changes"], rules: Switch_Validation()},
            {value: visitor["z additional info"], rules: Additional_Info_Validation()},
        ])))) {
            return undefined
        }
        return [['', '', ...this.getKeys(info[0])], ...info.map(entry => ['', '', ...Object.values(entry)])]
    }

    private getLifeIns(): ExtractedData {
        const info = this.body.data as LifeInsData
        if (!verify([
            {value: info.age, rules: Age_Validation()},
            {value: info["insurance plan"], rules: Select_Group_Validation()},
            {value: info["province ontario"], rules: Switch_Validation()},
            {value: info["pre medical condition"], rules: Switch_Validation()},
            {value: info['z additional info'], rules: Additional_Info_Validation()}
        ])) {
            return undefined
        }
        return [['', '', ...this.getKeys(info)], ['', '', ...Object.values(info)]]
    }

    private getCriticalIllness(): ExtractedData {
        const info = this.body.data as CriticalInsData
        if (!verify([
            {value: info.age, rules: Name_Validation()},
            {value: info["insurance plan"], rules: Select_Group_Validation()},
            {value: info["province ontario"], rules: Switch_Validation()},
            {value: info["pre medical condition"], rules: Switch_Validation()},
            {value: info["z additional info"], rules: Additional_Info_Validation()}
        ])) {
            return undefined
        }
        return [['', '',...this.getKeys(info)], ['', '', ...Object.values(info)]]
    }

    private getDisabilityIns(): ExtractedData {
        const info = this.body.data as DisabilityInsData
        if (!verify([
            {value: info.age, rules: Age_Validation()},
            {value: info.profession, rules: Profession_Validation()},
            {value: info["pre medical condition"], rules: Switch_Validation()},
            {value: info["province ontario"], rules: Switch_Validation()},
            {value: info['z additional info'], rules: Additional_Info_Validation()}
        ])) {
            return undefined
        }
        return [['', '', ...this.getKeys(info)], ['', '', ...Object.values(info)]]
    }

    private getTravelIns(): ExtractedData {
        const _info = this.body.data as TravelInsData
        if (!verify([
            {value: _info.age, rules: Name_Validation()},
            {value: _info.days, rules: Date_Picker_Validation()},
            {value: _info["travel destination"], rules: Destination_Validation()}
        ])) {
            return undefined
        }
        const info: Partial<TravelInsData> = _info
        const {'date of departure': dod, 'date of return':dor, 'days traveled': dt} = _info.days
        delete info.days
        return [
            ['', '', ...this.getKeys(info), 'Departure Date', 'Return Date', 'Days Travelled', 'More Info'],
            ['', '',
                _info.age, _info["travel destination"],
                dod.toLocaleString('en-US', {timeZone: 'America/Montreal'}),
                dor.toLocaleString('en-US', {timeZone: 'America/Montreal'}),
                dt
            ]
        ]
    }

    private getResp(): ExtractedData {
        const {'child info': info} = this.body.data as RESPData
        if (!verify(info.flatMap(child => ([
            {value: child.name, rules: Name_Validation()},
            {value: child.age, rules: Age_Validation()},
            {value: child["province ontario"], rules: Switch_Validation()},
            {value: child['z additional info'], rules: Additional_Info_Validation()}
        ])))) {
            return undefined
        }
        return [['', '', ...this.getKeys(info[0])], ...info.map(entry => ['', '', ...Object.values(entry)])]
    }

    private getRrsp(): ExtractedData {
        const info = this.body.data as RRSPData
        if (!verify([
            {value: info.age, rules: Age_Validation()},
            {value: info["province ontario"], rules: Switch_Validation()},
            {value: info["pre medical condition"], rules: Switch_Validation()},
            {value: info["z additional info"], rules: Additional_Info_Validation()}
        ])) {
            return undefined
        }
        return [['', '', ...this.getKeys(info)], ['', '', ...Object.values(info)]]
    }

    private getTfsa(): ExtractedData {
        const info = this.body.data as TFSAData
        if (!verify([
            {value: info.age, rules: Age_Validation()},
            {value: info["province ontario"], rules: Switch_Validation()},
            {value: info["z additional info"], rules: Additional_Info_Validation()}
        ])) {
            return undefined
        }
        return [['', '', ...this.getKeys(info)], ['', '', ...Object.values(info)]]
    }

    private getInternationStdIns(): ExtractedData {
        const info = this.body.data as InternationalStdInsData
        if (!verify([
            {value: info.age, rules: Age_Validation()},
            {value: info["pre medical condition"], rules: Switch_Validation()},
            {value: info["z additional info"], rules: Additional_Info_Validation()}
        ])) {
            return undefined
        }
        return [['', '', ...this.getKeys(info)], ['', '', ...Object.values(info)]]
    }

    private getMortgageIns(): ExtractedData {
        const info = this.body.data as MortgageInsData
        if (!verify([
            {value: info.age, rules: Age_Validation()},
            {value: info["province ontario"], rules: Switch_Validation()},
            {value: info["z additional info"], rules: Additional_Info_Validation()}
        ])) {
            return undefined
        }
        return [['', '', ...this.getKeys(info)], ['', '', ...Object.values(info)]]
    }

}