import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSummaryComponent } from './style-summary.component';

describe('StyleSummaryComponent', () => {
  let component: StyleSummaryComponent;
  let fixture: ComponentFixture<StyleSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
