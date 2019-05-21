import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: QueryDocumentSnapshot<any>;
  show = false;


  id: string;
  data: any;

  repliesRef: AngularFirestoreCollection;
  replies: Observable<any>;

  path: string;

  ngOnInit() {

    // Document ID
    this.id = this.comment.id;

    // Document data
    this.data = this.comment.data();

    // Full path in the database
    this.path = this.comment.ref.path;

    // Replies to this comment
    this.repliesRef = this.db.collection(this.path + '/comments');
    this.replies = this.repliesRef.snapshotChanges(); // .pipe(tap(console.log));
  }

  showReplies() {
    this.show = true;
  }

  addReply(input) {
    this.repliesRef.add({ text: input.value, uid: 'jeffd23' });
  }


  constructor(private db: AngularFirestore) { }
}
