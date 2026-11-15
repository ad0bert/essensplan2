import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

/** Demo recipe page. The content is static until recipes are served by the backend. */
@Component({
  selector: 'app-recipe',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  /** Recipe id from the `recipe/:id` route (bound via the router's component input binding). */
  readonly id = input<string>();

  protected readonly tags: string[] = ['Vegan', 'Gesund', 'Herzhaft', 'Hauptgericht'];
}
