import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../covid.component.scss'],
})
export class NewsComponent implements OnInit {
  newsData$: Subscription;
  newsData: Object[];
  
  constructor(private _covidService: CovidService,private _sanitizer: DomSanitizer) {
    this.getNews();
    // this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/tgbNymZ7vqY);
  }

  getNews() {
    this.newsData$ = this._covidService.getNews().subscribe((res) => {
      console.log(res);
      this.newsData = res;
    });
  }

  ngOnInit(): void {}
}
