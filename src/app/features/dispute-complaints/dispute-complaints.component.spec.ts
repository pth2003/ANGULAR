import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeComplaintsComponent } from './dispute-complaints.component';

describe('DisputeComplaintsComponent', () => {
  let component: DisputeComplaintsComponent;
  let fixture: ComponentFixture<DisputeComplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DisputeComplaintsComponent]
    });
    fixture = TestBed.createComponent(DisputeComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
