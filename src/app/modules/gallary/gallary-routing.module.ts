import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './gallary.component';
import { LecturesComponent } from './lectures/lectures.component';
import { PhotosComponent } from './photos/photos.component';
import { LectureComponent } from './lectures/lecture.component';

const routes: Routes = [
  {
    path: '',
    component: GallaryComponent,
    children: [
      { path: 'photos', component: PhotosComponent },
      {
        path: 'lectures',
        component: LecturesComponent,
        children: [{ path: ':lecture', component: LectureComponent }],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GallaryRoutingModule {}
