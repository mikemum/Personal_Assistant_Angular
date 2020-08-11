import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  title: string;

  constructor() {}

  ngOnInit(): void {
    this.title =
      'Everything you need to know about covid: news, tweets and glbal and countrywid stats';
  }
}
