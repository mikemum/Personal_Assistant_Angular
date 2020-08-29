import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['../gallary.component.scss'],
})
export class LecturesComponent implements OnInit {
  lectures: Array<any> = [];
  lectures$: Subscription;
  filesToUpload: Array<any> = [];
  containerName: string = 'react-lectures';
  fileUpload: string = "";
  showUpload: boolean = false;

  constructor(private _galleryService: GalleryService) {}

  ngOnInit(): void {
    this._galleryService.listFiles(this.containerName).then((lectures) => {
      this.lectures = lectures;
      console.log({ lectures });
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let files = event.target.files;
      this.showUpload = true;
      // console.log(files);
      for (const file of files) {
        this.filesToUpload.push(file);
      }
    }
  }

  upload() {
    this.fileUpload = "start";
    this._galleryService
      .upload(this.containerName, this.filesToUpload)
      .then(() => {
        console.log('done uploading.');
        this.fileUpload = "end";
        let timeout = setTimeout(() => {
          this.fileUpload = '';
        },1*1000)
        this._galleryService.listFiles(this.containerName).then((lectures) => {
          this.lectures = lectures;
          console.log({ lectures });
        });
      });
  }
}
