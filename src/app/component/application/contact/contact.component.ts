import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    textarea: ['', Validators.required]
  });

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    // TODO implement me
  }

}
