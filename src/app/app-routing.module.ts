import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { AnswersComponent } from './pages/answers/answers.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: QuestionsComponent },
      { path: 'answers', component: AnswersComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
