import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() category!: Category;

  constructor(private router: Router) {}

  navigateToQuiz() {
    this.router.navigate(['/quiz', this.category.id]);
  }
}