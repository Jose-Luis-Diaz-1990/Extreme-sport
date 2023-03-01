import { authorAdmin } from './../../../core/services/author/author.data';
import { sportAuthor } from './../../../core/services/author/api/api-author.models';
import { switchMap } from 'rxjs';
import { ApiSportService } from 'src/app/core/services/sports/api/api-sport.service';
import { apiSport } from './../../../core/services/sports/api/api-sport.models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-created-sport',
  templateUrl: './my-created-sport.component.html',
  styleUrls: ['./my-created-sport.component.scss']
})
export class MyCreatedSportComponent implements OnInit{

  public sport: apiSport[] = [];
  public authorSelect?: sportAuthor;
  public authorSl: sportAuthor[] = authorAdmin; 

  constructor(private sportService: ApiSportService){}

  public ngOnInit(): void {
    this.sportService.getApiSports().subscribe((sportFromApi: apiSport[]) => {
      this.sport = sportFromApi;
    })
  }

  public removeSport(id?: string) {
    if(!id){ return; }
    this.sportService.deleteApiSport(id).pipe(
      switchMap((sport) => {
        return this.sportService.getApiSports();
      })
    ).subscribe((sportFromApi) => {
      this.sport = sportFromApi;
    })
  }

}
