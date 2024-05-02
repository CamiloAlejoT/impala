import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'instructors',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss'
})
export class InstructorsComponent {

  instructors: { name: string, data: string[], src: string, description: string }[] = [
    {
      name: 'Alberto Urrego',
      data: [
        '40 años de experiencia',
        'Es re anciano',
        'descripcion corta',
        'CEO de impala'
      ],
      src: 'betto.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi voluptates exercitationem id voluptas ipsa aut quibusdam ullam, fuga cumque eveniet iusto, architecto quia, officia odit omniseligendi voluptate. Facilis!'
    },
    {
      name: 'Jose Ramírez',
      data: [
        '35 años de experiencia',
        'No es tan anciano',
        'Tiene linda barba',
        'Coach en las tardes'
      ],
      src: 'jose.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi voluptates exercitationem id voluptas ipsa aut quibusdam ullam, fuga cumque eveniet iusto, architecto quia, officia odit omniseligendi voluptate. Facilis!'
    },
    {
      name: 'Christian Vasquez',
      data: [
        'Se ve joven',
        'Tiene linda novia',
        'Es re alto',
        'Tengo sueño'
      ],
      src: 'criss.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi voluptates exercitationem id voluptas ipsa aut quibusdam ullam, fuga cumque eveniet iusto, architecto quia, officia odit omniseligendi voluptate. Facilis!'
    },
    {
      name: 'Diego Calderon',
      data: [
        'No sé cuentoa años tiene',
        'Pero se ve joven',
        'Es re poderoso',
        'Profe de levantamiento'
      ],
      src: 'diego.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi voluptates exercitationem id voluptas ipsa aut quibusdam ullam, fuga cumque eveniet iusto, architecto quia, officia odit omniseligendi voluptate. Facilis!'
    },
    {
      name: 'Santiago Gonzales',
      data: [
        'También se ve joven',
        'Se me acaba la imaginación',
        'Es re pro en el HSW',
        'Profe de gimnasia'
      ],
      src: 'santy.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi voluptates exercitationem id voluptas ipsa aut quibusdam ullam, fuga cumque eveniet iusto, architecto quia, officia odit omniseligendi voluptate. Facilis!'
    }

  ]


  getImageUrl(imgName: string): string {
   // console.log(`url('/assets/photos/${imgName}')`);  
    return `url('/assets/photos/${imgName}')`
  }

}
