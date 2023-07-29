import { AfterViewChecked, Component, Input } from '@angular/core';
import { FeatureHighlight } from '@docs/models/FeatureHighlight';
import { HighlightService } from '@ui/services/highlight.service';

@Component({
  selector: 'app-feature-highlight',
  templateUrl: './feature-highlight.component.html',
  styleUrls: ['./feature-highlight.component.scss'],
})
export class FeatureHighlightComponent implements AfterViewChecked {
  @Input({ required: true }) feature!: FeatureHighlight;
  @Input() invertOrientation = false;

  highlighted = false;

  constructor(private highlightService: HighlightService) {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
