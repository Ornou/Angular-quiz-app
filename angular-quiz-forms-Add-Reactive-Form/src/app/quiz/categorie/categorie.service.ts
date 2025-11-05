import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categorie:{ id: number; name: string;} |undefined
  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get('http://localhost:3000/categories');
   }
  
}
