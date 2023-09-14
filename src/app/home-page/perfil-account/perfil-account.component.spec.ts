import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAccountComponent } from './perfil-account.component';

describe('PerfilAccountComponent', () => {
  let component: PerfilAccountComponent;
  let fixture: ComponentFixture<PerfilAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilAccountComponent]
    });
    fixture = TestBed.createComponent(PerfilAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
