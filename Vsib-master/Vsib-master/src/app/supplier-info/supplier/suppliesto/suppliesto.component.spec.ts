import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliestoComponent } from './suppliesto.component';

describe('SuppliestoComponent', () => {
  let component: SuppliestoComponent;
  let fixture: ComponentFixture<SuppliestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
