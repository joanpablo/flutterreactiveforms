import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '@icons/icons.module';
import { UiComponentsModule } from '@ui/ui-components.module';

import { DocsRoutingModule } from './routes/docs-routing.module';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeComponent } from './components/home/home.component';
import { FeatureHighlightComponent } from './components/feature-highlight/feature-highlight.component';
import { FeatureHighlightListComponent } from './components/feature-highlight-list/feature-highlight-list.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { BenefitListComponent } from './components/benefit-list/benefit-list.component';
import { DocsFooterComponent } from './components/docs-footer/docs-footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { DocsComponent } from './components/docs/docs.component';
import { PagesModule } from '@pages/pages.module';

@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeComponent,
    FeatureHighlightComponent,
    FeatureHighlightListComponent,
    HeroSectionComponent,
    BenefitComponent,
    BenefitListComponent,
    DocsFooterComponent,
    LogoComponent,
    DocsComponent,
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    IconsModule,
    UiComponentsModule,
    PagesModule,
  ],
})
export class DocsModule {}
