import { Injectable } from '@angular/core';
import { BlobServiceClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  blobUrl: string = 'https://personalassistantstorage.blob.core.windows.net';
  blobSasUrl: string =
    'https://personalassistantstorage.blob.core.windows.net/?sv=2019-12-12&ss=bf&srt=sco&sp=rwdlacx&se=2020-12-23T14:11:50Z&st=2020-07-23T05:11:50Z&spr=https,http&sig=Aj4QKh2YN%2Fcs1jL7eulZD9uQVFt8K3BrKBsJi%2FOIEKg%3D';
  blobServiceClient: BlobServiceClient;
  // containerClient: any;
  filesToUpload: Array<any> = [];

  constructor() {
    this.blobServiceClient = new BlobServiceClient(this.blobSasUrl);
  }

  async upload(containerName: string, filesToUpload: Array<any>) {
    // console.log('inside gallery service Uploading files...');
    let containerClient = this.blobServiceClient.getContainerClient(
      containerName
    );
    try {
      const promises = [];
      for (const file of filesToUpload) {
        const blockBlobClient = containerClient.getBlockBlobClient(file.name);
        promises.push(blockBlobClient.uploadBrowserData(file));
      }
      await Promise.all(promises);
      // console.log('Done.');
    } catch (error) {
      console.log(error.message);
    }
  }

  async listFiles(containerName: string) {
    let blobList = [];
    let containerClient = this.blobServiceClient.getContainerClient(
      containerName
    );
    let iter = containerClient.listBlobsFlat();
    let blobItem = await iter.next();
    while (!blobItem.done) {
      blobItem = await iter.next();
      console.log({blobItem})
      let item = blobItem.value?.name;
      if (item) {
        blobList.push(item);
      }
    }
    if (blobItem.done) {
      return blobList;
    }
  }
}
