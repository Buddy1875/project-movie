import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { DetailsMovie } from "../datamovie";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-display-movie",
  templateUrl: "./display-movie.component.html",
  styleUrls: ["./display-movie.component.css"]
})
export class DisplayMovieComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  @Input() moviedetail: DetailsMovie;
  ngOnInit() {}
}
