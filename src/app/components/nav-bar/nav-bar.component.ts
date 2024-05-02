import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  display: boolean = window.innerWidth > 767 ? true : false

  sections: { label: string, url: string }[] = [
    {
      label: 'Impala',
      url: 'us',
    },
    {
      label: 'Horarios',
      url: 'horarios'
    },
    {
      label: 'Reglamento',
      url: 'reglamento'
    },
    {
      label: 'Precios',
      url: 'precios'
    }
  ]


  //   Home
  // Horarios 
  // Reglamento
  // Precios

  // Entrenadores?
  // Testimonios?
  // Servicios?  (fisioterapia, cafetería)
  // Clases especiales? (levantamiento, gimnasia, la de Jose)
  //

  constructor(
    public dialog: MatDialog
  ) { }
  ngOnInit() { }

  ngAfterViewInit() {

    const navbar = document.querySelector(".navbar");

    let lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      () => {
        console.log("scroll");
        var { scrollY } = window;
        if (scrollY > lastScrollTop) {
          navbar?.classList.remove("visible");
        } else if (scrollY < lastScrollTop) {
          navbar?.classList.add("visible");
        }
        lastScrollTop = scrollY <= 0 ? 0 : scrollY;
      },
      { passive: true }
    );

    const listItem = document.querySelectorAll("#landing-header")
    const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect()


        menuBackDrop.style.setProperty("left", `${left}px`)
        menuBackDrop.style.setProperty("top", `${top}px`)
        menuBackDrop.style.setProperty("width", `${width}px`)
        menuBackDrop.style.setProperty("height", `${height}px`)

        menuBackDrop.style.opacity = "1"
        menuBackDrop.style.visibility = "visible"
      })

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0"
        menuBackDrop.style.visibility = "hidden"
      })
    })
  }


  openSideNav() {
    const dialogRef = this.dialog.open(SideMenuComponent, {
      width: `${window.innerWidth}px`,
      height: '100%',
      position: {
        top: '0',
        left: '0'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log('open side ');

  }




}
