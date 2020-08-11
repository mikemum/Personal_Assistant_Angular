import { Component, OnInit, OnDestroy } from '@angular/core';
import { CovidService } from 'src/app/modules/covid/covid.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['../covid.component.scss'],
})
export class StatsComponent implements OnInit, OnDestroy {
  stats$: Subscription;
  stats;
  statKeys;

  constructor(
    private _covidService: CovidService,
    private _userService: UserService
  ) {
    this.getStats();
  }

  ngOnInit(): void {
   
  }

  getStats() {
    this.stats$ = this._covidService.getStats().subscribe((res) => {
      console.log(res);
      this.stats = res;
      this.statKeys = Object.keys(this.stats);
    });
  }

  ngOnDestroy(): void {
    // this.stats$.unsubscribe();
  }
}
