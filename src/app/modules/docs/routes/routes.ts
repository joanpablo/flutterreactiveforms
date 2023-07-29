import { Routes } from '@angular/router';
import { DocsComponent } from '@docs/components/docs/docs.component';
import { HomeComponent } from '@docs/components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'docs',
    component: DocsComponent,
    loadChildren: () =>
      import('@pages/pages.module').then((m) => m.PagesModule),
  },
];
