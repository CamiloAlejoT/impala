import { Component } from '@angular/core';

@Component({
  selector: 'principal-section',
  standalone: true,
  imports: [],
  templateUrl: './principal-section.component.html',
  styleUrl: './principal-section.component.scss'
})
export class PrincipalSectionComponent {


  sendMessage() {
    window.open(
      'https://api.whatsapp.com/send?phone=573203993082&text=Hola%20me%20me%20gustar%C3%ADa%20reservar%20mi%20semana%20de%20cortesia',
       '_blank')
  }
}
