import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  submitVaccinationForm(formValues: any) {
    console.log(formValues);
  }
}
