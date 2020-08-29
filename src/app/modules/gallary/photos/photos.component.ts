import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['../gallary.component.scss'],
})
export class PhotosComponent implements OnInit {
  imageList: Array<any> = [];
  containerName: string = 'images';
  filesToUpload: Array<any> = [];
  blobUrl: string =
    'https://personalassistantstorage.blob.core.windows.net/images';
  loggedInUserName: string;

  constructor(
    private _galleryService: GalleryService,
    private _userService: UserService
  ) {
    console.log('inside gallery ...');
    this._userService.checkUser().subscribe((res) => {
      console.log({ res });
      this.loggedInUserName = res.email.split('.')[0];
    });
  }

  ngOnInit(): void {
    console.log(this.loggedInUserName);
    this._galleryService
      .listFiles(this.containerName)
      .then((files: Array<any>) => {
        this.imageList = files;
      });
    console.log(this.imageList);
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let files = event.target.files;
      for (let file of files) {
        // console.log(file);
        // file.fileName = `${this.loggedInUserName}_${file.name}`;
        // console.log({ file });
        this.filesToUpload.push(file);
      }
    }
  }

  upload() {
    this._galleryService
      .upload('mikeImages', this.filesToUpload)
      .then(() => {
        console.log('done uploading.');
      });
  }
}
