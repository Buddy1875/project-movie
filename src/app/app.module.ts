import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { MovieComponent } from "./movie/movie.component";
import { CommandComponent } from "./command/command.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "movie", component: MovieComponent },
      { path: "comment", component: CommandComponent }
    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    MovieComponent,
    CommandComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
