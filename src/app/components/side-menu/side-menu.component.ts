import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  menuList: String[] = [
    'Inicio',
    'Horarios',
    'Reglamento',
    'Precios',
  ]
  constructor(
    public dialogRef: MatDialogRef<SideMenuComponent>,
  ) { }
}
