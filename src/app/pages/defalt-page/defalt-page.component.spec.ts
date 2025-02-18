import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaltPageComponent } from './defalt-page.component';

describe('DefaltPageComponent', () => {
  let component: DefaltPageComponent;
  let fixture: ComponentFixture<DefaltPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaltPageComponent]
    });
    fixture = TestBed.createComponent(DefaltPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
