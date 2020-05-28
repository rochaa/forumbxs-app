import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionModel } from '../questions/question.model';
import { AnswerService } from './answer.service';
import { QuestionService } from '../questions/question.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html'
})
export class AnswersComponent implements OnInit {
  displayNewAnswer: Boolean;
  formNewAnswer: FormGroup;
  question: QuestionModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private answerService: AnswerService,
    private questionService: QuestionService,
    private fbNewPost: FormBuilder) {
    this.formNewAnswer = this.fbNewPost.group({
      text: ['', Validators.required],
      user: ['', Validators.required],
      questionId: ''
    });
  }

  ngOnInit(): void {
    this.loadQuestionWithAnswers();
  }

  openNewAnswer() {
    this.displayNewAnswer = true;
  }

  cancelNewAnswer() {
    this.displayNewAnswer = false;
  }

  loadQuestionWithAnswers() {
    this.route.paramMap.subscribe(params => {
      let questionId = params.get("questionId");
      this.questionService.getById(questionId).subscribe(
        (question) => {
          if (question) {
            this.question = question;
          }
          else {
            this.router.navigateByUrl("/");
          }
        },
        () => { this.router.navigateByUrl("/"); }
      );
    });
  }

  saveAnswer() {
    this.formNewAnswer.controls['questionId'].setValue(this.question.id);
    this.answerService.post(this.formNewAnswer.value).subscribe(
      (result) => {
        if (result.sucess) {
          this.toastr.success(result.message);
          this.displayNewAnswer = false;
          this.formNewAnswer.reset();
          this.loadQuestionWithAnswers();
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
