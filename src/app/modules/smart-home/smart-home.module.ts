import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartHomeRoutingModule } from './smart-home-routing.module';
import { SmartHomeMaterialModule } from './smart-home-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SmartHomeRoutingModule,
    SmartHomeMaterialModule
  ]
})
export class SmartHomeModule { }
