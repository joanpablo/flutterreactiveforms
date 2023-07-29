import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './routes/pages-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IconsModule } from '@icons/icons.module';

@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [CommonModule, PagesRoutingModule, IconsModule],
})
export class PagesModule {}
