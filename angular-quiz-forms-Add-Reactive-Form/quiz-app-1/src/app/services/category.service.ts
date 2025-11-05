Sure, here's the proposed content for the file `/quiz-app/quiz-app/src/app/services/category.service.ts`:

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'your-api-url-here'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  filterCategories(categories: Category[], searchTerm: string): Category[] {
    return categories.filter(category => 
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}