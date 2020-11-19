import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Datamovie, SelectM } from "../datamovie";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

import swal from "sweetalert2";

@Component({
  selector: "app-command",
  templateUrl: "./command.component.html",
  styleUrls: ["./command.component.css"]
})
export class CommandComponent implements OnInit {
  movie: Datamovie[];
  selectmovie: SelectM[];

  form = new FormGroup({
    msg: new FormControl("")
  });

  constructor(
    private firebaseService: FirebaseService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(routeParam => {
      this.firebaseService.SelectComment(routeParam.id).subscribe(tw => {
        this.movie = tw;
      });
    });
    // Select Movie
    this.activateRoute.params.subscribe(routeParam => {
      this.firebaseService.SelectMovie(routeParam.id).subscribe(tw => {
        this.selectmovie = tw;
      });
    });
  }

  addComment() {
    this.activateRoute.params.subscribe(routeParam => {
      if (this.form.value.msg != "") {
        this.firebaseService.addComment(routeParam.id, this.form.value.msg);
        console.log(this.form.value.msg);

        this.firebaseService.UpdateCom(routeParam.id);
        console.log(routeParam.id);
        this.showmodelsuccess("Comment Complete");
      } else {
        this.showmodelerror("Comment Fails");
      }
    });
  }

  updatelikes() {
    this.activateRoute.params.subscribe(routeParam => {
      this.firebaseService.UpdateLike(routeParam.id);
      console.log(routeParam.id);
      this.showmodelsuccess("Like !");
    });
  }

    updatedislikes() {
    this.activateRoute.params.subscribe(routeParam => {
      this.firebaseService.UpdateDisLike(routeParam.id);
      console.log(routeParam.id);
      this.showmodelsuccess("Dislike !");
    });
  }

  showmodelsuccess(msg: string) {
    swal.fire({
      title: "Success",
      html: msg,
      icon: "success"
    });
  }

  showmodelerror(msg: string) {
    swal.fire({
      title: "Error",
      html: msg,
      icon: "error"
    });
  }
}
