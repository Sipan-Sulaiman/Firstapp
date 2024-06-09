import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as leistungComponent from './footer.component';

describe('LeistungComponent', () => {
  let component: leistungComponent.Footer;
  let fixture: ComponentFixture<leistungComponent.Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [leistungComponent.Footer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(leistungComponent.Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
