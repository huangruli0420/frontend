import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components1Component } from './components1.component';

describe('Components1Component', () => {
  let component: Components1Component;
  let fixture: ComponentFixture<Components1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Components1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Components1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
