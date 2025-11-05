
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { QuizService } from '../shared/services/quiz.service';

@Component({

  selector: 'app-quiz',

  templateUrl: './quiz.component.html',

  styleUrls: ['./quiz.component.scss'],

  standalone: false,

})

export class QuizComponent implements OnInit {

  playerName = '';

  get isQuizFinished() {

    return this.quizService.isQuizFinished;

  }

  constructor(

    private quizService: QuizService,

    private router: Router,

    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {

      this.quizService.playerName = params['playerName'];

      this.playerName = params['playerName'];

    });

    this.route.queryParams.subscribe((q) => {

      const category = q['category'];

      this.quizService.resetQuiz();

      if (category) {

        this.quizService.getQuizContent(category);

      } else {

        this.quizService.getQuizContent();

      }

    });

  }

  goToResultPage() {

    this.router.navigate(['/result']);

  }

}
 