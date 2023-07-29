import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightService } from './services/highlight.service';
import { ButtonDirective } from './directives/button/button.directive';
import { IconButtonDirective } from './directives/icon-button/icon-button.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ButtonDirective,
    IconButtonDirective,
    SidebarComponent,
    ToolbarComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonDirective,
    IconButtonDirective,
    SidebarComponent,
    ToolbarComponent,
  ],
  providers: [HighlightService],
})
export class UiComponentsModule {}
