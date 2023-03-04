import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  public listeMessages: string[] = [];

  log(message: string) {
   // this.listeMessages.push(message);
  }

  clear() {
    this.listeMessages = [];
  }
}
