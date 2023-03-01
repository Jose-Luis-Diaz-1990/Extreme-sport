import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatNeedComponent } from './what-need.component';

describe('WhatNeedComponent', () => {
  let component: WhatNeedComponent;
  let fixture: ComponentFixture<WhatNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
