import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPracticeComponent } from './icon-practice.component';

describe('IconPracticeComponent', () => {
  let component: IconPracticeComponent;
  let fixture: ComponentFixture<IconPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
