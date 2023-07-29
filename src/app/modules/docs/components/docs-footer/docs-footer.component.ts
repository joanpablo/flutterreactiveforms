import { Component } from '@angular/core';
import { IconsService } from '@icons/services/icons.service';

@Component({
  selector: 'app-docs-footer',
  templateUrl: './docs-footer.component.html',
  styleUrls: ['./docs-footer.component.scss'],
})
export class DocsFooterComponent {
  constructor(public icons: IconsService) {}
}
