import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subc2Component } from './subc2.component';

describe('Subc2Component', () => {
  let component: Subc2Component;
  let fixture: ComponentFixture<Subc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
