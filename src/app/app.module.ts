// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Base
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pipes
import { DateTimeFormatPipe } from './pipes/dateTimeFormat.pipe';
import { FilterPipe } from './pipes/filter.pipe';

// Modulos externos
import { ToastrModule } from 'ngx-toastr';

// Componentes compartilhados
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';

// Paginas do sistema
import { QuestionsComponent } from './pages/questions/questions.component';
import { AnswersComponent } from './pages/answers/answers.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsComponent,
    AnswersComponent,
    HomeComponent,
    ModalComponent,
    DateTimeFormatPipe,
    PostComponent,
    PostFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({ timeOut: 4000, preventDuplicates: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
