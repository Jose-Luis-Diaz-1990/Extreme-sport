import { SharedModule } from './../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedSportRoutingModule } from './created-sport-routing.module';
import { CreatedSportComponent } from './created-sport.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatedSportComponent
  ],
  imports: [
    CommonModule,
    CreatedSportRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class CreatedSportModule { }
