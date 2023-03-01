import { SportListComponent } from './sport-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SportListComponent
  },
  {
    path: 'detail/:id', loadChildren: () => import('../../pages/detail/detail.module').then( m => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportListRoutingModule { }
