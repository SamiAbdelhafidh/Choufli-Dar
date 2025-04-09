import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinommainComponent } from './binommain.component';

describe('BinommainComponent', () => {
  let component: BinommainComponent;
  let fixture: ComponentFixture<BinommainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinommainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinommainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
