import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { DetailsMovie } from "../datamovie";
import { FirebaseService } from "../firebase.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-more-movie",
  templateUrl: "./more-movie.component.html",
  styleUrls: ["./more-movie.component.css"]
})
export class MoreMovieComponent implements OnInit {
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
