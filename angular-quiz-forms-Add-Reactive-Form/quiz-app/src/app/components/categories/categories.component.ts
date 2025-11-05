import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  searchTerm: string = '';

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      this.filteredCategories = data;
    });
  }

  filterCategories(): void {
    this.filteredCategories = this.categories.filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  resetFilter(): void {
    this.searchTerm = '';
    this.filteredCategories = this.categories;
  }

  navigateToQuiz(categoryId: number): void {
    this.router.navigate(['/quiz', categoryId]);
  }
}