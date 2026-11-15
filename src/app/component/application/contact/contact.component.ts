import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const CONTACT_ADDRESS = 'info@essensplan.at';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly contactForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    textarea: ['', Validators.required],
  });

  /**
   * There is no backend endpoint for contact requests yet, so the message is
   * handed to the visitor's mail client.
   */
  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }
    const { email, subject, textarea } = this.contactForm.getRawValue();
    const body = `${textarea}\n\nReply to: ${email}`;
    window.location.href =
      `mailto:${CONTACT_ADDRESS}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }
}
