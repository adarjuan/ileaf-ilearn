
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
import { ChooseTerrariumModalComponent } from './components/choose-terrarium-modal/choose-terrarium-modal.component';

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
    ChooseTerrariumModalComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'answer', component: AnswerComponent},
      { path: 'congrats', component: CongratsComponent},
    ])
  ],
  entryComponents: [
    AnswerComponent,
    ChooseTerrariumModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
