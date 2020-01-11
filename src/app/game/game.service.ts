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
      content: "Pytanie 1",
      answers: [
        { content: "Odpowiedź poprawna", isCorrect: true },
        { content: "Zła odpowiedź 1", isCorrect: false },
        { content: "Zła odpowiedź 2", isCorrect: false },
        { content: "Zła odpowiedź 3", isCorrect: false }
      ]
    },
    {
      content: "Pytanie 2",
      answers: [
        { content: "Zła odpowiedź 1", isCorrect: false },
        { content: "Odpowiedź poprawna", isCorrect: true },
        { content: "Zła odpowiedź 2", isCorrect: false },
        { content: "Zła odpowiedź 3", isCorrect: false }
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
