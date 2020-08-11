import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  
  constructor(private socket: Socket) {}

  public sendMessage(message) {
    // console.log('inside chatservice sendMessage...');
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    // console.log('inside chatservice getMessages...');
    return Observable.create((observer) => {
      this.socket.on('new-message', (chatResponse) => {
        observer.next(chatResponse);
      });
    });
  };
}
