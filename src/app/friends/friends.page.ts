import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  constructor() { }

  users = [
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
  
  ngOnInit() {
  }

}
