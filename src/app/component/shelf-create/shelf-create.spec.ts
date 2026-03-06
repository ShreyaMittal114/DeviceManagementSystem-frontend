import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfCreate } from './shelf-create';

describe('ShelfCreate', () => {
  let component: ShelfCreate;
  let fixture: ComponentFixture<ShelfCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
