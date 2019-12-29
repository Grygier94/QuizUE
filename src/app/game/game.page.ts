import { Observable } from 'rxjs/internal/Observable';
import { EndGameComponent } from './end-game/end-game.component';
import { Question } from './../models/question.model';
import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  timer: any;
  question: Question;
  time = 25.0;
  timeProgress = 0;
  score = 0;
  questionIndex = 0;
  time2 = new Observable((observer) => {
    
  });

  constructor(public toastController: ToastController,
    private modalController: ModalController,
    private gameService: GameService) { }

  ngOnInit() {
    this.question = this.gameService.getQuestion();
    this.initTimer();
  }

  submitAnswer(answer) {
    if (answer.isCorrect)
      this.answerCorrect();
    else
      this.answerIncorrect();

    if (this.questionIndex >= 9)
      this.gameOver();
    else
      this.nextQuestion();
  }

  private answerCorrect() {
    this.presentToast("Answer correct!")
    this.score++;
  }

  private answerIncorrect() {
    this.presentToast("Answer incorrect!");
  }

  private timesUp() {
    this.presentToast("Time's up!");
    this.nextQuestion();
  }

  private nextQuestion() {
    this.time = 10;
    this.questionIndex++;
    this.question = this.gameService.getQuestion();
  }

  private gameOver() {
    this.timer.unsubscribe();
    if (this.time < 0)
      this.time = 0;

    this.presentToast("Game Over, Bitch!");
    this.presentEndGameModal();
  }

  private initTimer() {
    this.timer = interval(10)
      .subscribe((val) => {
        this.time -= 0.01;
        if (this.time <= 0)
          this.timesUp();
      });
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: "primary"
    });
    toast.present();
  }

  private async presentEndGameModal() {
    const modal = await this.modalController.create({
      component: EndGameComponent,
      componentProps: {
        'score': this.score
      }
    });

    await modal.present();
    modal.onWillDismiss().then(data => {
      this.question = this.gameService.getQuestion();
      this.initTimer();
      this.setDefaults();
    });
  }

  private setDefaults() {
    this.time = 10.0;
    this.score = 0;
    this.questionIndex = 0;
  }
}
