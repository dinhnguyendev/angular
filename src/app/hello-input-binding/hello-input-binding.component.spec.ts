import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloInputBindingComponent } from './hello-input-binding.component';

describe('HelloInputBindingComponent', () => {
  let component: HelloInputBindingComponent;
  let fixture: ComponentFixture<HelloInputBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloInputBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloInputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
