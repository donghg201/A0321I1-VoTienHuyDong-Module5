import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerenwAddComponent } from './hackerenw-add.component';

describe('HackerenwAddComponent', () => {
  let component: HackerenwAddComponent;
  let fixture: ComponentFixture<HackerenwAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerenwAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerenwAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
