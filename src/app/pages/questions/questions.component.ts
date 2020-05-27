import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QuestionModel } from './question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {
  displayNewQuestion: Boolean;
  formNewQuestion: FormGroup;
  questions: QuestionModel[] = null;

  constructor(
    private service: QuestionService,
    private toastr: ToastrService,
    private fbNewQuestion: FormBuilder
  ) {
    this.formNewQuestion = this.fbNewQuestion.group({
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
      (questions) => { this.questions = questions; }
    );
  }

  saveQuestion() {
    this.service.post(this.formNewQuestion.value).subscribe(
      (result) => {
        if (result.sucess) {
          this.toastr.success(result.message);
          this.displayNewQuestion = false;
          this.formNewQuestion.reset();
          this.loadQuestions();
        }
      }, (result) => {
        if (result.error && result.error.data) {
          result.error.data.forEach((notification: string) => {
            this.toastr.error(notification);
          });
        } else {
          this.toastr.error(result.error.message);
        }
      }
    );
  }
}
