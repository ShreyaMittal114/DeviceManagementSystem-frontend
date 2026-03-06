import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfUpdate } from './shelf-update';

describe('ShelfUpdate', () => {
  let component: ShelfUpdate;
  let fixture: ComponentFixture<ShelfUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfUpdate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
