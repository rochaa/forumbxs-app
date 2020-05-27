import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from './question.model';
import { ResultModel } from 'src/app/models/result.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseURL = `${environment.apiUrl}/v1/post/question`;

  constructor(private client: HttpClient) { }

  post(model: QuestionModel): Observable<ResultModel> {
    return this.client.post<ResultModel>(this.baseURL, model);
  }

  getAll(): Observable<QuestionModel[]> {
    return this.client.get<QuestionModel[]>(this.baseURL);
  }
}
