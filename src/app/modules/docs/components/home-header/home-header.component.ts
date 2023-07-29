import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  @HostBinding('role') get role() {
    return 'banner';
  }
}
