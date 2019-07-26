import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styles: []
})
export class NewContactComponent {

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
    }, [MyDateValidator])
  });

  get errors() {
    return this.newContact.get('firstName').errors;
  }
  onSubmit() {
    console.log(this.newContact.get('phoneNumber').errors);
    //console.log(this.newContact.value);
  }
}
