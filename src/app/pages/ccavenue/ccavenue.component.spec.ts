import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcavenueComponent } from './ccavenue.component';

describe('CcavenueComponent', () => {
  let component: CcavenueComponent;
  let fixture: ComponentFixture<CcavenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcavenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcavenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
