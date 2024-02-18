import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavadmindashboardComponent } from './navadmindashboard.component';

describe('NavadmindashboardComponent', () => {
  let component: NavadmindashboardComponent;
  let fixture: ComponentFixture<NavadmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavadmindashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavadmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
