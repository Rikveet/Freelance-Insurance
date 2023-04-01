// @ts-nocheck
import {Rules} from "@/app/components/Forms/Core/Validation";
import {FieldValues} from "react-hook-form";

export function verify<T extends FieldValues, FieldType>(values: { value: string | number | FieldType, rules: Rules<T> }[]) {
    return values.every(({value, rules}) => {
        if (rules.required?.value && !value) {
            return false;
        }
        if(!value && !rules.required){
            return true;
        }
        if (rules.max?.value && !(value as number <= rules.max.value)) {
            return false;
        }
        if (rules.min?.value && !(value as number >= rules.min.value)) {
            return false;
        }
        if (rules.maxLength?.value && !(typeof value === "string" && value.length <= rules.maxLength.value)) {
            return false;
        }
        if (rules.minLength?.value && !(typeof value === "string" && value.length >= rules.minLength.value)) {
            return false;
        }
        if (rules.pattern?.value && !(typeof value === "string" && RegExp(rules.pattern.value as string).test(value))) {
            return false;
        }
        return true;
    })
}
