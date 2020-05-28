import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerModel } from './answer.model';
import { ResultModel } from 'src/app/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  baseURL = `${environment.apiUrl}/v1/post/answer`;

  constructor(private client: HttpClient) { }

  post(model: AnswerModel): Observable<ResultModel> {
    return this.client.post<ResultModel>(this.baseURL, model);
  }

  like(id: string): Observable<ResultModel> {
    return this.client.post<ResultModel>(`${this.baseURL}/${id}/like`, null);
  }
}
