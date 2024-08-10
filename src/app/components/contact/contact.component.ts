import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { EmailValidator, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientService } from '../../services/http-client.service';
import { ContactForm } from './contact.types';
import { emailValidator, usernameValidator } from '../../shared/validators/form-control';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  public contactForm!: FormGroup<ContactForm>;
  public isSubmitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClientService
  ) {

  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group<ContactForm>({
      name: new FormControl<string | null>(null, [Validators.min(3)]),
      email: new FormControl<string | null>(null, [emailValidator]),
      message: new FormControl<string | null>(null, [Validators.required, Validators.min(10)]),
    });
  }

  public submitForm(): void {
    if (this.contactForm.valid) {
      
    }
    this.isSubmitting = true;
  }
}
