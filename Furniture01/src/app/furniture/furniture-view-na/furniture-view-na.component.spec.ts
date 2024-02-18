import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureViewNAComponent } from './furniture-view-na.component';

describe('FurnitureViewNAComponent', () => {
  let component: FurnitureViewNAComponent;
  let fixture: ComponentFixture<FurnitureViewNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureViewNAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureViewNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
