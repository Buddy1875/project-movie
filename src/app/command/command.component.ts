import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Datamovie } from "../datamovie";

@Component({
  selector: "app-command",
  templateUrl: "./command.component.html",
  styleUrls: ["./command.component.css"]
})
export class TimeLineComponent implements OnInit {
  movie: Datamovie[];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getComment().subscribe(val => (this.movie = val));
  }
}
