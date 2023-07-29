import { Component, Input } from '@angular/core';
import { Benefit } from '@docs/models/Benefit';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss'],
})
export class BenefitComponent {
  @Input({ required: true }) benefit!: Benefit;
}
