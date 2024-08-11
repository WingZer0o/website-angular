import { FormControl } from "@angular/forms";

export interface ContactForm {
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    message: FormControl<string | null>;
}

export class ContactDto {
    name!: string | null;
    email!: string | null;
    message!: string | null;
}
