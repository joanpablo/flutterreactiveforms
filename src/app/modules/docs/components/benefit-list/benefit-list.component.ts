import { Component } from '@angular/core';
import { Benefit } from '@docs/models/Benefit';

@Component({
  selector: 'app-benefit-list',
  templateUrl: './benefit-list.component.html',
  styleUrls: ['./benefit-list.component.scss'],
})
export class BenefitListComponent {
  benefits: Benefit[] = [
    {
      title: $localize`Clean & organized`,
      description: $localize`Remove boilerplate code and handle Forms with minimal effort.`,
    },
    {
      title: $localize`Fully customizable`,
      description: $localize`Create new reactive widgets, add custom Validators, and more.`,
    },
    {
      title: $localize`Dynamic Forms`,
      description: $localize`Add or remove controls dynamically while validate and syncronize data.`,
    },
    {
      title: $localize`Reactivity`,
      description: $localize`Any data changes to your models or widgets stay in sync in both directions.`,
    },
  ];
}
