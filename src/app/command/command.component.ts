import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Datamovie } from "../datamovie";

@Component({
  selector: "app-time-line",
  templateUrl: "./time-line.component.html",
  styleUrls: ["./time-line.component.css"]
})
export class TimeLineComponent implements OnInit {
  movie: Datamovie[];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getComment().subscribe(val => (this.movie = val));
  }
}
