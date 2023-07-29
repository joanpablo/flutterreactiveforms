import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsFooterComponent } from './docs-footer.component';

describe('DocsFooterComponent', () => {
  let component: DocsFooterComponent;
  let fixture: ComponentFixture<DocsFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocsFooterComponent],
    });
    fixture = TestBed.createComponent(DocsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
