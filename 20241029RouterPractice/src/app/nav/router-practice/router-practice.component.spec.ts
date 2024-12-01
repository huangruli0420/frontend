import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterPracticeComponent } from './router-practice.component';

describe('RouterPracticeComponent', () => {
  let component: RouterPracticeComponent;
  let fixture: ComponentFixture<RouterPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
