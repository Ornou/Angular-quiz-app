import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  categoryId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    if (this.categoryId) {
      this.loadQuestions(this.categoryId);
    }
  }

  loadQuestions(categoryId: string): void {
    this.quizService.getQuestionsByCategory(categoryId).subscribe((data: Question[]) => {
      this.questions = data;
    });
  }
}