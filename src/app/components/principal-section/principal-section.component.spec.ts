import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSectionComponent } from './principal-section.component';

describe('PrincipalSectionComponent', () => {
  let component: PrincipalSectionComponent;
  let fixture: ComponentFixture<PrincipalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
