import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloForComponent } from './hello-for.component';

describe('HelloForComponent', () => {
  let component: HelloForComponent;
  let fixture: ComponentFixture<HelloForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
