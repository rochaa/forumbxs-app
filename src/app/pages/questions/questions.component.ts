import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionModel } from './question.model';
import { NotificationHelper } from 'src/app/helpers/notification.helper';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {
  displayNewQuestion: Boolean;
  formNewQuestion: FormGroup;
  searchText: string = "";
  questions: QuestionModel[] = null;
  questionsFiltered: QuestionModel[] = null;

  constructor(
    private service: QuestionService,
    private fbNewPost: FormBuilder,
    private notification: NotificationHelper
  ) {
    this.formNewQuestion = this.fbNewPost.group({
      text: ['', Validators.required],
      user: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  openNewQuestion() {
    this.displayNewQuestion = true;
  }

  cancelNewQuestion() {
    this.displayNewQuestion = false;
  }

  loadQuestions() {
    this.service.getAll().subscribe(
      (questions) => {
        this.questions = questions;
        this.questionsFiltered = this.questions;
      }
    );
  }

  saveQuestion() {
    this.service.post(this.formNewQuestion.value).subscribe(
      (result) => {
        if (result.sucess) {
          this.notification.showSuccess(result.message);
          this.displayNewQuestion = false;
          this.formNewQuestion.reset();
          this.loadQuestions();
        }
      }, (result) => {
        this.notification.showErrors(result);
      }
    );
  }

  like(id: string) {
    this.service.like(id).subscribe(
      (result) => {
        if (result.sucess) {
          this.loadQuestions();
        }
      }, (result) => {
        this.notification.showErrors(result);
      }
    );
  }

  getNoAnswer(event: any) {
    let showOnlyNoAnswer = event.currentTarget.checked;
    if (showOnlyNoAnswer) {
      this.questionsFiltered = this.questions.filter(s => {
        return s.answers && s.answers.length == 0;
      });
    } else {
      this.questionsFiltered = this.questions;
    }
  }
}
