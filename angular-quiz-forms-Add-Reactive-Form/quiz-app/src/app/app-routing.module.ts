import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'quiz/:id', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }