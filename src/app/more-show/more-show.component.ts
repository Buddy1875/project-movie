import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { DetailsMovie } from "../datamovie";

@Component({
  selector: 'app-more-show',
  templateUrl: './more-show.component.html',
  styleUrls: ['./more-show.component.css']
})
export class MoreShowComponent implements OnInit {

  moviedetail: DetailsMovie[];

  constructor(
    private firebaseService: FirebaseService
  ) {
  }

  ngOnInit() {
    this.firebaseService.getMoreMovie().subscribe(val => (this.moviedetail = val));
  }
}
