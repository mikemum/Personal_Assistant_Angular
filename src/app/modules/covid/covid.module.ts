import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidMaterialModule} from './covid-material.module';
import { CovidRoutingModule } from './covid-routing.module';
import { StatsComponent } from './stats/stats.component';
import { NewsComponent } from './news/news.component';
import { TweetsComponent } from './tweets/tweets.component';
import { CovidComponent } from './covid.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidService } from './covid.service';


@NgModule({
  declarations: [CovidComponent, StatsComponent, NewsComponent, TweetsComponent],
  imports: [
    CommonModule,
    CovidMaterialModule,
    CovidRoutingModule,
    CovidRoutingModule,
  ],
  providers:[CovidService]
})
export class CovidModule { }
