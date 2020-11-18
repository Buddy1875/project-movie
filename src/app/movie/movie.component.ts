import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { DetailsMovie } from "../datamovie";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  moviedetail: DetailsMovie[];

  constructor(
    private firebaseService: FirebaseService
  ) {
  }

  ngOnInit() {
    this.firebaseService.getMovie().subscribe(val => (this.moviedetail = val));
  }
}
