import { SportsService } from './../../core/services/sports/sports.service';
import { SportTransform } from './../../core/services/sports/sport.models';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  public sports?: SportTransform;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sportService: SportsService
  ){
    this.activatedRoute.params.subscribe((params) => {
      const sportId = params['id'];
        this.sportService.getSportDetail(sportId).subscribe((sport) => {
          this.sports = sport;
        })
    })
}
}
