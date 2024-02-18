import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureEditComponent } from './furniture-edit.component';

describe('FurnitureEditComponent', () => {
  let component: FurnitureEditComponent;
  let fixture: ComponentFixture<FurnitureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
