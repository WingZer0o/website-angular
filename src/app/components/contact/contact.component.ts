import { Component, OnInit } from "@angular/core";
import { MaterialModule } from "../../modules/material/material.module";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HttpClientService } from "../../services/http-client.service";
import { ContactDto, ContactForm } from "./contact.types";
import {
  emailValidator,
} from "../../shared/validators/form-control";
import { ToastrService } from "ngx-toastr";
import { ContactService } from "../../services/contact.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup<ContactForm>;
  public isSubmitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClientService,
    private toastService: ToastrService,
    private contactService: ContactService
  ) {
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group<ContactForm>({
      name: new FormControl<string | null>(null, [Validators.minLength(3)]),
      email: new FormControl<string | null>(null, [emailValidator]),
      message: new FormControl<string | null>(null, [
        Validators.required,
        Validators.min(10),
      ]),
    });
  }

  public async submitForm(): Promise<void> {
    if (!this.contactForm.valid) {
      this.toastService.warning(
        "Please enter a valid name (3 characters), email, and message (10 characters).",
      );
      return;
    }

    this.isSubmitting = true;
    const dtoBody: ContactDto = this.contactForm.getRawValue();
    this.contactService.submitForm(dtoBody).then((response) => {
      this.isSubmitting = false;
    }).catch((error) => {
      this.toastService.warning("There was an error submitting the contact me form.")
      this.isSubmitting = false;
    });
  }
}
