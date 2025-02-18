import { Routes } from '@angular/router';
import { DefaltPageComponent } from './pages/defalt-page/defalt-page.component';
import { TableviewComponent } from './features/tableview/tableview.component';
import { DisputeComplaintsComponent } from './features/dispute-complaints/dispute-complaints.component';

export const routes: Routes = [
  {
    path: 'defalt',
    component: DefaltPageComponent,
  },
  { path: 'reconciliation', component: TableviewComponent },
  { path: 'dispute-complaints', component: DisputeComplaintsComponent },
  {
    path: '**',
    redirectTo: 'defalt',
  },
];
