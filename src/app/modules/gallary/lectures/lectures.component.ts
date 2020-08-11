import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['../gallary.component.scss'],
})
export class LecturesComponent implements OnInit {
  lectures: Array<any> = [];
  filesToUpload: Array<any> = [];
  containerName: string = 'react-lectures';

  constructor(private _galleryService: GalleryService) {
    this._galleryService.listFiles(this.containerName).then((lectures) => {
      this.lectures = lectures;
      console.log({ lectures });
    });
  }

  ngOnInit(): void {}

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let files = event.target.files;
      // console.log(files);
      for (const file of files) {
        this.filesToUpload.push(file);
      }
    }
  }

  upload() {
    this._galleryService
      .upload(this.containerName, this.filesToUpload)
      .then(() => {
        console.log('done uploading.');
      });
  }
}
