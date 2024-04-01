import { Component } from '@angular/core';
import { NavBarComponent } from '@/app/components/nav-bar/nav-bar.component';
import { FooterComponent } from '@/app/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent, 
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
