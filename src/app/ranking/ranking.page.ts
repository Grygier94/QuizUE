import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  constructor() { }

  currentUser = { name: "Jan Kowalski", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 6 };
  users = [
    { name: "Jan Kowalski", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 6 },
    { name: "Maciej Nowak", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 7 },
    { name: "Arek Iracki", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 8 },
    { name: "Aneta Grzybek", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 4 },
    { name: "Marek Godny", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 2 },
    { name: "Stanisław Kowalik", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 5 },
    { name: "Aneta Kwaca", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 10 },
    { name: "Weronika Wolny", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 2 },
    { name: "Dariusz Durek", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 0 },
    { name: "Tomek Kowalski", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 0 },
    { name: "Maciej Nowak", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 0 },
    { name: "Arek Iracki", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 4 },
    { name: "Aneta Grzybek", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 6 },
    { name: "Marek Godny", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 7 },
    { name: "Stanisław Kowalik", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 8 },
    { name: "Aneta Kwaca", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 2 },
    { name: "Weronika Wolny", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 9 },
    { name: "Dariusz Durek", description: "Testowy opis uzytkownika...", avatar: "/assets/default-user-picture.jpg", score: 7 }
  ]

  ngOnInit() {
    this.users.sort(this.compare);
    this.currentUser["place"] = this.users.findIndex(u => u.name == "Jan Kowalski") + 1;
  }

  compare(user1, user2) {
    if (user1.score < user2.score)
      return 1
    else if (user1.score > user2.score)
      return -1

    return 0
  }
}
