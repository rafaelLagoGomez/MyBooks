import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginTemplateComponent } from './form-login-template.component';

describe('FormLoginTemplateComponent', () => {
  let component: FormLoginTemplateComponent;
  let fixture: ComponentFixture<FormLoginTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLoginTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormLoginTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
