Sure, here's the proposed content for the file `/quiz-app/quiz-app/src/app/app-routing.module.ts`:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoryListComponent },
  { path: 'quiz/:id', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }