import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatTableModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatListModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,

];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class CovidMaterialModule {}
