import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() opened = false;

  @Output() closeClicked = new EventEmitter();

  notifyCloseClicked() {
    this.closeClicked.emit();
  }
}
