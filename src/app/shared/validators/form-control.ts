const luhn = require("luhn");
import { AbstractControl } from "@angular/forms";

export const passwordValidator = (control: AbstractControl) => {
    const regex: RegExp =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regex.test(control.value)) {
        return { passwordValidator: { valid: false } };
    }
    return null;
}

export const phoneNumberValidator = (control: AbstractControl) => {
    const regex: RegExp = /^((\\+91-?)|0)?[0-9]{10}$/;
    if (!regex.test(control.value)) {
        return { phoneNumberValidator: { valid: false } };
    }
    return null;
}

export const creditCardNumberValidator = (control: AbstractControl) => {
    if (!luhn.validate(control.value)) {
        return { creditCardNumberValidator: { valid: false } };
    }
    return null;
}

export const usernameValidator = (control: AbstractControl) => {
    const regex: RegExp = /^[a-zA-Z0-9]{3,16}$/;
    if (!regex.test(control.value)) {
        return { usernameValidator: { valid: false } };
    }
    return null;
};

export const emailValidator = (control: AbstractControl) => {
    const regex: RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!regex.test(control.value)) {
        return { emailValidator: { valid: false } };
    }
    return null;
}
