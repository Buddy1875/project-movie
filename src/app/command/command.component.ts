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
        this.showmodelsuccess();
      } else {
        this.showmodelerror();
      }
    });
  }

  showmodelsuccess() {
    swal.fire({
      title: "Comment",
      html: "Comment Complate",
      icon: "success"
    });
  }

  showmodelerror() {
    swal.fire({
      title: "Comment",
      html: "Input your comment",
      icon: "error"
    });
  }
}
