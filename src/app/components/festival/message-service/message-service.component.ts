import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-service',
  templateUrl: './message-service.component.html',
  styleUrls: ['./message-service.component.css'],
})
export class MessageServiceComponent implements OnInit {
  constructor(public messageService: MessagesService) {}
  ngOnInit(): void {}
}
