import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsUsComponent } from './its-us.component';

describe('ItsUsComponent', () => {
  let component: ItsUsComponent;
  let fixture: ComponentFixture<ItsUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItsUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItsUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
