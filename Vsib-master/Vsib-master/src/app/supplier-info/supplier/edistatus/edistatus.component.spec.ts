import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDIstatusComponent } from './edistatus.component';

describe('EDIstatusComponent', () => {
  let component: EDIstatusComponent;
  let fixture: ComponentFixture<EDIstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDIstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDIstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
