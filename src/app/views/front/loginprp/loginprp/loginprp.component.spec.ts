import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprpComponent } from './loginprp.component';

describe('LoginprpComponent', () => {
  let component: LoginprpComponent;
  let fixture: ComponentFixture<LoginprpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginprpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginprpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
