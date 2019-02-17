
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProgressPlantComponent } from './components/progress-plant/progress-plant.component';
import { CongratsComponent } from './components/congrats/congrats.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { TerrariumComponent } from './components/terrarium/terrarium.component';
import { TerrariumCanvasComponent } from './components/terrarium-canvas/terrarium-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    AnswerComponent,
    ProgressPlantComponent,
    CongratsComponent,
    QuizQuestionComponent,
    AnswerComponent,
    TerrariumComponent,
    TerrariumCanvasComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'quiz', component: QuizComponent }
    ])
  ],
  entryComponents: [
    AnswerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
