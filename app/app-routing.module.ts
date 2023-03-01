import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  },
  {
    path: 'created-sport', loadChildren: () => import('./pages/created-sport/created-sport.module').then(m => m.CreatedSportModule)
  },
  {
    path: 'sport-list', loadChildren: () => import('./pages/sport-list/sport-list.module').then( m => m.SportListModule)
  },
  {
    path: 'about', loadChildren: () => import('./pages/about/about.module').then( m=> m.AboutModule)
  },
  { path: '' , redirectTo: 'home', pathMatch:'full' },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
