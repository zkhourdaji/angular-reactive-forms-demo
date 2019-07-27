import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function MyAddressValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
        const street = control.get('street').value;
        const city = control.get('city').value;
        const zipcode = control.get('zipcode').value;
        const state = control.get('state').value;

        if ((!street && !city && !zipcode && !state)
            || (street && city && zipcode && state)) {
            return null;
        }
        return {
            allFieldsMustBeProvided: { street, city, zipcode, state }
        };
    };
}
