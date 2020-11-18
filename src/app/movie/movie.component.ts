import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Datamovie, DetailsMovie } from "../datamovie";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  detailsmovie: DetailsMovie[];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getMovie().subscribe(val => (this.detailsmovie = val));
  }
}
