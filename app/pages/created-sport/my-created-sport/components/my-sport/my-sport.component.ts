import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { apiSport } from 'src/app/core/services/sports/api/api-sport.models';

@Component({
  selector: 'app-my-sport',
  templateUrl: './my-sport.component.html',
  styleUrls: ['./my-sport.component.scss']
})
export class MySportComponent {
  @Input() public sport?: apiSport;
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  public removeSport() {
    this.onRemove.emit();
  }

  public editSport() {
    this.router.navigate(['created-sport'], {queryParams: {
      id: this.sport?.id
    }});
  }
}
