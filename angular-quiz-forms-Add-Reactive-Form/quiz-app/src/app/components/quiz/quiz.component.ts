import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  categoryId: string;
  questions: Question[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionService.getQuestionsByCategory(this.categoryId).subscribe(
      (data: Question[]) => {
        this.questions = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching questions', error);
        this.loading = false;
      }
    );
  }
}