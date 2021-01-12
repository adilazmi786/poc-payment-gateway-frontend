import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreecpaymentComponent } from './threecpayment.component';

describe('ThreecpaymentComponent', () => {
  let component: ThreecpaymentComponent;
  let fixture: ComponentFixture<ThreecpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreecpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreecpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
