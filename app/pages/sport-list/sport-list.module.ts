import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportListRoutingModule } from './sport-list-routing.module';
import { SportListComponent } from './sport-list.component';
import { SportComponent } from './components/sport/sport.component';


@NgModule({
  declarations: [
    SportListComponent,
    SportComponent
  ],
  imports: [
    CommonModule,
    SportListRoutingModule,
    SharedModule,
    FormsModule
  ],
})
export class SportListModule { }
