import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'recipe-contact',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  contactForm = this.fb.group({
    email: ['', Validators.required],
    subject: ['', Validators.required],
    textarea: ['', Validators.minLength(50)]
  });

  constructor(private readonly fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => console.log(param));
      
  }

  onSubmit(event: Event): void {
    // TODO implement me
  }

}
