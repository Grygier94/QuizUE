import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() { }

  notifications = [
    { header: "Aktywne powiadomienie 1", content: "To jest przykładowe powiadomienie", time: `${new Date().getHours()}:${new Date().getMinutes()}` },
    { header: "Aktywne powiadomienie 2", content: "To jest przykładowe powiadomienie", time: `${new Date().getHours() - 1}:${new Date().getMinutes()}` },
    { header: "Aktywne powiadomienie 3", content: "To jest przykładowe powiadomienie", time: `${new Date().getHours() - 1}:${new Date().getMinutes() - 20}` },
    { header: "Aktywne powiadomienie 4", content: "To jest przykładowe powiadomienie", time: `${new Date().getHours() - 2}:${new Date().getMinutes()}` },
    { header: "Aktywne powiadomienie 5", content: "To jest przykładowe powiadomienie", time: `${new Date().getHours() - 3}:${new Date().getMinutes() - 30}` }
  ]
  ngOnInit() { }

  closeNotifications() {
    this.close.emit();
  }
}
