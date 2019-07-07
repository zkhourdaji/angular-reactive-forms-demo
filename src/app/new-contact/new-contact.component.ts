import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styles: []
})
export class NewContactComponent {

  constructor(private fb: FormBuilder) { }

  newContact = this.fb.group({
    firstName: [''],
    middleName: [''],
    lastName: [''],
    phoneNumber: [''],
    email: [''],
    birthday: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      zipcode: [''],
      state: ['']
    })
  });

  onSubmit() {
    console.log(this.newContact.value);
  }
}
