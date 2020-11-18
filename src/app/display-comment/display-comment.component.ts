import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Datamovie } from "../datamovie";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-display-comment",
  templateUrl: "./display-comment.component.html",
  styleUrls: ["./display-comment.component.css"]
})
export class DisplayCommentComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  @Input() movie: Datamovie;
  ngOnInit() {
    // this.movie = {
    //   ...this.movie,
    //   date: this.timeAgo(this.movie.date.toDate())
    // };
  }
}
