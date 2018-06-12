import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // 这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
