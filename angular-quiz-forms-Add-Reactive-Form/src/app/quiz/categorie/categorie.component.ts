import { Component } from '@angular/core';
import { CategorieService } from './categorie.service';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent {
  categories: any;
  constructor(private categorieService: CategorieService, private quizService: QuizService,  private route: Router) { }

  ngOnInit(): void {
    //   this.route.params.subscribe(params => {
    //   this.quizService.playerName = params['playerName'];
    //   this.playerName = params['playerName'];
    // });
    this.categorieService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  searchByCategorie(categorieName: string) {
    this.quizService.searchQuizByCategorie(categorieName);
  }

}
