import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
    <app-header></app-header>
    <div class="container">
            <h1 class="title">Gracias por tu compra</h1>
        <p class="content">
            Tu compra ha sido enviada
        </p>
        <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ratione
            sit aperiam incidunt, consequuntur placeat porro iusto amet.  
            Recusandae optiolaudantium consequatur saepe est odit nemo. Animi sapiente odit amet.
        </span>
    </div>
  `,
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
