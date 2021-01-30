import { Injectable } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  index = -1;
  questions: Question[] = [
    {
      content: "Przy jakiej ulicy znajduje się budynek N?",
      answers: [
        { content: "ul. 3 Maja", isCorrect: false },
        { content: "ul. Pułaskiego", isCorrect: false },
        { content: "ul. Adamskiego", isCorrect: true },
        { content: "ul. 1 Maja", isCorrect: false }
      ]
    },
    {
      content: "Które budynki są połączone korytarzem?",
      answers: [
        { content: "A, B", isCorrect: true },
        { content: "D, E", isCorrect: false },
        { content: "F, G", isCorrect: false },
        { content: "N, P, C", isCorrect: false }
      ]
    },
    {
      content: "Jak nazywa się rektor uczelni?",
      answers: [
        { content: "Robert Tomanek", isCorrect: true },
        { content: "Robert Życiński", isCorrect: false },
        { content: "Janusz Wywiał", isCorrect: false },
        { content: "Jolanta Jaworska", isCorrect: false }
      ]
    },
    {
      content: "Ile lat trwają studia licencjackie?",
      answers: [
        { content: "2 lata", isCorrect: false },
        { content: "3 lata", isCorrect: true },
        { content: "4 lata", isCorrect: false },
        { content: "5 lat", isCorrect: false },
      ]
    },
    {
      content: "Co oznacza skrót CNTI?",
      answers: [
        { content: "Centrum Niszczenia Talentów Informatycznych", isCorrect: false },
        { content: "Centrum Nowoczesnych Technologii Informatycznych", isCorrect: true },
        { content: "Centrum Nauki Technik Inżynierskich", isCorrect: false },
        { content: "Centrum Nowoczesnych Technologii Internetowych", isCorrect: false },
      ]
    },
    {
      content: "Którego kierunku uczelnia nie posiada w swojej ofercie?",
      answers: [
        { content: "Informatyka", isCorrect: false },
        { content: "Międzynarodowe stosunki gospodarcze", isCorrect: false },
        { content: "Zdrowie publiczne", isCorrect: true },
        { content: "E-commerce", isCorrect: false }
      ]
    },
    {
      content: "Jaka platforma e-learningowa dostępna jest dla studentów?",
      answers: [
        { content: "Platforma Noodle", isCorrect: false },
        { content: "Platforma Obywatelska", isCorrect: false },
        { content: "Platforma Moodle", isCorrect: true },
        { content: "Platforma Zdalnej Edukacji", isCorrect: false }
      ]
    },
    {
      content: "Jak nazywa się organizacja reprezentująca studentów przed władzami uczelni?",
      answers: [
        { content: "Parlament Studencki", isCorrect: true },
        { content: "Śląskie Zrzeszenie Studentów", isCorrect: false },
        { content: "Parlament Rzeczypospolitej Polskiej", isCorrect: false },
        { content: "Rada Naczelna Studentów", isCorrect: false }
      ]
    },
    {
      content: "Kto może zostać członkiem Parlamentu Studenckiego?",
      answers: [
        { content: "Każdy", isCorrect: false },
        { content: "Studenci UE", isCorrect: true },
        { content: "Absolwenci UE", isCorrect: false },
        { content: "Każdy z tytułem magistra", isCorrect: false }
      ]
    },
    {
      content: "W którym roku został założony Uniwersytet?",
      answers: [
        { content: "1936", isCorrect: true },
        { content: "2000", isCorrect: false },
        { content: "1994", isCorrect: false },
        { content: "1948", isCorrect: false }
      ]
    }
  ]

  getQuestion(): Question {
    this.index++;
    if (this.index >= this.questions.length)
      this.index = 0;
    return this.questions[this.index];
  }
}
