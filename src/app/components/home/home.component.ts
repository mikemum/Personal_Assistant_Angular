import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        display: block;
        height: 500px;
        width: 100%;
        padding: 2em;
      }
      ,
      .services {
        background-color:red;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
