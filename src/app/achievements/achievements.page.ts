import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  achievements = [
    {name: "Osiągnięcie 1", icon: "stopwatch", achieved: true},
    {name: "Osiągnięcie 2", icon: "time", achieved: true},
    {name: "Osiągnięcie 3", icon: "chatboxes", achieved: true},
    {name: "Osiągnięcie 4", icon: "briefcase", achieved: false},
    {name: "Osiągnięcie 5", icon: "sync", achieved: false},
    {name: "Osiągnięcie 6", icon: "contacts", achieved: false},
    {name: "Osiągnięcie 7", icon: "lock", achieved: false},
    {name: "Osiągnięcie 8", icon: "pie", achieved: false},
    {name: "Osiągnięcie 9", icon: "school", achieved: false},
    {name: "Osiągnięcie 10", icon: "thumbs-up", achieved: false}
  ]

  constructor() { }

  ngOnInit() {
  }

}
