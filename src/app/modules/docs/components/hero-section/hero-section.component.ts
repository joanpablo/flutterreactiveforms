import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  heroHighlightedText = $localize`Reactive Model-Driven`;
  heroText = $localize`Forms in Flutter`;
  heroDescriptionText = $localize`A model-driven approach for handling Forms inputs and validations, heavily inspired in Angular Reactive Forms.`;
}
