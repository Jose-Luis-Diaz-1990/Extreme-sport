import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedSportComponent } from './created-sport.component';

describe('CreatedSportComponent', () => {
  let component: CreatedSportComponent;
  let fixture: ComponentFixture<CreatedSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
