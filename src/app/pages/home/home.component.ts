import { Component } from '@angular/core';
import { NavBarComponent } from '@/app/components/nav-bar/nav-bar.component';
import { FooterComponent } from '@/app/components/footer/footer.component';
import { SectionsComponent } from '@/app/components/sections/sections.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent, 
    FooterComponent,
    SectionsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
