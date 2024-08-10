import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  public contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
      message: new FormControl<string | null>(null),
    });
  }
}
