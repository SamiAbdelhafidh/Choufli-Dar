import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLayoutPropComponent } from './front-layout-prop.component';

describe('FrontLayoutPropComponent', () => {
  let component: FrontLayoutPropComponent;
  let fixture: ComponentFixture<FrontLayoutPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontLayoutPropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontLayoutPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
