import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.page.html',
  styleUrls: ['./player-search.page.scss'],
})
export class PlayerSearchPage implements OnInit {

  constructor() { }

  usersDb = [
    { name: "Jan Kowalski", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Maciej Nowak", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Arek Iracki", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Aneta Grzybek", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Marek Godny", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Stanisław Kowalik", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Aneta Kwaca", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Weronika Wolny", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Dariusz Durek", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Jan Kowalski", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Maciej Nowak", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Arek Iracki", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Aneta Grzybek", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Marek Godny", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Stanisław Kowalik", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Aneta Kwaca", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Weronika Wolny", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" },
    { name: "Dariusz Durek", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg" }
  ]

  users = [];

  ngOnInit() {
    this.users = this.usersDb;
  }

  filter(event: any) {
    const value: string = event.detail.value;
    this.users = this.usersDb.filter(u =>
      u.name.toLowerCase().includes(value.toLowerCase()) ||
      u.description.toLowerCase().includes(value.toLowerCase()));
  }

}
