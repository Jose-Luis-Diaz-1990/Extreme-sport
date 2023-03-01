import { SportTransform } from './../../../../core/services/sports/sport.models';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent {
  @Input() public sport?: SportTransform;

  constructor(private router: Router){}

  public navigateToDetail() {
    if (this.sport) {
      this.router.navigate(['/sport-list/detail', this.sport.id]);
    }
  }
}
