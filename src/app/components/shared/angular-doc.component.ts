import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-doc',
  templateUrl: './angular-doc.component.html'
})
export class AngularDocComponent implements OnInit {
  title: 'App is runing'
  constructor() { }

  ngOnInit(): void {
  }

}
