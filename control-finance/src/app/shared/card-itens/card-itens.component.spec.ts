import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItensComponent } from './card-itens.component';

describe('CardItensComponent', () => {
  let component: CardItensComponent;
  let fixture: ComponentFixture<CardItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardItensComponent]
    });
    fixture = TestBed.createComponent(CardItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
