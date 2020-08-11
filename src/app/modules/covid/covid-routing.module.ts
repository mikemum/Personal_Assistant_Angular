import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './stats/stats.component';
import { Routes, RouterModule } from '@angular/router';
import { TweetsComponent } from './tweets/tweets.component';
import { NewsComponent } from './news/news.component';
import { CovidComponent } from './covid.component';

const routes: Routes = [
  {
    path: '',
    component: CovidComponent,
    children: [
      { path: 'news', component: NewsComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'tweets', component: TweetsComponent },
      {
        path: '**',
        redirectTo: 'stats',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule {}
