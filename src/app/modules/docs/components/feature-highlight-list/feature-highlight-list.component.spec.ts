import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureHighlightListComponent } from './feature-highlight-list.component';

describe('FeatureHighlightListComponent', () => {
  let component: FeatureHighlightListComponent;
  let fixture: ComponentFixture<FeatureHighlightListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureHighlightListComponent],
    });
    fixture = TestBed.createComponent(FeatureHighlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
