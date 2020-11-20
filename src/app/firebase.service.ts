import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Datamovie, DetailsMovie, SelectM } from "./datamovie";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getComment() {
    let DocRef = this.firestore.collection<Datamovie>("review", e =>
      e.orderBy("date", "desc")
    );
    return DocRef.valueChanges();
  }

  getMovie() {
    let DocRef = this.firestore.collection<DetailsMovie>("movie", e =>
      e.orderBy("like", "desc").limit(3)
    );
    return DocRef.valueChanges();
  }

  getMoreMovie() {
    let DocRef = this.firestore.collection<DetailsMovie>("movie", e =>
      e.orderBy("comment", "desc")
    );
    return DocRef.valueChanges();
  }

  SelectMovie(n: string) {
    let DocRef = this.firestore.collection<SelectM>("movie", e =>
      e.where("id", "==", n)
    );

    return DocRef.valueChanges();
  }

  SelectComment(name: string) {
    let DocRef = this.firestore.collection<Datamovie>("review", e =>
      e.where("moviename", "==", name)
    );
    return DocRef.valueChanges();
  }

  addComment(name: string, messege: string) {
    let comment = {
      msg: messege,
      moviename: name,
      date: firebase.default.firestore.Timestamp.now()
    };
    const ref = this.firestore.collection("review").add(comment);
    ref.then(newRef => {
      const upDateID = {
        id: newRef.id
      };
      newRef.update(upDateID);
    });

    return ref;
  }

  UpdateCom(id: string) {
    console.log("update");
    let addcom = {
      comment: firebase.default.firestore.FieldValue.increment(1)
    };

    return this.firestore
      .collection("movie")
      .doc(id)
      .update(addcom);
  }

  UpdateLike(id: string) {
    let likes = {
      like: firebase.default.firestore.FieldValue.increment(1)
    };

    return this.firestore.collection("movie")
    .doc(id)
    .update(likes);
  }

    UpdateDisLike(id: string) {
    let likes = {
      dislike: firebase.default.firestore.FieldValue.increment(1)
    };

    return this.firestore.collection("movie")
    .doc(id)
    .update(likes);
  }

  deletecomment(id: string) {
    return this.firestore
      .collection("review")
      .doc(id)
      .delete();
  }
}
