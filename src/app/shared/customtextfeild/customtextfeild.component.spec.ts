import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtextfeildComponent } from './customtextfeild.component';

describe('CustomtextfeildComponent', () => {
  let component: CustomtextfeildComponent;
  let fixture: ComponentFixture<CustomtextfeildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomtextfeildComponent]
    });
    fixture = TestBed.createComponent(CustomtextfeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
