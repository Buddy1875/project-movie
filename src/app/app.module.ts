import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { enviroment } from "./enviroment";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { MovieComponent } from "./movie/movie.component";
import { CommandComponent } from "./command/command.component";
import { DisplayCommentComponent } from "./display-comment/display-comment.component";

import { FirebaseService } from "./firebase.service";
import { DisplayMovieComponent } from "./display-movie/display-movie.component";
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "movie", component: MovieComponent },
      { path: "command", component: CommandComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    MovieComponent,
    CommandComponent,
    DisplayCommentComponent,
    DisplayMovieComponent
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService]
})
export class AppModule {}
