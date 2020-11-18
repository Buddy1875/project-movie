import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Datamovie } from "./datamovie";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getComment() {
    let DocRef = this.firestore.collection<Datamovie>("review", e =>
      e.orderBy("date", "desc")
    );
    return DocRef.valueChanges();
  }

  // addTweet(name: string, messege: string) {
  //   let tweet = {
  //     name: name,
  //     msg: messege,
  //     date: firebase.default.firestore.Timestamp.now()
  //   };
  //   const ref = this.firestore.collection("review").add(tweet);
  //   ref.then(newRef => {
  //     const upDateID = {
  //       id: newRef.id
  //     };
  //     newRef.update(upDateID);
  //   });
  //   return ref;
  // }
  // //delete
  // deleteTweet(id: string) {
  //   return this.firestore
  //     .collection("review")
  //     .doc(id)
  //     .delete();
  // }
}
