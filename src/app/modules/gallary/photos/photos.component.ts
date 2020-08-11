import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['../gallary.component.scss'],
})
export class PhotosComponent implements OnInit {
  imageList: Array<any> = [];
  containerName: string = 'images';
  filesToUpload: Array<any> = [];
  blobUrl: string = 'https://personalassistantstorage.blob.core.windows.net/images';

  constructor(private _galleryService: GalleryService) {
    console.log('inside gallery ...');
    this._galleryService
      .listFiles(this.containerName)
      .then((files: Array<any>) => {
        this.imageList = files;
        console.log(this.imageList);
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
