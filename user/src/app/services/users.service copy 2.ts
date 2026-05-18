import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServicewww {
  constructor(private socket: Socket) {}

  // Listen for events
  getMessage(): Observable<any> {
    return this.socket.fromEvent('message');
  }

  // Emit events
  sendMessage(msg: string): void {
    this.socket.emit('message', msg);
  }
}