import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { DetailsMovie } from "../datamovie";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  moviedetail: DetailsMovie[];

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(route.snapshot.queryParamMap.get("namemovie"));
  }

  ngOnInit() {
    this.firebaseService.getMovie().subscribe(val => (this.moviedetail = val));
  }
}
