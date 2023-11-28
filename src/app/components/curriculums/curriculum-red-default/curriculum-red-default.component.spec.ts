import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumRedDefaultComponent } from './curriculum-red-default.component';

describe('CurriculumRedDefaultComponent', () => {
  let component: CurriculumRedDefaultComponent;
  let fixture: ComponentFixture<CurriculumRedDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumRedDefaultComponent]
    });
    fixture = TestBed.createComponent(CurriculumRedDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
