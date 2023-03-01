import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCreatedSportRoutingModule } from './my-created-sport-routing.module';
import { MyCreatedSportComponent } from './my-created-sport.component';
import { MySportComponent } from './components/my-sport/my-sport.component';
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
    declarations: [
        MyCreatedSportComponent,
        MySportComponent
    ],
    imports: [
        CommonModule,
        MyCreatedSportRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class MyCreatedSportModule { }
