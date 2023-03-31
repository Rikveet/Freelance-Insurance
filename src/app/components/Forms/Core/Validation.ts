import {FieldValues, Path, RegisterOptions} from "react-hook-form";

export type Rules<T extends FieldValues> = Omit<RegisterOptions<T, Path<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">

export function Name_Validation<T extends FieldValues>() {
    return {
        required: {value: true, message: 'Required*'},
        minLength: {value: 2, message: 'Too short...'},
        maxLength: {value: 20, message: 'Too long...'},
        pattern: {value: /^[a-zA-Z ]*$/, message: 'Only alphabets are allowed.'}
    } as Rules<T>
}

export function Additional_Info_Validation<T extends FieldValues>() {
    return {
        maxLength: {value: 250, message: 'Too long...'},
        pattern: {
            value: /^([a-zA-Z ]*[\r\n]?[a-zA-Z ]*){0,10}$/,
            message: 'Numbers, Special characters or Too many new lines are not allowed'
        }
    } as Rules<T>
}

export function Phone_Number_Validation<T extends FieldValues>() {
    return {
        required: {value: true, message: 'Required*'},
        pattern: {
            value: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            message: 'Invalid Input'
        }
    } as Rules<T>
}

export function Email_Validation<T extends FieldValues>() {
    return {
        required: {value: true, message: 'Required*'},
        pattern: {
            value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            message: 'Invalid Input'
        }
    } as Rules<T>
}

export function Select_Group_Validation<T extends FieldValues>() {
    return {
        required: {value: true, message: 'Required*'}
    } as Rules<T>
}

export function Switch_Validation<T extends FieldValues>() {
    return {
        required: {value: true, message: 'Required*'},
    } as Rules<T>
}

export function Age_Validation<T extends FieldValues>() {
    return {
        required: {value: true, message: 'Required*'},
        min: {value: 1, message: 'Invalid*'},
        max: {value: 150, message: 'Invalid*'},
        pattern: {value: /^[0-9]{1,3}$/, message: 'Invalid*'}
    } as Rules<T>
}

export function Profession_Validation<T extends FieldValues>() {
    return {
        required: {value: true, message: 'Required*'},
        minLength: {value: 2, message: 'Too short...'},
        maxLength: {value: 30, message: 'Too long...'},
        pattern: {value: /^[a-zA-Z ]*$/, message: 'Only alphabets are allowed.'}
    } as Rules<T>
}

export function Destination_Validation<T extends FieldValues>() {
    return {
        required: {value: true, message: 'Required*'},
        maxLength: {value: 100, message: 'Too long..'},
        pattern: {value: /^[a-zA-Z ]*$/, message: 'Only alphabets are allowed.'}
    } as Rules<T>
}

export function Date_Picker_Validation<T extends FieldValues>() {
    return {
        required: true
    } as Rules<T>
}