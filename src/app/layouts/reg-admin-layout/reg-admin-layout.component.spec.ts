import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAdminLayoutComponent } from './reg-admin-layout.component';

describe('RegAdminLayoutComponent', () => {
  let component: RegAdminLayoutComponent;
  let fixture: ComponentFixture<RegAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegAdminLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
