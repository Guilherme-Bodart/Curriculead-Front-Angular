import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumDefaultComponent } from './curriculum-default.component';

describe('CurriculumDefaultComponent', () => {
  let component: CurriculumDefaultComponent;
  let fixture: ComponentFixture<CurriculumDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumDefaultComponent]
    });
    fixture = TestBed.createComponent(CurriculumDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
