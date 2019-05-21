import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {

  comments;

  ngOnInit() {
    this.comments = this.db.collectionGroup('comments', ref => ref.where('uid', '==', 'jeffd23')).snapshotChanges();
  }

  constructor(private db: AngularFirestore) { }
}
