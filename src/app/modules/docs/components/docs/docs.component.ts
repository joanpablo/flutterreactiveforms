import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IconsService } from '@icons/services/icons.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {
  isSidebarOpened = signal(false);

  constructor(public icons: IconsService) {}

  toggleSidebar() {
    this.isSidebarOpened.set(!this.isSidebarOpened());
  }

  closeSidebar() {
    this.isSidebarOpened.set(false);
  }
}
