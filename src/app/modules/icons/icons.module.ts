import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsService } from './services/icons.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
  providers: [IconsService],
})
export class IconsModule {}
