import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawTicketsComponent } from './draw-tickets.component';

describe('DrawTicketsComponent', () => {
  let component: DrawTicketsComponent;
  let fixture: ComponentFixture<DrawTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
