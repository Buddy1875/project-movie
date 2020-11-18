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

  timeAgo(val: Date) {
    const now = new Date();
    const diff = Math.abs(now.getTime() - val.getTime());
    const diffDay = Math.ceil(diff / (1000 * 3600 * 24));
    const diffHouse = Math.ceil(diff / (1000 * 3600));
    const diffMinute = Math.ceil(diff / (1000 * 60));
    const diffSecond = Math.ceil(diff / 1000);

    if (diffSecond < 60) {
      return "Juss now";
    }

    if (diffMinute < 60) {
      return `${diffMinute} mintue(s) ago`;
    }

    if (diffHouse < 24) {
      return `${diffHouse} Hour(s) ago`;
    }
    return `${diffDay} day(s) ago`;
  }
}
