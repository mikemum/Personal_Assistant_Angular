import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { BlobServiceClient } from '@azure/storage-blob';


@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styles: [],
})
export class GallaryComponent implements OnInit {
  // imageList: Array<any> = [];
  // blobUrl: string = 'https://personalassistantstorage.blob.core.windows.net';
  // galleryForm: FormGroup;
  // blobSasUrl: string =
    // 'https://personalassistantstorage.blob.core.windows.net/?sv=2019-10-10&ss=b&srt=sco&sp=rwdlacx&se=2020-12-23T00:13:58Z&st=2020-07-22T15:13:58Z&spr=https,http&sig=0D%2BpTwMjrt2TnK2ewm9vs4x4BvWk1NZ9ycY63fYp9EE%3D';
  // blobServiceClient: BlobServiceClient;
  // containerName: string = 'images';
  // containerClient: any;
  // filesToUpload: Array<any> = [];

  constructor(private formBuilder: FormBuilder) {
    // this.blobServiceClient = new BlobServiceClient(this.blobSasUrl);
    // this.containerClient = this.blobServiceClient.getContainerClient(
    //   this.containerName
    // );
    // this.galleryForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    // this.listFiles().then((data) => console.log(data));
  }

  // async createContainer() {
  //   try {
  //     // console.log(`Creating container "${this.containerName}"...`);
  //     // await this.containerClient.create();
  //     // console.log(`Done.`);
  //   } catch (error) {
  //     // console.log(error.message);
  //   }
  // }

  // onFileChange(event) {
  //   if (event.target.files.length > 0) {
  //     let files = event.target.files;
  //     // console.log(files);
  //     for (const file of files) {
  //       this.filesToUpload.push(file);
  //     }
  //   }
  // }
  // async upload() {
    // try {
    //   console.log('Uploading files...');
    //   const promises = [];
    //   for (const file of this.filesToUpload) {
    //     const blockBlobClient = this.containerClient.getBlockBlobClient(
    //       file.name
    //     );
    //     promises.push(blockBlobClient.uploadBrowserData(file));
    //   }
    //   await Promise.all(promises);
    //   console.log('Done.');
    // } catch (error) {
    //   console.log(error.message);
    // }
  // }

  // async listFiles() {

  //   try {
  //     // console.log('Retrieving file list...');
  //     let iter = this.containerClient.listBlobsFlat();
  //     let blobItem = await iter.next();
  //     while (!blobItem.done) {
  //       blobItem = await iter.next();
  //       let img = blobItem.value.name;
  //       this.imageList.push(`${this.blobUrl}/${this.containerName}/${img}`);
  //     }
  //     if (this.imageList.length > 0) {
  //       // console.log('Done.');
  //     } else {
  //       // console.log('The container does not contain any files.');
  //     }
  //   } catch (error) {
  //     // console.log(error.message);
  //   }
  // }
}
