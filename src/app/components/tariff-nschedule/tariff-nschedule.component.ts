import { Component } from '@angular/core';

@Component({
  selector: 'tariff-n-schedule',
  standalone: true,
  imports: [],
  templateUrl: './tariff-nschedule.component.html',
  styleUrl: './tariff-nschedule.component.scss'
})
export class TariffNScheduleComponent {

  plans: {planName: string, cost: string}[] = [
    {
      planName: 'MES 12 CLASES',
      cost: '$225.000'
    },
    {
      planName: 'MES ILIMITADO',
      cost: '$275.000'
    },
    {
      planName: 'TRIMESTRE ILIMITADO',
      cost: '-10%'
    },
    {
      planName: 'SEMESTE ILIMITADO',
      cost: '-20%'
    },
    {
      planName: 'AÑO ILIMITADO',
      cost: '-30%'
    }
  ]

}
