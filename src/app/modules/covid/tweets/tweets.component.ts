import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['../covid.component.scss']
})
export class TweetsComponent implements OnInit {
  tweets$: Subscription;
  tweets: Object[];

  constructor(private _covidService: CovidService) {
    this.getTweets();
  }

  getTweets() {
    this.tweets$ = this._covidService.getTweets().subscribe(res => {
      console.log(res);
      this.tweets = res;
    })
  }
  ngOnInit(): void {}
}
