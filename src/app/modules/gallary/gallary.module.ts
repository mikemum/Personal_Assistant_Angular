import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallaryRoutingModule } from './gallary-routing.module';
import { GallaryMaterialModule } from './gallary-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { GallaryComponent } from './gallary.component';
import { LecturesComponent } from './lectures/lectures.component';
import { PhotosComponent } from './photos/photos.component';
import { LectureComponent } from './lectures/lecture.component';




@NgModule({
  declarations: [
    GallaryComponent,
    LecturesComponent,
    PhotosComponent,
    LectureComponent,
  ],
  imports: [
    CommonModule,
    GallaryRoutingModule,
    GallaryMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
  ],
})
export class GallaryModule {}
