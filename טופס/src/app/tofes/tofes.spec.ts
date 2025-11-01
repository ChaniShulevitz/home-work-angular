import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tofes } from './tofes';

describe('Tofes', () => {
  let component: Tofes;
  let fixture: ComponentFixture<Tofes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tofes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tofes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
