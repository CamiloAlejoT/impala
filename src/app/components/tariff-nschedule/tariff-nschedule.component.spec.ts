import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffNScheduleComponent } from './tariff-nschedule.component';

describe('TariffNScheduleComponent', () => {
  let component: TariffNScheduleComponent;
  let fixture: ComponentFixture<TariffNScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffNScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TariffNScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
