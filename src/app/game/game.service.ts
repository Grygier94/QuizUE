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
      content: "Question 1",
      answers: [
        { content: "corr", isCorrect: true },
        { content: "test", isCorrect: false },
        { content: "test2", isCorrect: false },
        { content: "test23", isCorrect: false }
      ]
    },
    {
      content: "Question 2",
      answers: [
        { content: "1", isCorrect: true },
        { content: "2", isCorrect: false },
        { content: "3", isCorrect: false },
        { content: "4", isCorrect: false }
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
