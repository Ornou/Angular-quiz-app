import { Component, OnInit } from '@angular/core';
import { CategorieService } from './categorie.service';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit {
  categories: any;
  selectedCategory: any = null;
  filteredQuizzes: any[] = [];
  filteredCategories: any[] = [];
  searchText: string = '';
  

  quizzes: any[] = [];

  constructor(private categorieService: CategorieService, private quizService: QuizService,  private route: Router) { }

  ngOnInit(): void {
    
    this.categorieService.getAllCategories().subscribe(data => {
      this.categories = data;
      this.filteredCategories = this.categories;
    });

    
  }
  
 
  filterCategories() {
    if (!this.searchText) {
      this.filteredCategories = this.categories;
    } else {
      this.filteredCategories = this.categories.filter((category:any) =>
        category.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  // selectCategory(category: any) {
  //   this.selectedCategory = category;
  //   this.filteredQuizzes = this.quizzes.filter(q => q.categoryId === category.id);
  // }

  // searchByCategorie(categorieName: string) {
  //   this.quizService.searchQuizByCategorie(categorieName);
  // }

}
