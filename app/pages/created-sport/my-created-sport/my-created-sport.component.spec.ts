import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCreatedSportComponent } from './my-created-sport.component';

describe('MyCreatedSportComponent', () => {
  let component: MyCreatedSportComponent;
  let fixture: ComponentFixture<MyCreatedSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCreatedSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCreatedSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
