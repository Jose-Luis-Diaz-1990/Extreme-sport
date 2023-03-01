import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySportComponent } from './my-sport.component';

describe('MySportComponent', () => {
  let component: MySportComponent;
  let fixture: ComponentFixture<MySportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
