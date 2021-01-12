import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreecauthorisationComponent } from './threecauthorisation.component';

describe('ThreecauthorisationComponent', () => {
  let component: ThreecauthorisationComponent;
  let fixture: ComponentFixture<ThreecauthorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreecauthorisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreecauthorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
