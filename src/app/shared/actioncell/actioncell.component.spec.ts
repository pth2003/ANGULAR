import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActioncellComponent } from './actioncell.component';

describe('ActioncellComponent', () => {
  let component: ActioncellComponent;
  let fixture: ComponentFixture<ActioncellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActioncellComponent]
    });
    fixture = TestBed.createComponent(ActioncellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
