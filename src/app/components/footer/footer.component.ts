import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  goToLink(rrss: string) {
    let url: string = ''
    switch (rrss) {
      case 'ig':
        url = 'https://www.instagram.com/impalabogota'
        break;
      case 'tiktok':
        url = 'https://www.tiktok.com/@impalabogota?lang=es'
        break;
      case 'wp':
        url = 'https://api.whatsapp.com/send?phone=573203993082&text=Hola%20me%20me%20gustar%C3%ADa%20reservar%20mi%20semana%20de%20cortesia'

    }
    window.open(url, "_blank");
  }

}
