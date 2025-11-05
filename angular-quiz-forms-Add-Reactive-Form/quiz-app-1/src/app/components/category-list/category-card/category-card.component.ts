Sure, here's the proposed content for the file `/quiz-app/quiz-app/src/app/components/category-list/category-card/category-card.component.ts`:

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Output() categorySelected = new EventEmitter<Category>();

  onSelect() {
    this.categorySelected.emit(this.category);
  }
}