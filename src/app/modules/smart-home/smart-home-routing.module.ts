import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartHomeComponent } from './smart-home.component';

const routes: Routes = [{ path: '', component: SmartHomeComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartHomeRoutingModule {}
