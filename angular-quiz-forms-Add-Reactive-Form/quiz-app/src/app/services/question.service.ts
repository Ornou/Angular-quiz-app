import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'https://your-api-url.com/questions'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getQuestionsByCategory(categoryId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}?categoryId=${categoryId}`);
  }
}