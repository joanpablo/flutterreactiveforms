import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@docs/docs.module').then((m) => m.DocsModule),
  },
];
