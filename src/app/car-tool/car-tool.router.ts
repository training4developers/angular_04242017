import { RouterModule, Routes } from '@angular/router';

import { CarTableComponent } from './components/car-table/car-table.component';
import { CarFormComponent } from './components/car-form/car-form.component';

const routes: Routes = [
  { path: 'car-table', component: CarTableComponent },
  { path: 'car-form', component: CarFormComponent },
];

export const carToolRouterModule = RouterModule.forChild(routes);
