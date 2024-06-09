import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhaltComponent } from './inhalt.component';

describe('InhaltComponent', () => {
  let component: InhaltComponent;
  let fixture: ComponentFixture<InhaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InhaltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InhaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
