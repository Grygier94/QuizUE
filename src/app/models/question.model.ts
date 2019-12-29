import { Answer } from './answer.model';

export interface Question {
    content: string;
    answers: Answer[];
}