import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcontComponent } from './btcont.component';

describe('BtcontComponent', () => {
  let component: BtcontComponent;
  let fixture: ComponentFixture<BtcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtcontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
