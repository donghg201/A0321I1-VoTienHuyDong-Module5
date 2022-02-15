import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownGetSetComponent } from './countdown-get-set.component';

describe('CountdownGetSetComponent', () => {
  let component: CountdownGetSetComponent;
  let fixture: ComponentFixture<CountdownGetSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownGetSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownGetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
