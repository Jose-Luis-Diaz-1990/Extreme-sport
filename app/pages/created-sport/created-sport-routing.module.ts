import { CreatedSportComponent } from './created-sport.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: CreatedSportComponent
  },
  {
    path: 'my-created-sport', loadChildren: () => import('./my-created-sport/my-created-sport.module').then( m => m.MyCreatedSportModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedSportRoutingModule { }
