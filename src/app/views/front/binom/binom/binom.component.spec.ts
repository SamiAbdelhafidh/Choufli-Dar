import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinomComponent } from './binom.component';

describe('BinomComponent', () => {
  let component: BinomComponent;
  let fixture: ComponentFixture<BinomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
