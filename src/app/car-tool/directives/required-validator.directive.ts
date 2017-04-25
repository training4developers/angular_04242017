import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

export const requiredValidator = (c: AbstractControl) => {

  if (c.value == null || String(c.value).length === 0) {
    return {
      required: true,
    };
  }

  return null;

};

@Directive({
  selector: '[appRequiredValidator]',
  providers: [
    { provide: NG_VALIDATORS, useValue: requiredValidator, multi: true },
  ]
})
export class RequiredValidatorDirective { }
