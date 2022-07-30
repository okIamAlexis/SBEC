import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMgComponent } from './navbar-mg.component';

describe('NavbarMgComponent', () => {
  let component: NavbarMgComponent;
  let fixture: ComponentFixture<NavbarMgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
