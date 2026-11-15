import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    const route = inject(ActivatedRoute);
    const destroyRef = inject(DestroyRef);
    // The page scrolls inside its own container, so the router's anchor scrolling
    // (which scrolls the window) does not apply. Wait for the first render, then
    // follow fragment changes.
    afterNextRender(() => {
      route.fragment
        .pipe(takeUntilDestroyed(destroyRef))
        .subscribe((fragment) => fragment && this.scrollToAnchor(fragment));
    });
  }

  scrollToAnchor(id: string): void {
    const element = this.host.nativeElement.querySelector(`[id="${CSS.escape(id)}"]`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
