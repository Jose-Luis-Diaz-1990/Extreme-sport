import { SportsService } from './../../core/services/sports/sports.service';
import { SportTransform } from './../../core/services/sports/sport.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss']
})
export class SportListComponent implements OnInit {
  
  
  public sport: SportTransform[] = [];
  public sportName: string = '';
  public page: number = 0;

  constructor(private sportService: SportsService){}

  public ngOnInit(): void {
    this.sportService.getSports().subscribe((sportFromApi: SportTransform[]) => {
      this.sport = sportFromApi;
    })
  }

// Creo la función que genera el valor para la siguiente página, suma siempre y cuando la longitud no sea mayor a la del array -10
  nextPage(){
    if( this.page < this.sport.length - 10)
    this.page += 10;
  }
  // Creo la función que genera el valor para la página anterior, resta siempre y cuando el valor de la variable page sea mayor a 0
  previousPage(){
    if ( this.page > 0 )
    this.page -= 10;
  }
  
}
