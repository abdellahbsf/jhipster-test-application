import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ref-table',
    data: { pageTitle: 'jhipsterTestApplicationApp.refTable.home.title' },
    loadChildren: () => import('./ref-table/ref-table.routes'),
  },
  {
    path: 'files',
    data: { pageTitle: 'jhipsterTestApplicationApp.files.home.title' },
    loadChildren: () => import('./files/files.routes'),
  },
  {
    path: 'fqcn',
    data: { pageTitle: 'jhipsterTestApplicationApp.fQCN.home.title' },
    loadChildren: () => import('./fqcn/fqcn.routes'),
  },
  {
    path: 'jparser',
    data: { pageTitle: 'jhipsterTestApplicationApp.jparser.home.title' },
    loadChildren: () => import('./jparser/jparser.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
