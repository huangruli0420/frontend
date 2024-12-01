import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfPracticeComponent } from './if-practice.component';

describe('IfPracticeComponent', () => {
  let component: IfPracticeComponent;
  let fixture: ComponentFixture<IfPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
