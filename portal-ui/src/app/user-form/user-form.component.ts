import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Output() onDataSubmit = new EventEmitter<User>();

  userForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required)
  });

  ngOnInit(): void {
    if (!this.isNewUser()) {
      this.prePopulateForm();
    }
  }

  private prePopulateForm() {
    this.userForm.get('firstName').setValue(this.user.firstName);
    this.userForm.get('lastName').setValue(this.user.lastName);
    this.userForm.get('email').setValue(this.user.email);
  }

  displayError(field: string) {
    return { 'error': this.isFieldInvalid(field) };
  }

  private isFieldInvalid(field: string) {
    const fieldControl = this.userForm.get(field);
    return fieldControl.touched && fieldControl.invalid;
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.validateFormFields();
      return;
    }

    this.setUserInfo();
    this.onDataSubmit.emit(this.user);
  }

  private isNewUser() {
    return this.user === null || this.user === undefined;
  }

  setUserInfo() {
    if (this.isNewUser()) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private updateUser() {
    this.user.firstName = this.userForm.get('firstName').value;
    this.user.lastName = this.userForm.get('lastName').value;
    this.user.email = this.userForm.get('email').value;
  }

  private createUser() {
    this.user = {
      firstName: this.userForm.get('firstName').value,
      lastName: this.userForm.get('lastName').value,
      email: this.userForm.get('email').value
    };
  }

  private validateFormFields() {
    Object.values(this.userForm.controls)
      .forEach(control => control.markAsTouched());

    this.userForm.updateValueAndValidity();
  }
}
