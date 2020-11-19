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
import { MoreMovieComponent } from "./more-movie/more-movie.component";
import { MoreShowComponent } from "./more-show/more-show.component";


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: MovieComponent },
      { path: "command/:id", component: CommandComponent },
      { path: "more-movie", component: MoreShowComponent }
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
    DisplayMovieComponent,
    MoreMovieComponent,
    MoreShowComponent
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService]
})
export class AppModule {}
