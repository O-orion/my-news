import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewNewsComponent } from './card-new-news.component';

describe('CardNewNewsComponent', () => {
  let component: CardNewNewsComponent;
  let fixture: ComponentFixture<CardNewNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNewNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
