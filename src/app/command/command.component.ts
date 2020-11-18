import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Datamovie, SelectM } from "../datamovie";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-command",
  templateUrl: "./command.component.html",
  styleUrls: ["./command.component.css"]
})
export class CommandComponent implements OnInit {
  movie: Datamovie[];
  selectmovie: SelectM[];

  constructor(
    private firebaseService: FirebaseService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.firebaseService
      .getComment()
      .subscribe(val => (console.log(val), (this.movie = val))
    );

    // เพิ่ม detail
    this.activateRoute.params.subscribe(routeParam => {
      //console.log(routeParam.id)
      this.firebaseService.SelectMovie("AvengersEndgame").subscribe(tw => {
        //console.log(tw)
        this.selectmovie = tw
      })
    })
  }
}
