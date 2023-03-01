import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainMyProyectComponent } from './explain-my-proyect.component';

describe('ExplainMyProyectComponent', () => {
  let component: ExplainMyProyectComponent;
  let fixture: ComponentFixture<ExplainMyProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainMyProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplainMyProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
