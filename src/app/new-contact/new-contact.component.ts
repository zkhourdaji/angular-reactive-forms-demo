import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MyAddressValidator } from './my-address.validator';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styles: []
})
export class NewContactComponent {

  states = [
    'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE',
    'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY',
    'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT',
    'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK',
    'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT',
    'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'
  ];

  constructor(private fb: FormBuilder) { }

  newContact = this.fb.group({
    firstName: ['', [Validators.required]],
    middleName: [''],
    lastName: ['', [Validators.required]],
    phoneNumber: ['', [Validators.pattern(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)]],
    email: ['', [Validators.required, Validators.email]],
    birthday: ['', [Validators.required]],
    address: this.fb.group({
      street: [''],
      city: [''],
      zipcode: [''],
      state: ['']
    }, { validators: [MyAddressValidator()] })
  });

  onSubmit() {
    console.log(this.newContact);
  }
}
