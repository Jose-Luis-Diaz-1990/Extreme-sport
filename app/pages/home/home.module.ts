import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WhatIsComponent } from './Components/what-is/what-is.component';
import { WhatNeedComponent } from './Components/what-need/what-need.component';
import { ExplainMyProyectComponent } from './Components/explain-my-proyect/explain-my-proyect.component';


@NgModule({
  declarations: [
    HomeComponent,
    WhatIsComponent,
    WhatNeedComponent,
    ExplainMyProyectComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    YouTubePlayerModule
  ]
})
export class HomeModule { }
