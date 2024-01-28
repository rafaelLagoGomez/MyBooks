import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginReactiveComponent } from './form-login-reactive.component';

describe('FormLoginReactiveComponent', () => {
  let component: FormLoginReactiveComponent;
  let fixture: ComponentFixture<FormLoginReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLoginReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormLoginReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
