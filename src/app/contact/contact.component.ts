import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailForm: FormGroup;
  sendMailSuccess = false;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      userMail: ['', Validators.required],
      userMessage: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.emailForm.invalid) {
      return;
    }
    this.sendMailSuccess = true;
  }

}
