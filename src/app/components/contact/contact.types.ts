import { FormControl } from "@angular/forms";

export interface ContactForm {
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    message: FormControl<string | null>;
}
