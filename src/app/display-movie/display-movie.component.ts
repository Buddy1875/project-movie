import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { DetailsMovie } from "../datamovie";
import { FirebaseService } from "../firebase.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-display-movie",
  templateUrl: "./display-movie.component.html",
  styleUrls: ["./display-movie.component.css"]
})
export class DisplayMovieComponent implements OnInit {
  constructor(
    private firebaseService: FirebaseService,
    private route: Router,
    private activateRoute: ActivatedRoute
  ) {}

  @Input() moviedetail: DetailsMovie;
  ngOnInit() {}

  select() {
    this.route.navigate([`command/${this.moviedetail.name}`]);
  }
}
