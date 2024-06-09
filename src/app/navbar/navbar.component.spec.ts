import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCompComponent } from './navbar.component';






describe('MainCompComponent', () => {
  let component: NavCompComponent;
  let fixture: ComponentFixture<NavCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
