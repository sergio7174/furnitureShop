import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureCreateComponent } from './furniture-create.component';

describe('FurnitureCreateComponent', () => {
  let component: FurnitureCreateComponent;
  let fixture: ComponentFixture<FurnitureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
