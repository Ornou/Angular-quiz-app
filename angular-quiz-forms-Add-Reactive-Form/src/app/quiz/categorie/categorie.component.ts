import { Component } from '@angular/core';
import { CategorieService } from './categorie.service';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent {
  categories: any;
  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
