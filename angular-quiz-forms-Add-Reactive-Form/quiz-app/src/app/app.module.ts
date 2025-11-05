import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryCardComponent,
    QuizComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }