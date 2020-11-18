import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Datamovie, SelectM } from "../datamovie";

@Component({
  selector: "app-command",
  templateUrl: "./command.component.html",
  styleUrls: ["./command.component.css"]
})
export class CommandComponent implements OnInit {
  movie: Datamovie[];
  select: SelectM[];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService
      .getComment()
      .subscribe(val => (console.log(val), (this.movie = val)));
    this.firebaseService
      .SelectMovie("Avengers Endgame")
      .subscribe(val => (console.log(val), (this.select = val)));
  }
}
