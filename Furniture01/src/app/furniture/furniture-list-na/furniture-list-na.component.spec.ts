import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureListNAComponent } from './furniture-list-na.component';

describe('FurnitureListNAComponent', () => {
  let component: FurnitureListNAComponent;
  let fixture: ComponentFixture<FurnitureListNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureListNAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureListNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
