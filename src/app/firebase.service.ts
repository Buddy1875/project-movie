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
      e.orderBy("name", "desc")
    );
    return DocRef.valueChanges();
  }

  SelectMovie(n: string) {
    let DocRef = this.firestore.collection<SelectM>("movie", e =>
      e.where("name", "==", n)
    );

    return DocRef.valueChanges();
  }

}
