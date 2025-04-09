import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinomMComponent } from './binom-m.component';

describe('BinomMComponent', () => {
  let component: BinomMComponent;
  let fixture: ComponentFixture<BinomMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinomMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinomMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
