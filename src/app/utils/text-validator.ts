

import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ValidationService } from '../services/validation.service';


export class TextValidator {
    static createValidator(validationService: ValidationService): AsyncValidatorFn {

        return (control: AbstractControl): Observable<ValidationErrors | null> => {

            return validationService
                .checkIfToDoItemExists(control.value)
                .pipe(
                    map((result: boolean) => result ? { textAlreadyExists: true } : null)
                );
        };
    }
}


