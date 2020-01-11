import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  settings = [
    { name: "Konto" },
    { name: "Powiadomienia" },
    { name: "Wygląd aplikacji" },
    { name: "Prywatność i bezpieczeństwo" },
    { name: "Pomoc i wsparcie" },
    { name: "O aplikacji" }
  ]

  ngOnInit() {
  }

}
