import { AbstractControl, ValidationErrors } from "@angular/forms";

export function commonPasswordValidator(control:AbstractControl):ValidationErrors| null
{
    const commonPasswords=["Password@123","Password123","User@123"]
    if(commonPasswords.includes(control.value))
        return {'commonPassword':true}
    else
        return null;
}