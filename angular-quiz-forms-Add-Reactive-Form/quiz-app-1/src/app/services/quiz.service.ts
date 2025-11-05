Sure, here's the proposed content for the file `/quiz-app/quiz-app/src/app/services/quiz.service.ts`:

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'YOUR_API_URL_HERE/questions'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getQuestionsByCategory(categoryId: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}?categoryId=${categoryId}`);
  }
}