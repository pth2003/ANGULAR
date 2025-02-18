import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRelatedComponent } from './file-related.component';

describe('FileRelatedComponent', () => {
  let component: FileRelatedComponent;
  let fixture: ComponentFixture<FileRelatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FileRelatedComponent]
    });
    fixture = TestBed.createComponent(FileRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
