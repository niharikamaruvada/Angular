import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  myForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Sammy', [Validators.required]],
      email: ['', [Validators.required, Validators.email]], // Added an extra pair of brackets
      message: ['', [Validators.required, Validators.minLength(2)]] // Added an extra pair of brackets
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}