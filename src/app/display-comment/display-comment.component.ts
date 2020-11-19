import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Datamovie } from "../datamovie";
import { FirebaseService } from "../firebase.service";

import swal from "sweetalert2";

@Component({
  selector: "app-display-comment",
  templateUrl: "./display-comment.component.html",
  styleUrls: ["./display-comment.component.css"]
})
export class DisplayCommentComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  @Input() movie: Datamovie;
  ngOnInit() {
    this.movie = {
      ...this.movie,
      date: this.timeAgo(this.movie.date.toDate())
    };
  }

  timeAgo(val: Date) {
    const now = new Date();
    const diff = Math.abs(now.getTime() - val.getTime());
    const diffDay = Math.floor(diff / (1000 * 3600 * 24));
    const diffHouse = Math.ceil(diff / (1000 * 3600));
    const diffMinute = Math.ceil(diff / (1000 * 60));
    const diffSecond = Math.ceil(diff / 1000);

    if (diffSecond < 60) {
      return "Just now";
    }

    if (diffMinute < 60) {
      return `${diffMinute} mintue(s) ago`;
    }

    if (diffHouse < 24) {
      return `${diffHouse} Hour(s) ago`;
    }
    return `${diffDay} day(s) ago`;
  }

  del() {
    if (window.confirm("confirm")) {
      this.firebaseService
        .deletecomment(this.movie.id)
        .then(() => {
          this.showmodelsuccess();
        })
        .catch(err => {
          this.showmodelerror();
        });
    }
  }

  showmodelsuccess() {
    swal.fire({
      title: "Delete !",
      html: "Delete Complate",
      icon: "success"
    });
  }

  showmodelerror() {
    swal.fire({
      title: "Delete !",
      html: "Delete Cancel",
      icon: "error"
    });
  }

  model() {
    swal
      .fire({
        title: "Delete !",
        html: "Comfire to Dalate",
        icon: "warning",
        showConfirmButton: true,
        showCancelButton: true
      })
      .then(willDelete => {
        if (willDelete.value) {
          this.firebaseService.deletecomment(this.movie.id);
          this.showmodelsuccess();
        } else {
          this.showmodelerror();
        }

        console.log(willDelete);
      });
  }

  // confirem() {
  //   swal({
  //     title: "Are you sure?",
  //     text:
  //       "Once deleted, you will not be able to recover this imaginary file!",
  //     type: "warning",
  //     showConfirmButton: true,
  //     showCancelButton: true
  //   }).then(willDelete => {
  //     if (willDelete.value) {
  //       swal("Success");
  //     } else {
  //       swal("Fail");
  //     }

  //     console.log(willDelete);
  //   });
  // }
}
