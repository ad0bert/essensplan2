import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Group validator checking that two controls hold the same value.
 * The `mustMatch` error is set on the matching control so it can be shown next to it.
 */
export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);
    if (!control || !matchingControl) {
      return null;
    }

    const otherErrors = { ...matchingControl.errors };
    delete otherErrors['mustMatch'];
    const hasOtherErrors = Object.keys(otherErrors).length > 0;

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ ...otherErrors, mustMatch: true });
      return { mustMatch: true };
    }
    matchingControl.setErrors(hasOtherErrors ? otherErrors : null);
    return null;
  };
}
